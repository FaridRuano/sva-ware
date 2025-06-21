// filepath: [route.js](http://_vscodecontentref_/0)
import { NextResponse } from "next/server";
import connectMongoDB from '@libs/mongodb';
import User from "@models/User";
import Product from "@models/Product";
import Purchase from "@models/Purchase";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16' // o la versión actual
});

export async function POST(request) {
    try {
        const body = await request.json();
        const { productId, email, paymentIntentId } = body;

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

        const purchase = await Purchase.create({
            user: user._id,
            stripePaymentIntentId: paymentIntentId || null,
            stripeSessionId: null,
            invoiceUrl,
            products: [{
                productId: productId.toString(),
                name: product.name,
                type: product.type,
                price: product.price
            }],
            amount: product.price,
            currency: product.currency || 'usd',
            status: 'paid',
            createdAt: new Date()
        })

        await stripe.paymentIntents.update(paymentIntentId, {
            receipt_email: user.email
        });

        return NextResponse.json({ success: true, purchase }, { status: 200 });
    } catch (error) {
        console.error("Save purchase error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}