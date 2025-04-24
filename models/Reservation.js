// models/Reservation.js
import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  timeZone: {
    type: String,
    required: true
  },
  questions: {
    type: String,
    trim: true,
    default: null
  },
  meetingUrl: {
    type: String,
    trim: true,
    default: null
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'done', 'cancelled'],
    default: 'pending'
  }
}, {
  timestamps: true
});

// 1) Antes de validar, aseguramos que `end` exista
ReservationSchema.pre('validate', function(next) {
  if (this.start && !this.end) {
    // Duración de 30 minutos
    this.end = new Date(this.start.getTime() + 30 * 60000);
  }
  next();
});

// 2) Índice para evitar solapamientos en la misma hora de inicio
ReservationSchema.index({ start: 1 }, { unique: true });

export default mongoose.models.Reservation ||
  mongoose.model('Reservation', ReservationSchema);
