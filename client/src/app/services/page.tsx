'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Sofa, Palette, Layers, HardHat, Compass, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: 'interior-design',
    icon: Sofa,
    title: 'Interior Design',
    description: 'Our core philosophy is to create spaces that are a true reflection of you. We focus on bespoke designs that combine functionality, comfort, and aesthetic appeal.',
    longDescription: 'From the initial concept to the final touches, our interior design team works closely with you to craft a space that is both beautiful and livable. We manage everything from space planning and furniture selection to lighting design and color palettes, ensuring a seamless and personalized experience.',
    image: '/images/services/interior-design-large.jpg',
    features: [
      'Personalized design concepts',
      'Custom furniture and millwork',
      'Advanced 3D visualization',
      'Premium material sourcing',
      'Project management & execution',
    ],
  },
  {
    id: 'decorative-finishes',
    icon: Palette,
    title: 'Decorative Finishes',
    description: 'Elevate your walls and ceilings with our exclusive range of decorative finishes, from textured paints to artisanal plasterwork.',
    longDescription: 'We believe that walls are a canvas for artistic expression. Our team of skilled artisans specializes in a wide array of decorative finishes, including Venetian plaster, lime wash, metallic paints, and custom murals. These finishes add depth, character, and a unique tactile quality to any room.',
    image: '/images/services/decorative-finishes-large.jpg',
    features: [
      'Venetian & Marmorino Plaster',
      'Designer Wallpapers & Fabrics',
      'Custom Murals & Stenciling',
      'Textured & Metallic Paints',
      'Wood Paneling & Cladding',
    ],
  },
  // ... more services can be added here
];

const ServicesPage = () => {
  return (
    <div className="bg-charcoal text-warm-neutral">
      {/* Hero Section */}
      <motion.section
        className="relative py-32 sm:py-40 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services/hero.jpg')" }}
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
            Our Suite of <span className="gradient-text">Expert Services</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We offer a comprehensive range of services to bring your vision to life, from initial concept to final execution.
          </motion.p>
        </div>
      </motion.section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <ServiceSection key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};


const ServiceSection = ({ service, index }: { service: any; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} mb-20 last:mb-0`}>
      <div className="lg:w-1/2 relative h-96 w-full lg:h-[500px] rounded-2xl overflow-hidden shadow-elegant">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="lg:w-1/2">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-rose-gold-gradient rounded-2xl flex items-center justify-center mr-4">
            <service.icon size={32} className="text-white" />
          </div>
          <h2 className="text-4xl font-playfair font-bold text-white">{service.title}</h2>
        </div>
        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          {service.longDescription}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-center text-gray-300">
              <Check size={18} className="text-terracotta mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <motion.button
          className="btn-primary flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More <ArrowRight size={18} />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ServicesPage;

