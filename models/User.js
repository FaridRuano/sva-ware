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
    }
  },
}, {
  timestamps: true
}
)


const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
