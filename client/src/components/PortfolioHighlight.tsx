'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const featuredProjects = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    category: 'Residential',
    location: 'Mumbai',
    image: '/images/portfolio/villa-1.jpg',
    description: 'A contemporary 4-bedroom villa blending modern architecture with traditional Indian elements.',
    year: 2023,
  },
  {
    id: 2,
    title: 'Corporate Office Complex',
    category: 'Commercial',
    location: 'Pune',
    image: '/images/portfolio/office-1.jpg',
    description: 'Sustainable office design with biophilic elements and flexible working spaces.',
    year: 2023,
  },
  {
    id: 3,
    title: 'Heritage Home Restoration',
    category: 'Vastu',
    location: 'Delhi',
    image: '/images/portfolio/heritage-1.jpg',
    description: 'Restoring a 100-year-old heritage home with modern amenities and Vastu compliance.',
    year: 2022,
  },
];

const PortfolioHighlight = () => {
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
    <section className="py-20 bg-gradient-to-br from-charcoal to-gray-900">
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore some of our recent masterpieces that showcase our commitment to 
            excellence and innovation in design.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-glow transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-terracotta text-white text-sm font-semibold rounded-full">
                  {project.category}
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-xs text-white text-sm font-semibold rounded-full">
                  {project.year}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-terracotta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-white mb-2 group-hover:text-terracotta transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3">
                  📍 {project.location}
                </p>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <motion.button
                  className="flex items-center gap-2 text-terracotta font-semibold group-hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* External Link Icon on Hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink size={20} className="text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-16"
        >
          <motion.button
            className="btn-primary text-lg px-12 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHighlight;
