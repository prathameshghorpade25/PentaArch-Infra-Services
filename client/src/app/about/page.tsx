'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, CheckCircle, Heart, Users, Eye, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-charcoal text-warm-neutral">
      {/* Hero Section */}
      <section
        className="relative py-40 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453987333-35974631af84?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-6xl font-playfair font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crafting Spaces, <span className="gradient-text">Building Futures</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            PentaArch is where visionary design meets meticulous execution. Learn about our journey and philosophy.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

