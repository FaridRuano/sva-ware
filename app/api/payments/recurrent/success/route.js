// filepath: [route.js](http://_vscodecontentref_/0)
import { NextResponse } from "next/server";
import connectMongoDB from '@libs/mongodb';
import User from "@models/User";
import Product from "@models/Product";
import Purchase from "@models/Purchase";
import Stripe from "stripe";
import transporter from "@libs/mailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16' // o la versión actual
});

export async function POST(request) {
    try {
        const body = await request.json();
        const { productId, email, paymentIntentId, subscriptionId } = body;

        if (!productId || !email || !paymentIntentId) {
            return NextResponse.json({ error: "Product ID, email and paymentIntentId are required" }, { status: 400 });
        }

        await connectMongoDB();

        // Validate user
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Fetch product info
        const product = await Product.findById(productId);
        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        let invoiceUrl = null
        if (paymentIntentId) {
            const intent = await stripe.paymentIntents.retrieve(paymentIntentId)
            if (intent.latest_invoice) {
                const invoice = await stripe.invoices.retrieve(intent.latest_invoice)
                invoiceUrl = invoice.invoice_pdf
            }
        }

        // After fetching product and before saving user
        if (product.type === 'subscription') {
            // Update user.subscription object
            user.subscription.isActive = true;
            user.subscription.subType = product.subType || 'monthly';
            user.subscription.startDate = new Date();
            user.subscription.lastPaymentDate = new Date();
            let nextDate = new Date();
            let livesessions = 1;
            if (product.subType === 'quarterly') {
                nextDate.setMonth(nextDate.getMonth() + 3);
                livesessions = 3;
            } else if (product.subType === 'semestral') {
                nextDate.setMonth(nextDate.getMonth() + 6);
                livesessions = 6;
            } else {
                nextDate.setMonth(nextDate.getMonth() + 1);
            }
            user.subscription.nextPaymentDate = nextDate;
            user.subscription.paymentMethod = 'stripe';
            user.subscription.endDate = nextDate;
            user.subscription.livesessions = livesessions;

            // Guarda el Stripe Subscription ID
            if (subscriptionId) {
                user.subscription.stripeSubscriptionId = subscriptionId;
            }

            // Add payment to user.paymentHistory
            user.paymentHistory.push({
                product: product._id,
                amount: product.price,
                paymentDate: new Date(),
                paymentMethod: 'stripe',
                transactionId: paymentIntentId,
            });
        }

        await user.save();

        await stripe.paymentIntents.update(paymentIntentId, {
            receipt_email: user.email
        });


        var purchaseMail = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Gracias por tu suscripción - Escuela de Artes Visuales',
            html: `
                <!DOCTYPE html>
                    <html>
                        <head>
                            <style>
                                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                                .header { text-align: center; margin-bottom: 20px; background-color:rgb(0, 0, 0); color: #00ff95; border-radius: 20px;}
                                .separator-logo{ height: 20px;}
                                .logo-container{text-align: center;  height: 60px;}
                                .logo { width: auto; height: 60px; }
                                .content { background-color: #f1f1f1; padding: 20px; border-radius: 5px; color: #161616; border-radius: 20px; font-weight: 500;}
                                .button { 
                                    display: inline-block; 
                                    padding: 10px 20px; 
                                    background-color: #00ff95; 
                                    color: rgb(0, 0, 0) !important; 
                                    font-weight: 600;
                                    text-decoration: none; 
                                    border-radius: 20px; 
                                    margin: 15px 0;
                                }
                                .footer { 
                                    margin-top: 20px; 
                                    font-size: 12px; 
                                    color: #777; 
                                    text-align: center;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="header">
                                <div class="separator-logo"></div>
                                <div class="logo-container">
                                    <img
                                        src="https://visualartsschool.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-navbar.257dcda8.webp&w=96&q=75"
                                        alt="Escuela de Artes Visuales Logo" class="logo">
                                </div>
                                <div class="separator-logo"></div>
                            </div>

                            <div class="content">
                                <h2>¡Gracias por tu suscripción, ${user.name}!</h2>
                                <p>Has completado tu pedido exitosamente en la <strong>Escuela de Artes Visuales</strong>. 🎉</p>

                                <p>Estamos felices de tenerte como parte de nuestra comunidad creativa. Aquí tienes los detalles de tu suscripción:</p>

                                <ul>
                                    <li><strong>Producto:</strong> ${product.name}</li>
                                    <li><strong>Fecha de compra:</strong> ${new Date().toLocaleDateString()}</li>
                                    <li><strong>Pedido N.º:</strong> ${paymentIntentId || '0000000000000000'}</li>
                                </ul>

                                <p>Ahora puedes acceder a todo el contenido de nuestra plataforma en:</p>

                                <p>
                                    <a href="https://visualartsschool.com/client/profile" target="_blank" class="button">
                                        Explorar el contenido
                                    </a>
                                </p>

                                <p>¿Tienes preguntas o necesitas ayuda? Escríbenos a <a href="mailto:faridruano@visualartsschool.com">faridruano@visualartsschool.com</a>.</p>

                                <p>Gracias nuevamente por tu confianza. ¡Nos emociona acompañarte en tu crecimiento artístico!</p>

                                <p>Saludos,<br>
                                El equipo de Escuela de Artes Visuales</p>
                            </div>

                            <div class="footer">
                                <p>© ${new Date().getFullYear()} Escuela de Artes Visuales. Todos los derechos reservados.</p>
                                <p>Si no realizaste esta compra, por favor contáctanos de inmediato.</p>
                            </div>
                        </body>
                    </html>

                `
        }

        if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({ success: true }, { status: 200 });
        } else {
            try {
                await transporter.sendMail(purchaseMail)
                console.log('Confirmation subscription email sent succesfully:', email)
            } catch (error) {
                console.error('Error at sending the confirmation subscription email:', error.message)
            }
            return NextResponse.json({ success: true }, { status: 200 });

        }

    } catch (error) {
        console.error("Save purchase error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}