import { NextResponse } from "next/server"
import connectMongoDB from '@libs/mongodb';
import User from "@models/User";

export async function GET(request) {

    await connectMongoDB()

    const url = request.nextUrl

    const email = url.searchParams.get('email')

    const action = url.searchParams.get('action')

    switch (action) {
        case 'paids':
            try {
                const user = await User.findOne({ email: email }).select('_id email paymentHistory')

                if (!user) {
                    return NextResponse.json({ exists: false })
                }

                return NextResponse.json({ userData: user })

            } catch (error) {
                console.error('Error fetching user:', error)
                return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
            }
        case 'profile':
            try {
                const user = await User.findOne({ email: email }).select('_id email name emailVerified subscription purchasedProducts')

                if (!user) {
                    return NextResponse.json({ exists: false })
                }

                return NextResponse.json({ userData: user })

            } catch (error) {
                console.error('Error fetching user:', error)
                return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
            }
        default:
            try {
                const user = await User.findOne({ email: email }).select('_id email name emailVerified subscription')

                if (!user) {
                    return NextResponse.json({ exists: false })
                }

                return NextResponse.json({ userData: user })

            } catch (error) {
                console.error('Error fetching user:', error)
                return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
            }
    }

}