import connectMongoDB from '@libs/mongodb';
import User from '@models/User';
import nodemailer from 'nodemailer';
import { NextResponse } from "next/server"

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

    /* Create User */

    const newUser = await User.create({ name, email, password })

    /* Send Email */

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Verifica tu correo',
        text: `Gracias por registrarte! Por favor verifica tu correo haciendo clic en este enlace: 
        http://localhost:3000/verify?token=${newUser._id}`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Data created"}, { status: 200 })
}