'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Upload, Edit, Droplets, Bot, BarChart, PackageCheck, Zap } from 'lucide-react';

const workflowSteps = [
  {
    id: 1,
    icon: Upload,
    title: 'Upload Floor Plan',
    description: 'Start by uploading your floor plan. Our AI will analyze the layout to understand your space.',
    details: ['Supports PDF, DWG, JPG', 'Instant layout analysis', 'Secure and confidential'],
  },
  {
    id: 2,
    icon: Edit,
    title: 'Take a Style Quiz',
    description: 'Answer a few questions about your lifestyle and preferences to help us define your unique aesthetic.',
    details: ['Quick 5-minute quiz', 'Visual and text-based questions', 'Personalized style report'],
  },
  {
    id: 3,
    icon: Droplets,
    title: 'Get 3D & Aerial Views',
    description: 'Receive stunningly realistic 3D renderings and aerial views of your proposed design.',
    details: ['Photorealistic quality', 'Multiple camera angles', 'Virtual walkthrough option'],
  },
  {
    id: 4,
    icon: Bot,
    title: 'Collaborate with Designers',
    description: 'Work one-on-one with our expert designers to refine every detail of your project.',
    details: ['Live chat and video calls', 'Shared design dashboard', 'Unlimited revisions'],
  },
  {
    id: 5,
    icon: BarChart,
    title: 'Place Order + Track',
    description: 'Finalize your design, place your order, and track the progress of your project in real-time.',
    details: ['Transparent pricing', 'Milestone-based payments', 'Live project timeline'],
  },
  {
    id: 6,
    icon: PackageCheck,
    title: 'Execution & Handover',
    description: 'Our team of skilled professionals brings the design to life with meticulous attention to detail.',
    details: ['Quality checks at every stage', 'On-time delivery guarantee', 'Final handover with warranty'],
  },
];

const HowItWorksPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="bg-charcoal text-warm-neutral">
      {/* Hero Section */}
      <motion.section
        className="relative py-32 sm:py-40 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/how-it-works/hero.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Your Vision, <span className="gradient-text">Simplified</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Our streamlined process makes it easy to transform your space. Follow our step-by-step journey from initial idea to final masterpiece.
          </motion.p>
        </div>
      </motion.section>

      {/* Step-by-step guide */}
      <section ref={ref} className="py-20 relative overflow-hidden">
        {/* Timeline Line */}
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-800 -translate-x-1/2 hidden md:block" />

        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`flex flex-col md:flex-row items-center mb-16 md:mb-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <motion.div
                className={`md:w-5/12 p-8 rounded-2xl glass-effect border border-gray-700 hover:border-terracotta/50 transition-all duration-300 hover:shadow-glow`}
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-rose-gold-gradient rounded-xl flex items-center justify-center mr-4">
                    <step.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400">
                      <Zap size={14} className="text-terracotta mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Timeline Dot */}
              <div className="w-12 h-12 bg-charcoal border-2 border-terracotta rounded-full flex-shrink-0 flex items-center justify-center text-xl font-bold text-white my-4 md:my-0 mx-auto md:mx-8 relative">
                {step.id}
                <div className="absolute w-4 h-4 bg-terracotta rounded-full animate-ping" />
              </div>

              {/* Spacer */}
              <div className="md:w-5/12" />

            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Explainer Video Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-playfair font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            See it in <span className="gradient-text">Action</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Watch our short video to see how we make the process of designing your dream space simple, transparent, and enjoyable.
          </motion.p>
          <motion.div
            className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-elegant border-2 border-terracotta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Placeholder for video player */}
            <div className="w-full h-full bg-black flex items-center justify-center text-white">
              <p>Explainer Video Coming Soon</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;

