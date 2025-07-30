'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Anjali & Rohan Mehta',
    avatar: '/images/avatars/avatar-1.jpg',
    location: 'Mumbai',
    projectType: 'Residential Interior',
    review: 'PentaArch turned our house into a dream home. Their attention to detail and ability to blend our vision with their expertise is phenomenal.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Siddharth Kapoor',
    avatar: '/images/avatars/avatar-2.jpg',
    location: 'Pune',
    projectType: 'Commercial Office',
    review: 'The team delivered a world-class office space that is both functional and aesthetically stunning. Our productivity has increased.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    avatar: '/images/avatars/avatar-3.jpg',
    location: 'Delhi',
    projectType: 'Vastu Consultancy',
    review: 'I was skeptical about Vastu, but PentaArch\'s modern solutions made me a believer. My home feels more harmonious!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Rajesh Nair',
    avatar: '/images/avatars/avatar-4.jpg',
    location: 'Bangalore',
    projectType: 'Civil Contracting',
    review: 'Their construction quality is top-notch and they adhered to timelines/budgets. Very satisfied with the outcome.',
    rating: 4,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-charcoal text-warm-neutral min-h-screen">
      {/* Hero */}
      <section className="relative py-32 sm:py-40 flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url('/images/testimonials/hero.jpg')` }}>
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold text-white mb-4">Hear From <span className="gradient-text">Our Clients</span></h1>
          <p className="text-lg text-gray-300">Discover how PentaArch transforms visions into premium, heartfelt spaces.</p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 glass-effect shadow-elegant hover:shadow-glow transition-all duration-500 flex flex-col items-center"
              >
                <Image src={t.avatar} alt={t.name} width={72} height={72} className="rounded-full mb-4 border-2 border-terracotta object-cover" />
                <div className="flex items-center gap-2 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="text-terracotta fill-terracotta" size={20} />)}
                  {t.rating < 5 && Array.from({ length: 5-t.rating }).map((_,i) => <Star key={`empty${i}`} className="text-gray-600" size={20} />)}
                </div>
                <h3 className="text-xl font-playfair font-bold text-white mb-1">{t.name}</h3>
                <div className="text-xs text-gray-400 mb-2">{t.projectType} &mdash; {t.location}</div>
                <p className="text-lg text-gray-300 italic mb-2">&quot;{t.review}&quot;</p>
              </motion.div>
            ))}
          </div>

          {/* Floating stats banner */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 bg-gradient-to-br from-rose-gold-600/20 to-terracotta/10 py-8 rounded-2xl shadow-soft">
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold gradient-text">500+</div>
              <div className="text-gray-400">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold gradient-text">98%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold gradient-text">120+</div>
              <div className="text-gray-400"> Five-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold gradient-text">75%</div>
              <div className="text-gray-400">Repeat Clients</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

