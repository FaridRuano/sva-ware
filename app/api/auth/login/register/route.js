import connectMongoDB from '@libs/mongodb';
import User from '@models/User';
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import transporter from '@libs/mailer'

export async function POST(request) {
    const { name, email, password } = await request.json()

    await connectMongoDB()

    /* Check Email */

    const existingUser = await User.findOne({ email })

    if (existingUser) {
        return NextResponse.json(
            {
                message: 'Email already exists',
                error: true
            },
            { status: 200 },
        )
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    /* Create User */

    const newUser = await User.create({ name, email, password: hashedPassword })

    /* Send Email */

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Verificación de cuenta - Escuela de Artes Visuales',
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
                        <h2>Verifica tu correo electrónico</h2>
                        <p>¡Gracias por registrarte en la Escuela de Artes Visuales!</p>
                        <p><b>${name}</b>, para completar tu registro, por favor verifica tu dirección de
                            correo electrónico haciendo clic en el siguiente botón:</p>

                        <p style="text-align: center;">
                            <a
                                href="${process.env.PUBLIC_API_URL}/verify?token=${newUser._id}"
                                class="button">Verificar mi cuenta</a>
                        </p>

                        <p>Si el botón no funciona, copia y pega este enlace en tu
                            navegador:</p>
                        <p><small>${process.env.PUBLIC_API_URL}/verify?token=${newUser._id}</small></p>
                    </div>

                    <div class="footer">
                        <p>© ${new Date().getFullYear()} Escuela de Artes Visuales. Todos
                            los derechos reservados.</p>
                        <p>Si no solicitaste este registro, por favor ignora este
                            mensaje.</p>
                    </div>
                </body>
            </html>
            `
    }

    if (process.env.NODE_ENV === 'development') {
        return NextResponse.json({ message: "Data created" }, { status: 200 })
    } else {
        try {
            await transporter.sendMail(mailOptions)
            console.log('Verification email sent succesfully:', email)
        } catch (error) {
            console.error('Error at sending the verification email:', error.message)
        }
        return NextResponse.json({ message: "Data created" }, { status: 200 })
    }

}