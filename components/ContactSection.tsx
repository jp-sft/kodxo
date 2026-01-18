'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Integrate with actual backend service (EmailJS, Formspree, or n8n webhook)
    // Example with Formspree:
    // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
    // Temporary simulation - replace with actual implementation
    setTimeout(() => {
      console.log('Form data:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Réservez Votre Audit Flash
          </h2>
          <p className="text-textSecondary text-lg md:text-xl">
            30 minutes pour analyser vos processus et identifier les gains rapides
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass rounded-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-textPrimary">
                Nom complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-textPrimary/20 focus:border-accent focus:outline-none transition-colors text-textPrimary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-textPrimary">
                Email professionnel *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-textPrimary/20 focus:border-accent focus:outline-none transition-colors text-textPrimary"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="company" className="block text-sm font-semibold mb-2 text-textPrimary">
              Entreprise *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-textPrimary/20 focus:border-accent focus:outline-none transition-colors text-textPrimary"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-textPrimary">
              Décrivez votre principal défi (optionnel)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white border border-textPrimary/20 focus:border-accent focus:outline-none transition-colors resize-none text-textPrimary"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-accent hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all glow-hover disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Envoi en cours...' : status === 'success' ? 'Message envoyé !' : 'Réserver mon Audit Gratuit'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
