'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-playfair font-bold text-white mb-4 block">
              Penta<span className="gradient-text">Arch</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building Dreams into Reality. We blend traditional Indian wisdom with 
              contemporary design to create premium architectural and interior spaces 
              that reflect your unique vision.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin size={18} className="text-terracotta mr-3 flex-shrink-0" />
                <span>123 Design Street, Pune, Maharashtra 411001</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={18} className="text-terracotta mr-3 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={18} className="text-terracotta mr-3 flex-shrink-0" />
                <span>hello@pentaarch.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-terracotta transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-terracotta transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-terracotta transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-terracotta transition-colors duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-terracotta transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-terracotta transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-playfair font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/interior-design" className="text-gray-400 hover:text-terracotta transition-colors duration-300">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/services/decorative-finishes" className="text-gray-400 hover:text-terracotta transition-colors duration-300">
                  Decorative Finishes
                </Link>
              </li>
              <li>
                <Link href="/services/premium-flooring" className="text-gray-400 hover:text-terracotta transition-colors duration-300">
                  Premium Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/civil-contracting" className="text-gray-400 hover:text-terracotta transition-colors duration-300">
                  Civil Contracting
                </Link>
              </li>
              <li>
                <Link href="/services/vastu-consultancy" className="text-gray-400 hover:text-terracotta transition-colors duration-300">
                  Vastu Consultancy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-terracotta hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-terracotta hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-terracotta hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-terracotta hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube size={18} />
              </motion.a>
            </div>
            
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 PentaArch Infra Services. All rights reserved.
              </p>
            </div>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="mt-6 lg:mt-0 w-10 h-10 bg-terracotta rounded-full flex items-center justify-center text-white hover:bg-rose-gold-600 transition-colors duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
