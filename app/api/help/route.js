import transporter from "@libs/mailer";
import { NextResponse } from "next/server";
import connectMongoDB from '@libs/mongodb';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Todos los campos son obligatorios." }, { status: 400 });
        }

        // You can save the message to a collection if you want

        var receivedHelpMail = {
            from: '"Soporte VAS" <soporte@visualartsschool.com>',
            to: email,
            subject: 'Estamos para ayudarte - Escuela de Artes Visuales',
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
                                <h2>Hola ${name}, hemos recibido tu solicitud de ayuda</h2>
                                <p>Gracias por comunicarte con el equipo de soporte de la <strong>Escuela de Artes Visuales</strong>.</p>

                                <p>Tu mensaje ha sido recibido y uno de nuestros miembros lo está revisando. Te responderemos lo antes posible, generalmente dentro de las próximas 24 horas.</p>

                                <p>Si necesitas agregar más información o archivos a tu solicitud, puedes responder directamente a este correo.</p>

                                <p>¡Gracias por tu paciencia y por ser parte de nuestra comunidad creativa!</p>

                                <p>Saludos cordiales,<br>
                                El equipo de Escuela de Artes Visuales</p>
                            </div>

                            <div class="footer">
                                <p>© ${new Date().getFullYear()} Escuela de Artes Visuales. Todos los derechos reservados.</p>
                                <p>Este mensaje es una confirmación automática. Te responderemos personalmente en breve.</p>
                            </div>
                        </body>
                    </html>

                `
        }

        var needHelpMail = {
            from: '"Notificaciones VAS" <notificaciones@visualartsschool.com>',
            to: 'faridruano@visualartsschool.com',
            subject: 'Estamos para ayudarte - Escuela de Artes Visuales',
            html: `
                <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                            .header { text-align: center; margin-bottom: 20px; background-color:rgb(0, 0, 0); color: #00ff95; border-radius: 20px;}
                            .separator-logo{ height: 20px; }
                            .logo-container { text-align: center; height: 60px; }
                            .logo { width: auto; height: 60px; }
                            .content { background-color: #f1f1f1; padding: 20px; border-radius: 20px; color: #161616; font-weight: 500; }
                            .footer { margin-top: 20px; font-size: 12px; color: #777; text-align: center; }
                            .message-box { background-color: #fff; border-left: 4px solid #00ff95; padding: 15px; margin: 15px 0; border-radius: 10px; }
                            .label { font-weight: bold; margin-top: 10px; display: block; }
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
                            <h2>📩 Nueva solicitud de ayuda</h2>
                            <p>Has recibido una nueva solicitud de soporte desde el sitio web de la <strong>Escuela de Artes Visuales</strong>.</p>

                            <span class="label">👤 Nombre:</span>
                            <p>${name}</p>

                            <span class="label">📧 Correo:</span>
                            <p>${email}</p>

                            <span class="label">📝 Mensaje:</span>
                            <div class="message-box">
                                ${message}
                            </div>

                            <p>Escribe un nuevo correo a la dirección del usuario por favor para responder a su solicitud.</p>
                        </div>

                        <div class="footer">
                            <p>© ${new Date().getFullYear()} Escuela de Artes Visuales. Todos los derechos reservados.</p>
                            <p>Este mensaje fue generado automáticamente desde el formulario de contacto.</p>
                        </div>
                    </body>
                    </html>

                `
        }

        // Send email to support
        if (process.env.NODE_ENV === 'development') {
            return NextResponse.json({ success: true }, { status: 200 })

        } else {
            try {
                await Promise.all([
                    transporter.sendMail(receivedHelpMail),
                    transporter.sendMail(needHelpMail)
                ]);
                console.log('Received Help & Need Help email sent succesfully:', email)
            } catch (error) {
                console.error('Error at sending the Received Help & Need Help email:', error.message)
            }
            return NextResponse.json({ success: true }, { status: 200 })


        }

    } catch (error) {
        console.error("Error en el formulario de ayuda:", error);
        return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 500 });
    }
}