'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const CtaStrip = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut' 
      } 
    },
  };

  return (
    <section className="bg-gradient-to-br from-charcoal to-gray-900">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="bg-rose-gold-gradient rounded-2xl shadow-glow p-8 sm:p-12 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <div className="lg:w-2/3">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-4">
              Ready to Experience the PentaArch Difference?
            </h2>
            <p className="text-white/90 text-lg">
              Let's collaborate to build your dream space. Contact us today for a free consultation.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <motion.button
              className="bg-white text-terracotta font-bold text-lg px-10 py-4 rounded-md shadow-lg flex items-center gap-2 transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaStrip;

