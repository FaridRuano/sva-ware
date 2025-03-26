import connectMongoDB from '@libs/mongodb';
import User from '@models/User';
import nodemailer from 'nodemailer';
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
})

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
        text: `Gracias por registrarte! Por favor verifica tu correo haciendo clic en este enlace: 
        ${process.env.PUBLIC_API_URL}/verify?token=${newUser._id}`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Data created"}, { status: 200 })
}