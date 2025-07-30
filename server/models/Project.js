const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  category: {
    type: String,
    required: [true, 'Project category is required'],
    enum: ['Residential', 'Commercial', 'Interior', 'Vastu'],
    default: 'Residential'
  },
  location: {
    type: String,
    required: [true, 'Project location is required'],
    trim: true
  },
  area: {
    type: String,
    required: [true, 'Project area is required'],
    trim: true
  },
  year: {
    type: Number,
    required: [true, 'Project year is required'],
    min: [2000, 'Year must be after 2000'],
    max: [new Date().getFullYear() + 1, 'Year cannot be in the future']
  },
  client: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  features: [{
    type: String,
    trim: true
  }],
  testimonial: {
    name: {
      type: String,
      trim: true
    },
    review: {
      type: String,
      maxlength: [500, 'Review cannot exceed 500 characters']
    },
    rating: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5']
    }
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for better query performance
projectSchema.index({ category: 1, status: 1 });
projectSchema.index({ featured: 1, status: 1 });
projectSchema.index({ year: -1 });

module.exports = mongoose.model('Project', projectSchema);
