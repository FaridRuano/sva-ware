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

        const customers = await stripe.customers.list({ email, limit: 1 });
        const customer = customers.data[0];
        if (!customer) throw new Error('Customer not found');

        const subscriptions = await stripe.subscriptions.list({ customer: customer.id, limit: 1 });
        const subscription = subscriptions.data[0];
        if (!subscription) throw new Error('Subscription not found');

        // Cancel subscription in Stripe
        await stripe.subscriptions.update(subscription.id, {
            cancel_at_period_end: true // Cancels at end of billing period
        });

        // Update user in DB
        user.subscription.nextPaymentDate = null;
        await user.save();

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Error cancelling subscription." });
    }
}