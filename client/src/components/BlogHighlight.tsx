'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Vastu Tips for a Prosperous Home',
    excerpt: 'Discover how small changes based on Vastu can bring immense positivity and wealth into your home.',
    category: 'Vastu',
    date: 'July 15, 2025',
    image: '/images/blog/vastu-tips.jpg',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: '2025 Interior Design Trends: The Fusion of Modern and Traditional',
    excerpt: 'Explore the latest trends where minimalism meets Indian heritage, creating timeless and elegant spaces.',
    category: 'Interior Trends',
    date: 'July 10, 2025',
    image: '/images/blog/interior-trends.jpg',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Smart Budgeting for Your Dream Interior Project',
    excerpt: 'A practical guide to planning your finances for a premium interior without compromising on quality.',
    category: 'Budgeting',
    date: 'July 5, 2025',
    image: '/images/blog/budgeting.jpg',
    readTime: '6 min read',
  },
];

const BlogHighlight = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6"
          >
            From Our <span className="gradient-text">Design Desk</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Insights, trends, and inspiration from our team of experts to guide you on your design journey.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="group flex flex-col rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-terracotta/50 transition-all duration-500 hover:shadow-glow"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
              </div>

              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Tag size={14} className="text-terracotta mr-2" />
                    {post.category}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="text-terracotta mr-2" />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-xl font-playfair font-bold text-white mb-3 flex-grow group-hover:text-terracotta transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <motion.button
                  className="flex items-center gap-2 text-terracotta font-semibold group-hover:text-white transition-colors duration-300 mt-auto"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-16"
        >
          <motion.button
            className="btn-secondary text-lg px-12 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Blog
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHighlight;

