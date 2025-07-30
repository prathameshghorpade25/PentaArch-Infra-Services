'use client';

import { useForm, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, UploadCloud } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

export default function ContactPage() {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    maxFiles: 5,
    accept: { 'image/*': [], 'application/pdf': [] }
  });

  const onSubmit = (data: any) => {
    // Handle form submission logic, including file uploads
    console.log(data, acceptedFiles);
    // Replace with a toast notification
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <div className="bg-charcoal text-warm-neutral">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-40 flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/contact/hero.jpg')" }}>
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold text-white mb-4">Let's Build Your <span className="gradient-text">Dream</span></h1>
          <p className="text-lg text-gray-300">Have a project in mind? We'd love to hear from you. Fill out the form below or reach out to us directly.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-charcoal p-8 rounded-2xl shadow-elegant"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-playfair font-bold text-white mb-6">Send Us an Inquiry</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <input {...register("name", { required: true })} className="w-full bg-gray-800 rounded-md p-3 text-warm-neutral focus:outline-none focus:ring-2 focus:ring-terracotta" placeholder="Full Name" />
                {errors.name && <span className="text-red-500">This field is required.</span>}

                <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} className="w-full bg-gray-800 rounded-md p-3 text-warm-neutral focus:outline-none focus:ring-2 focus:ring-terracotta" placeholder="Email Address" />
                {errors.email && <span className="text-red-500">A valid email is required.</span>}

                <select {...register("service")} className="w-full bg-gray-800 rounded-md p-3 text-warm-neutral focus:outline-none focus:ring-2 focus:ring-terracotta">
                  <option value="">Select a Service...</option>
                  <option>Interior Design</option>
                  <option>Decorative Finishes</option>
                  <option>Premium Flooring</option>
                  <option>Civil Contracting</option>
                  <option>Vastu Consultancy</option>
                </select>

                <textarea {...register("message", { required: true })} className="w-full bg-gray-800 rounded-md p-3 text-warm-neutral focus:outline-none focus:ring-2 focus:ring-terracotta" placeholder="Your Message" rows={5}></textarea>
                {errors.message && <span className="text-red-500">Please enter a message.</span>}

                {/* File Upload */}
                <div {...getRootProps()} className={`p-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${isDragActive ? 'border-terracotta bg-terracotta/20' : 'border-gray-600 hover:border-terracotta'}`}>
                  <input {...getInputProps()} />
                  <UploadCloud className="mx-auto text-gray-500 mb-2" size={32} />
                  {isDragActive ? <p>Drop files here...</p> : <p>Drag & drop floor plans or images, or click to select</p>}
                  <p className="text-xs text-gray-500 mt-1">Max 5 files. PDF, JPG, PNG accepted.</p>
                  {acceptedFiles.length > 0 && <div className="mt-2 text-sm text-green-500">{acceptedFiles.length} file(s) selected.</div>}
                </div>

                <motion.button type="submit" className="btn-primary w-full flex items-center justify-center gap-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Submit Inquiry <Send size={18} />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-charcoal p-8 rounded-2xl shadow-elegant">
                <h2 className="text-3xl font-playfair font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start"><MapPin className="text-terracotta mr-4 mt-1" size={20} /><p>123 Design Street, Pune, Maharashtra 411001</p></div>
                  <div className="flex items-center"><Phone className="text-terracotta mr-4" size={20} /><a href="tel:+919876543210" className="hover:text-terracotta">+91 98765 43210</a></div>
                  <div className="flex items-center"><Mail className="text-terracotta mr-4" size={20} /><a href="mailto:hello@pentaarch.com" className="hover:text-terracotta">hello@pentaarch.com</a></div>
                </div>
              </div>
              {/* Interactive Map Placeholder */}
              <div className="h-80 bg-gray-900 rounded-2xl flex items-center justify-center text-gray-500 shadow-elegant">
                Google Map Placeholder
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

