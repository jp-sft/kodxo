'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Le Cerveau',
    subtitle: 'ERP Odoo',
    description: 'Installation et configuration. Ventes, Stocks, RH centralisés.',
    icon: '🧠',
  },
  {
    title: 'Le Système Nerveux',
    subtitle: 'Automation',
    description: 'Workflows n8n & Agents IA pour supprimer les tâches répétitives.',
    icon: '⚡',
  },
  {
    title: "L'Interface",
    subtitle: 'Dev Fullstack',
    description: 'Développement React/Python sur mesure quand le standard ne suffit plus.',
    icon: '💻',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Les 3 Piliers
          </h2>
          <p className="text-textSecondary text-lg md:text-xl max-w-2xl mx-auto">
            Une architecture complète pour transformer votre entreprise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass rounded-xl p-8 hover:border-accent/50 transition-all group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <div className="text-accent font-semibold mb-4 text-lg">
                  {service.subtitle}
                </div>
                <p className="text-textSecondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
