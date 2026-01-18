'use client';

import { motion } from 'framer-motion';

const problems = [
  {
    emoji: '📊',
    title: 'Fini Excel',
    description: 'Plus de fichiers éparpillés. Centralisez vos données.',
  },
  {
    emoji: '🤖',
    title: 'Fini le Manuel',
    description: 'Vos employés ne doivent plus faire de copier-coller.',
  },
  {
    emoji: '🚀',
    title: 'Place à la Croissance',
    description: 'Un système qui tourne tout seul.',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Vos Défis Actuels
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl p-8 hover:border-accent/50 transition-all group"
            >
              <div className="text-5xl mb-4">{problem.emoji}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                {problem.title}
              </h3>
              <p className="text-textSecondary">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
