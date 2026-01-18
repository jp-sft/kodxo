'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = [
  { name: 'Python', logo: '/icons/python.svg' },
  { name: 'Docker', logo: '/icons/docker.svg' },
  { name: 'React', logo: '/icons/react.svg' },
  { name: 'Angular', logo: '/icons/angular.svg' },
  { name: 'n8n', logo: '/icons/n8n.svg' },
  { name: 'Odoo', logo: '/icons/odoo.svg' },
];

export default function TechStack() {
  return (
    <section id="methode" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-kodxo-dark mb-4">
            STACK TECHNIQUE
          </h2>
          <p className="text-kodxo-gray">
            Les technologies que nous maîtrisons pour votre succès
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-12"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity"
            >
              <div className="w-16 h-16 filter grayscale hover:grayscale-0 transition-all">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={64}
                  height={64}
                />
              </div>
              <span className="text-kodxo-gray font-semibold">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
