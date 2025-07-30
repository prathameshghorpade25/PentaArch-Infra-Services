'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tag, Calendar, Search } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Vastu Tips for a Prosperous Home',
    excerpt: 'Discover how Vastu can bring positivity and prosperity to your home.',
    category: 'Vastu',
    date: 'July 15, 2025',
    tags: ['Vastu', 'Tips'],
    image: '/images/blog/vastu-tips.jpg',
    author: 'Admin',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: '2025 Interior Design Trends: Modern & Traditional',
    excerpt: 'See what’s in vogue as minimalism fuses with Indian heritage.',
    category: 'Interior Trends',
    date: 'July 10, 2025',
    tags: ['Interior', 'Trends', 'Fusion'],
    image: '/images/blog/interior-trends.jpg',
    author: 'Priya Sharma',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Smart Budgeting for Your Dream Interior',
    excerpt: 'How to get a premium design without breaking your budget.',
    category: 'Budgeting',
    date: 'July 5, 2025',
    tags: ['Budget', 'Tips'],
    image: '/images/blog/budgeting.jpg',
    author: 'Rohan Agarwal',
    readTime: '6 min read',
  },
  // Add more posts...
];
const allTags = Array.from(new Set(blogPosts.flatMap(p => p.tags)));

export default function BlogPage() {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('All');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesQuery = query === '' || post.title.toLowerCase().includes(query.toLowerCase()) || post.excerpt.toLowerCase().includes(query.toLowerCase());
    const matchesTag = tag === 'All' || post.tags.includes(tag);
    return matchesQuery && matchesTag;
  });

  return (
    <div className="bg-charcoal text-warm-neutral min-h-screen">
      <section className="relative py-32 sm:py-40 flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/blog/hero.jpg')" }}>
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-playfair font-bold text-white mb-4">Inspiration & <span className="gradient-text">Insights</span></h1>
          <p className="text-lg text-gray-300 mb-10">Read the latest on Vastu, interior trends, design tips, and more from our expert team.</p>
          {/* Search Bar */}
          <div className="relative mx-auto max-w-xl">
            <input
              type="text"
              className="w-full bg-gray-900/70 rounded-full border-none py-4 pl-12 pr-4 text-warm-neutral focus:outline-none focus:bg-gray-800 shadow-soft"
              placeholder="Search blog posts..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap mt-6 justify-center gap-3">
            <button onClick={() => setTag('All')} className={`px-4 py-2 rounded-full font-semibold ${tag==='All' ? 'bg-terracotta text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>All</button>
            {allTags.map(t => (
              <button key={t} onClick={() => setTag(t)} className={`px-4 py-2 rounded-full font-semibold ${tag===t ? 'bg-terracotta text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>{t}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Card Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map(post => (
              <motion.div key={post.id} className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-terracotta/50 hover:shadow-glow transition-all duration-500 flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-56">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-terracotta text-white text-xs font-semibold rounded-full flex items-center"><Tag size={14} className="mr-2" />{post.category}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-playfair font-bold text-white mb-2 flex-1 group-hover:text-terracotta transition-colors duration-300">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 flex-1">{post.excerpt}</p>
                  <div className="mt-auto flex items-center text-gray-400 text-xs gap-3">
                    <Calendar size={14} /> {post.date}
                    <span>•</span>
                    {post.readTime}
                    <span>•</span>
                    By {post.author}
                  </div>
                </div>
              </motion.div>
            ))}
            {filteredPosts.length === 0 && (
              <div className="col-span-full text-center text-lg text-gray-500">No blog posts found for your search/filter.</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

