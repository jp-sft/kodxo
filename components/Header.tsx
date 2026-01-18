'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-md flex items-center justify-center">
              <span className="text-white font-black text-xl md:text-2xl">K</span>
            </div>
            <span className="text-white font-bold text-xl md:text-2xl tracking-tight">
              KODXO
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-textSecondary hover:text-white transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#methode"
              className="text-textSecondary hover:text-white transition-colors"
            >
              Méthode
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="bg-accent hover:bg-orange-600 text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all glow-hover text-sm md:text-base"
          >
            Audit Flash Gratuit
          </Link>
        </div>
      </div>
    </header>
  );
}
