'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Anjali & Rohan Mehta',
    avatar: '/images/avatars/avatar-1.jpg',
    projectType: 'Residential Interior',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    review: 'PentaArch turned our house into a dream home. Their attention to detail and ability to blend our vision with their expertise is phenomenal. The use of Vastu brought such a positive energy to our space!',
  },
  {
    id: 2,
    name: 'Siddharth Kapoor',
    avatar: '/images/avatars/avatar-2.jpg',
    projectType: 'Commercial Office',
    location: 'Pune, Maharashtra',
    rating: 5,
    review: 'The team delivered a world-class office space that is both functional and aesthetically stunning. Our productivity has visibly increased. A truly professional and visionary team.',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    avatar: '/images/avatars/avatar-3.jpg',
    projectType: 'Vastu Consultancy',
    location: 'Delhi',
    rating: 5,
    review: "I was skeptical about Vastu, but PentaArch's scientific approach and modern solutions have made me a believer. My home feels more balanced and harmonious. Highly recommended.",
  },
  {
    id: 4,
    name: 'Rajesh Nair',
    avatar: '/images/avatars/avatar-4.jpg',
    projectType: 'Civil Contracting',
    location: 'Bangalore, Karnataka',
    rating: 4.5,
    review: "From foundation to finish, their construction quality is top-notch. They adhered to timelines and budgets, which is rare in this industry. Very satisfied with the outcome.",
  },
];

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      transition: {
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <section className="py-20 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Trusted by <span className="gradient-text">Visionaries</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from our clients who trusted us to build their dreams into reality.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto glass-effect rounded-2xl p-8 sm:p-12">
          <div className="absolute top-8 left-8 text-terracotta/50">
            <Quote size={64} strokeWidth={1} />
          </div>

          <AnimatePresence initial={false} custom={1}>
            <motion.div
              key={currentIndex}
              custom={1}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center"
            >
              <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
                {currentTestimonial.review}
              </p>

              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={`${i < currentTestimonial.rating ? 'text-terracotta' : 'text-gray-600'} fill-current`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4 border-2 border-terracotta"
                />
                <div>
                  <h3 className="text-xl font-playfair font-bold text-white">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-gray-400">
                    {currentTestimonial.projectType} - {currentTestimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-terracotta transition-colors duration-300"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-terracotta transition-colors duration-300"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Floating Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold gradient-text">500+</div>
            <div className="text-gray-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold gradient-text">98%</div>
            <div className="text-gray-400">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold gradient-text">120+</div>
            <div className="text-gray-400">5-Star Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold gradient-text">75%</div>
            <div className="text-gray-400">Repeat Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;

