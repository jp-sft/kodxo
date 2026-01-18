'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
        >
          L&apos;ORDRE PAR L&apos;INTELLIGENCE
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-textSecondary text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light"
        >
          Transformez la complexité opérationnelle en avantage compétitif.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#contact"
            className="bg-accent hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all glow text-lg w-full sm:w-auto"
          >
            Réserver mon Audit
          </Link>
          <Link
            href="#services"
            className="border-2 border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-lg transition-all backdrop-blur-sm w-full sm:w-auto"
          >
            Découvrir nos solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
