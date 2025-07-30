'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Award, 
  Clock, 
  Shield, 
  Users, 
  Lightbulb, 
  Heart,
  CheckCircle,
  Star 
} from 'lucide-react';

const advantages = [
  {
    icon: Award,
    title: '15+ Years of Excellence',
    description: 'Proven track record with hundreds of successful projects across residential and commercial spaces.',
    stat: '500+',
    statLabel: 'Happy Clients',
  },
  {
    icon: Lightbulb,
    title: 'Traditional Wisdom Meets Modern Design',
    description: 'Unique blend of Vastu principles with contemporary aesthetics for harmonious living spaces.',
    stat: '100%',
    statLabel: 'Vastu Compliant',
  },
  {
    icon: Shield,
    title: 'Premium Quality Materials',
    description: 'We source only the finest materials and work with trusted suppliers to ensure lasting beauty.',
    stat: '10 Years',
    statLabel: 'Warranty',
  },
  {
    icon: Clock,
    title: 'On-Time Project Delivery',
    description: 'Rigorous project management ensures your dream space is ready exactly when promised.',
    stat: '98%',
    statLabel: 'On-Time Delivery',
  },
  {
    icon: Users,
    title: 'Expert Design Team',
    description: 'Certified architects and interior designers with specialized expertise in luxury spaces.',
    stat: '25+',
    statLabel: 'Expert Team',
  },
  {
    icon: Heart,
    title: 'End-to-End Service',
    description: 'From concept to completion, we handle every detail so you can focus on enjoying your new space.',
    stat: '24/7',
    statLabel: 'Support',
  },
];

const WhyPentaArch = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-gold-600/10 rounded-full blur-3xl" />
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
            Why Choose <span className="gradient-text">PentaArch</span>?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Experience the PentaArch difference through our commitment to excellence, 
            innovation, and creating spaces that truly reflect your vision.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-rose-gold-gradient rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-white">Our Promise</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <Star size={16} className="text-terracotta mr-3 flex-shrink-0" />
                  Personalized design solutions that match your lifestyle
                </li>
                <li className="flex items-center text-gray-300">
                  <Star size={16} className="text-terracotta mr-3 flex-shrink-0" />
                  Transparent pricing with no hidden costs
                </li>
                <li className="flex items-center text-gray-300">
                  <Star size={16} className="text-terracotta mr-3 flex-shrink-0" />
                  Regular updates and client involvement throughout the process
                </li>
                <li className="flex items-center text-gray-300">
                  <Star size={16} className="text-terracotta mr-3 flex-shrink-0" />
                  Post-completion support and maintenance guidance
                </li>
              </ul>
            </div>

            <motion.button
              className="btn-primary text-lg px-10 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>

          {/* Right Content - Statistics */}
          <motion.div variants={rightItemVariants} className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 glass-effect rounded-2xl">
              <div className="text-4xl font-playfair font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center p-6 glass-effect rounded-2xl">
              <div className="text-4xl font-playfair font-bold gradient-text mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center p-6 glass-effect rounded-2xl">
              <div className="text-4xl font-playfair font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-400">On-Time Delivery</div>
            </div>
            <div className="text-center p-6 glass-effect rounded-2xl">
              <div className="text-4xl font-playfair font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                variants={isEven ? itemVariants : rightItemVariants}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-terracotta/50 transition-all duration-500 hover:shadow-glow"
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    className="w-14 h-14 bg-rose-gold-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    <IconComponent size={28} className="text-white" />
                  </motion.div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-playfair font-bold gradient-text">
                      {advantage.stat}
                    </div>
                    <div className="text-xs text-gray-400">
                      {advantage.statLabel}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-playfair font-bold text-white mb-4 group-hover:text-terracotta transition-colors duration-300">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyPentaArch;
