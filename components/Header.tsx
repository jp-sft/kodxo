'use client';

import { motion } from 'framer-motion';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-kodxo-dark/80 border-b border-white/10"
      style={{
        background: 'rgba(11, 17, 32, 0.8)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <text
                x="20"
                y="28"
                textAnchor="middle"
                className="font-bold text-2xl"
                fill="#EA580C"
              >
                K
              </text>
            </svg>
          </div>
          <span className="text-xl font-bold text-white">KODXO</span>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('services')}
            className="text-kodxo-gray hover:text-white transition-colors"
          >
            Solutions
          </button>
          <button
            onClick={() => scrollToSection('methode')}
            className="text-kodxo-gray hover:text-white transition-colors"
          >
            Méthode
          </button>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
          className="bg-kodxo-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all hover:shadow-lg hover:shadow-orange-600/50"
        >
          Audit Flash Gratuit
        </a>
      </nav>
    </motion.header>
  );
}
