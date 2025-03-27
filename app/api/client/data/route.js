import mongoose from "mongoose"
import { NextResponse } from "next/server"
import connectMongoDB from '@libs/mongodb';
import User from "@models/User";

export async function GET(request) {

    await connectMongoDB()

    const url = request.nextUrl

    const email = url.searchParams.get('email')

    try {
        const user = await User.findOne({ email: email }).select('_id email name emailVerified')

        if (!user) {
            return NextResponse.json({ exists: false })
        }

        return NextResponse.json({ userData: user })

    } catch (error) {
        console.error('Error fetching user:', error)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}