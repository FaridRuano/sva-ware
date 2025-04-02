import mongoose from 'mongoose';

const ActionTokenSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    expireAt: {
      type: Date,
    },
    used: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

ActionTokenSchema.pre('save', function (next) {
  if (!this.expireAt) {
    this.expireAt = new Date(this.createdAt.getTime() + this.duration * 60 * 1000);
  }
  next();
});

// Índice TTL para eliminar automáticamente los documentos una vez que expire expireAt
ActionTokenSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.models.ActionToken || mongoose.model('ActionToken', ActionTokenSchema);
