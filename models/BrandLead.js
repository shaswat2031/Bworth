import mongoose from 'mongoose';

const BrandLeadSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      required: [true, 'Please provide the brand or company name'],
      trim: true,
      maxlength: [120, 'Brand name cannot exceed 120 characters'],
    },
    contactPerson: {
      type: String,
      trim: true,
      maxlength: [100, 'Contact person name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide a business email address'],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address'],
    },
    phone: {
      type: String,
      trim: true,
      maxlength: [25, 'Phone number cannot exceed 25 characters'],
    },
    category: {
      type: String,
      trim: true,
      default: 'Fashion & Apparel',
    },
    message: {
      type: String,
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'partnered', 'archived'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.BrandLead || mongoose.model('BrandLead', BrandLeadSchema);
