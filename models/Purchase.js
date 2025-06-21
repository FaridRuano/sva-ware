// models/Purchase.ts
import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    productId: String,
    name: String,
    type: String,
    price: Number
}, { _id: false })

const purchaseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    stripePaymentIntentId: String,
    stripeSessionId: String,
    products: [productSchema],
    amount: Number,
    currency: String,
    status: String, // 'paid', 'refunded', etc.
    invoiceUrl: String,
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.models.Purchase || mongoose.model('Purchase', purchaseSchema)
