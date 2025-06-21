// filepath: [route.js](http://_vscodecontentref_/0)
import { NextResponse } from "next/server";
import connectMongoDB from '@libs/mongodb';
import User from "@models/User";
import Product from "@models/Product";
import Stripe from 'stripe';

// ✅ Instanciarlo con tu clave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16' // o la versión actual
});

export async function POST(request) {
    try {
        const body = await request.json();
        const { productId, email } = body;

        if (!productId || !email) {
            return NextResponse.json({ error: "Product ID and email are required" }, { status: 400 });
        }

        await connectMongoDB();

        // Validate user
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Fetch product info
        const product = await Product.findById(productId);
        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        // Use product info for PaymentIntent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: product.price, // price in cents
            currency: product.currency || "usd",
            metadata: {
                productId,
                email,
                stripeProductId: product.stripeProductId || "",
            },
            receipt_email: email,
            automatic_payment_methods: { enabled: true },
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret, productInfo: product }, { status: 200 });
    } catch (error) {
        console.error("Stripe error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}