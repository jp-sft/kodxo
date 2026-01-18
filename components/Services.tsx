'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Le Cerveau',
    subtitle: 'ERP Odoo',
    description: 'Installation et configuration. Ventes, Stocks, RH centralisés.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Le Système Nerveux',
    subtitle: 'Automation & IA',
    description: 'Workflows n8n & Agents IA pour supprimer les tâches répétitives.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'L\'Interface',
    subtitle: 'Dev Fullstack',
    description: 'Développement React/Python sur mesure quand le standard ne suffit plus.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-kodxo-dark mb-4">
            LES 3 PILIERS
          </h2>
          <p className="text-kodxo-gray text-lg">
            Une architecture complète pour votre transformation digitale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative backdrop-blur-md bg-white border border-gray-200 rounded-2xl p-8 h-full hover:border-kodxo-orange/50 transition-all hover:shadow-2xl hover:shadow-kodxo-orange/10">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-kodxo-orange/0 to-kodxo-orange/0 group-hover:from-kodxo-orange/5 group-hover:to-transparent rounded-2xl transition-all" />
                
                <div className="relative z-10">
                  <div className="text-kodxo-orange mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-kodxo-dark mb-2">
                    {service.title}
                  </h3>
                  <div className="text-kodxo-orange font-semibold mb-4">
                    {service.subtitle}
                  </div>
                  <p className="text-kodxo-gray">
                    {service.description}
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
