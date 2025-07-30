'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Lock, User, Eye, EyeOff } from 'lucide-react';

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    // Mock authentication logic
    if (data.username === 'admin' && data.password === 'pentaarch2025') {
      alert('Login successful! Redirecting to admin dashboard...');
      // In a real app, redirect to admin dashboard
      window.location.href = '/admin/dashboard';
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
      <motion.div
        className="w-full max-w-md bg-gradient-to-br from-gray-900 to-charcoal p-8 rounded-2xl shadow-elegant border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-playfair font-bold text-white">
            Penta<span className="gradient-text">Arch</span>
          </h1>
          <p className="text-gray-400 mt-2">Admin Portal</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              {...register('username', { required: 'Username is required' })}
              type="text"
              className="w-full bg-gray-800 rounded-md pl-12 pr-4 py-3 text-warm-neutral focus:outline-none focus:ring-2 focus:ring-terracotta border border-gray-600"
              placeholder="Username"
            />
            {errors.username && (
              <span className="text-red-500 text-sm mt-1 block">{errors.username.message as string}</span>
            )}
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              {...register('password', { required: 'Password is required' })}
              type={showPassword ? 'text' : 'password'}
              className="w-full bg-gray-800 rounded-md pl-12 pr-12 py-3 text-warm-neutral focus:outline-none focus:ring-2 focus:ring-terracotta border border-gray-600"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-terracotta"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <span className="text-red-500 text-sm mt-1 block">{errors.password.message as string}</span>
            )}
          </div>

          <motion.button
            type="submit"
            className="w-full btn-primary py-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-600">
          <p className="text-gray-400 text-sm mb-2">Demo Credentials:</p>
          <p className="text-terracotta text-sm">Username: admin</p>
          <p className="text-terracotta text-sm">Password: pentaarch2025</p>
        </div>
      </motion.div>
    </div>
  );
}
