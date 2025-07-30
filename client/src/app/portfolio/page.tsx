'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ExternalLink, Calendar, MapPin, Home } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    category: 'Residential',
    location: 'Mumbai, Maharashtra',
    area: '4,500 sq ft',
    year: 2023,
    client: 'Sharma Family',
    images: ['/images/portfolio/villa-1.jpg', '/images/portfolio/villa-2.jpg'],
    description: 'A contemporary 4-bedroom villa blending modern architecture with traditional Indian elements.',
    testimonial: {
      name: 'Anjali Sharma',
      review: 'PentaArch transformed our vision into reality with exceptional attention to detail.'
    }
  },
  {
    id: 2,
    title: 'Corporate Office Complex',
    category: 'Commercial',
    location: 'Pune, Maharashtra',
    area: '12,000 sq ft',
    year: 2023,
    client: 'TechCorp Solutions',
    images: ['/images/portfolio/office-1.jpg', '/images/portfolio/office-2.jpg'],
    description: 'Sustainable office design with biophilic elements and flexible working spaces.',
  },
  {
    id: 3,
    title: 'Heritage Home Restoration',
    category: 'Vastu',
    location: 'Delhi',
    area: '3,200 sq ft',
    year: 2022,
    client: 'Gupta Heritage Trust',
    images: ['/images/portfolio/heritage-1.jpg', '/images/portfolio/heritage-2.jpg'],
    description: 'Restoring a 100-year-old heritage home with modern amenities and Vastu compliance.',
  },
  {
    id: 4,
    title: 'Minimalist Apartment',
    category: 'Interior',
    location: 'Bangalore, Karnataka',
    area: '1,800 sq ft',
    year: 2023,
    client: 'Young Professional',
    images: ['/images/portfolio/apartment-1.jpg', '/images/portfolio/apartment-2.jpg'],
    description: 'Clean, functional design maximizing space and natural light in urban living.',
  },
  // Add more projects as needed
];

const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Vastu'];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-charcoal text-warm-neutral">
      {/* Hero Section */}
      <motion.section
        className="relative py-32 sm:py-40 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/portfolio/hero.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our <span className="gradient-text">Portfolio</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Explore our collection of transformative spaces, each telling a unique story of vision, craftsmanship, and attention to detail.
          </motion.p>
        </div>
      </motion.section>

      {/* Filter Buttons */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-terracotta text-white shadow-glow'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              exit="hidden"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
      className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-terracotta/50 transition-all duration-300 hover:shadow-glow"
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
      }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-60" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-terracotta text-white text-sm font-semibold rounded-full">
          {project.category}
        </div>

        {/* External Link Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink size={18} className="text-white" />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-terracotta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-playfair font-bold text-white mb-2 group-hover:text-terracotta transition-colors duration-300">
          {project.title}
        </h3>
        
        <div className="flex items-center text-gray-400 text-sm mb-3 space-x-4">
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" />
            {project.location}
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {project.year}
          </div>
        </div>

        <div className="flex items-center text-gray-400 text-sm mb-4">
          <Home size={14} className="mr-2" />
          {project.area}
        </div>
        
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {project.testimonial && (
          <div className="border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-400 italic mb-2">
              "{project.testimonial.review}"
            </p>
            <p className="text-xs text-terracotta">- {project.testimonial.name}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
