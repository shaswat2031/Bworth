import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your full name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email address'],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide a phone number'],
      trim: true,
      maxlength: [25, 'Phone number cannot exceed 25 characters'],
    },
    comments: {
      type: String,
      required: [true, 'Please provide your message or inquiry'],
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'in-progress', 'resolved'],
      default: 'new',
    },
    source: {
      type: String,
      default: 'website-contact-form',
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite in development during Next.js hot-reloads
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
