import connectMongoDB from '@libs/mongodb'
import User from '@models/User'
import nodemailer from 'nodemailer'
import { NextResponse } from "next/server"


export async function POST(request, context) {
    const { params } = context
    
    /* Verify User */

    await connectMongoDB()

    const userId = params.token
    await User.findOneAndUpdate(
        { _id: userId},
        {
            emailVerified: true
        }
    )
    
    return NextResponse.json({ message: "User updated"}, { status: 200 })
}