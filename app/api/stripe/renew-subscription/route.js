import { NextResponse } from "next/server";
import connectMongoDB from '@libs/mongodb';
import User from "@models/User";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16'
});

export async function POST(request) {
    try {
        const { email } = await request.json();
        await connectMongoDB();

        const user = await User.findOne({ email });
        if (!user || !user.subscription || !user.subscription.stripeSubscriptionId) {
            return NextResponse.json({ success: false, error: "No subscription found." });
        }

        // Cancel subscription in Stripe
        await stripe.subscriptions.update(user.subscription.stripeSubscriptionId, {
            cancel_at_period_end: false // Renew
        });

        // Update user in DB
        const lastPaymentDate = user.subscription.lastPaymentDate ? new Date(user.subscription.lastPaymentDate) : new Date();
        let nextPaymentDate = new Date(lastPaymentDate);

        switch (user.subscription.subType) {
            case 'quarterly':
                nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 3);
                break;
            case 'semestral':
                nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 6);
                break;
            case 'annual':
                nextPaymentDate.setFullYear(nextPaymentDate.getFullYear() + 1);
                break;
            default: // monthly
                nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
                break;
        }

        user.subscription.nextPaymentDate = nextPaymentDate;
        await user.save();

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Error cancelling subscription." });
    }
}