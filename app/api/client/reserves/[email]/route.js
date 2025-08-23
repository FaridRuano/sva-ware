import { NextResponse } from "next/server";
import connectMongoDB from '@libs/mongodb';
import User from "@models/User";
import Reservation from "@models/Reservation";

// Get a single product by ID
export async function GET(request, { params }) {
    try {
        await connectMongoDB();
        const { email } = await params;
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        const reserves = await Reservation.find({ user: user._id }).sort({ start: -1 });
        return NextResponse.json({ reserves });
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}