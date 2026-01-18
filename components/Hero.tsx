'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-kodxo-orange/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          style={{ fontWeight: 900 }}
        >
          L&apos;ORDRE PAR L&apos;INTELLIGENCE.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-kodxo-gray mb-12 max-w-3xl mx-auto"
        >
          Transformez la complexité opérationnelle en avantage compétitif.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-kodxo-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-all hover:shadow-2xl hover:shadow-orange-600/50 transform hover:scale-105"
          >
            Réserver mon Audit
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => scrollToSection('services')}
            className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-white hover:bg-white/10 transition-all"
          >
            Découvrir nos solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
