import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: String,
    type: String,
    price: {
        type: Number, // price in cents (e.g., 2000 = $20.00)
        required: true,
        min: 0,
    },
    currency: {
        type: String,
        default: 'usd',
    },
    imgUrl: String, // Optional: Image URL for the product
    stripeProductId: String,
    stripePriceId: String,
    alias: String
}, {
    timestamps: true
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);