'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Sofa, 
  Palette, 
  Layers, 
  HardHat, 
  Compass,
  ArrowRight 
} from 'lucide-react';
import { servicesContent } from '@/content/site-data';
import OptimizedImage from '@/components/ui/OptimizedImage';

const serviceIcons = {
  'interior-design': Sofa,
  'decorative-finishes': Palette,
  'premium-flooring': Layers,
  'civil-contracting': HardHat,
  'vastu-consultancy': Compass,
};

const ServicePillars = () => {
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
    <section id="service-pillars" className="py-20 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-rose-gold-600/20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Our <span className="gradient-text">Five Pillars</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive services that cover every aspect of your dream space, 
            from concept to completion with unmatched attention to detail.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesContent.map((service, index) => {
            const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons];
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal to-gray-900 border border-gray-800 hover:border-terracotta/50 transition-all duration-500 ${
                  index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Background Image */}
                <OptimizedImage
                  src={service.image}
                  alt={`${service.title} background`}
                  fill
                  className="object-cover"
                />

                <div className="relative z-10 p-8">
                  {/* Icon */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-rose-gold-gradient rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent size={32} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-playfair font-bold text-white mb-4 group-hover:text-terracotta transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    className="flex items-center gap-2 text-terracotta font-semibold group-hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Explore More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-terracotta/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
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
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePillars;
