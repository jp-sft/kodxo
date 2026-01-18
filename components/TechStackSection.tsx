'use client';

import { motion } from 'framer-motion';

const techStack = [
  { name: 'Python', emoji: '🐍' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'React', emoji: '⚛️' },
  { name: 'n8n', emoji: '🔗' },
  { name: 'Odoo', emoji: '📦' },
];

export default function TechStackSection() {
  return (
    <section id="methode" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Notre Stack Technique
          </h2>
          <p className="text-textSecondary text-lg md:text-xl max-w-2xl mx-auto">
            Des technologies éprouvées pour des résultats fiables
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-16"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 relative flex items-center justify-center">
                <span className="text-textSecondary text-4xl md:text-5xl">
                  {tech.emoji}
                </span>
              </div>
              <p className="text-center mt-2 text-sm text-textSecondary">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
