import connectMongoDB from "@libs/mongodb"
import User from "@models/User"
import { NextResponse } from "next/server"

export async function POST(request, context) {
    const { params } = context

    if(!params){
        return NextResponse.json({ message: 'Data not found' }, { status: 404 })
    }

    await connectMongoDB()

    const email = params.email
    try {
        const user = await User.findOne({email: email})
        if (!user) {
            return NextResponse.json({ exists: false })
        }

        return NextResponse.json({ exists: true })
    } catch (error) {
        console.error('Error fetching user:', error)
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}