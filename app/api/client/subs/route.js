import mongoose from "mongoose"
import { NextResponse } from "next/server"
import connectMongoDB from '@libs/mongodb';
import User from "@models/User";

export async function POST(request) {

    await connectMongoDB()

    const { email, action } = await request.json();

    switch (action) {
        case 'subexpired':
            try {
                const user = await User.findOne({ email: email }).select('_id email subscription name')

                if (!user) {
                    return NextResponse.json({ exists: false })
                }

                user.subscription.isActive = false

                await user.save()

                return NextResponse.json({ userData: user })

            } catch (error) {
                console.error('Error fetching user:', error)
                return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
            }

        default:

            return NextResponse.json({ msg: 'Action param is missing', error: true })

    }

}