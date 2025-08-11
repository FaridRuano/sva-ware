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

        const customers = await stripe.customers.list({ email, limit: 1 });
        let customer = customers.data[0];
        if (!customer) {
            customer = await stripe.customers.create({ email });
        }

        // Use product info for Subscription
        const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ price: product.stripePriceId }],
            payment_behavior: 'default_incomplete',
            expand: ['latest_invoice.payment_intent'],
        });

        const clientSecret = subscription.latest_invoice.payment_intent.client_secret;

        return NextResponse.json({
            clientSecret,
            productInfo: {
                name: product.name,
                description: product.description,
                price: product.price,
                imgUrl: product.imgUrl,
                _id: product._id,
            }
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create subscription.' }, { status: 500 });
    }
}