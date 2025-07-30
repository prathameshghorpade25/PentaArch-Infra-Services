export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  ctaText: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Interior' | 'Vastu' | 'Commercial' | 'Residential';
  description: string;
  images: string[];
  client?: string;
  location: string;
  area?: string;
  year: number;
  testimonial?: Testimonial;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  review: string;
  projectType: string;
  location: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  featuredImage: string;
  category: 'Vastu' | 'Interior Trends' | 'Budgeting' | 'Design Tips';
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  files?: FileList;
}

export interface QuizAnswer {
  questionId: string;
  answer: string;
}

export interface StyleQuiz {
  id: string;
  question: string;
  options: {
    label: string;
    value: string;
    image?: string;
  }[];
}

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
  };
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  mission: string;
  vision: string;
  values: string[];
  certifications: string[];
  awards: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  workingHours: {
    weekdays: string;
    weekends: string;
  };
}

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  lastLogin: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  status: 'new' | 'in-progress' | 'completed' | 'archived';
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  notes?: string;
}

export interface Analytics {
  pageViews: number;
  uniqueVisitors: number;
  inquiries: number;
  conversions: number;
  topPages: { page: string; views: number }[];
  topSources: { source: string; visitors: number }[];
}
