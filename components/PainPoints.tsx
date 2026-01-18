'use client';

import { motion } from 'framer-motion';

const painPoints = [
  {
    icon: '📊',
    title: 'Fini Excel',
    description: 'Plus de fichiers éparpillés. Centralisez vos données.',
  },
  {
    icon: '🤖',
    title: 'Fini le Manuel',
    description: 'Vos employés ne doivent plus faire de copier-coller.',
  },
  {
    icon: '🚀',
    title: 'Place à la Croissance',
    description: 'Un système qui tourne tout seul.',
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card with glassmorphism */}
              <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-kodxo-orange/50 transition-all hover:shadow-xl hover:shadow-kodxo-orange/20">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-kodxo-orange/0 to-kodxo-orange/0 group-hover:from-kodxo-orange/10 group-hover:to-transparent rounded-2xl transition-all" />
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{point.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-kodxo-gray">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
