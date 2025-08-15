import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  subscription: {
    isActive: {
      type: Boolean,
      default: false,
    },
    subType: {
      type: String,
      enum: ['monthly', 'quarterly', 'biannual', 'annual'],
      default: null,
    },
    startDate: {
      type: Date,
      default: null,
    },
    endDate: {
      type: Date,
      default: null,
    },
    lastPaymentDate: {
      type: Date,
      default: null,
    },
    nextPaymentDate: {
      type: Date,
      default: null,
    },
    paymentMethod: {
      type: String,
      default: null,
    },
    liveSessions:{
      type: Number,
      default: 0,
    },
    stripeSubscriptionId: {
      type: String,
      default: null,
    }
  },
  purchasedProducts: [
    {
      product: {
        type: String,
        required: true,
      },
      purchaseDate: {
        type: Date,
        default: Date.now,
      },
      price: {
        type: Number,
        required: true,
      },
      paymentMethod: {
        type: String,
        default: null,
      },
    }
  ],
  paymentHistory: [
    {
      product: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      paymentDate: {
        type: Date,
        default: Date.now,
      },
      paymentMethod: {
        type: String,
      },
      transactionId: {
        type: String,
      },
    }
  ]
}, {
  timestamps: true
}
)


const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
