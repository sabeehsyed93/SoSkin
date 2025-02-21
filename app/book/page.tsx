'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import BookPageOrbs from '../components/BookPageOrbs';

const ContactOption = ({ 
  icon, 
  text, 
  href,
  delay 
}: { 
  icon: string;
  text: string;
  href: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-6 bg-white rounded-2xl p-6 shadow-lg border border-[#ccab82]/20 relative z-30"
    >
      <span className="text-4xl flex-shrink-0">{icon}</span>
      <Link 
        href={href}
        className="text-xl md:text-2xl text-[#5C4033] hover:text-[#ccab82] transition-colors"
      >
        {text}
      </Link>
    </motion.div>
  );
};

export default function BookPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mzzdwblg', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="w-full py-24 relative">
      <BookPageOrbs />
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-medium mb-8 text-center text-[#5C4033] relative z-30 bg-white/80 py-2 rounded-lg"
        >
          Contact Us via Email or Whatsapp
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 text-center mb-12 text-lg"
        >
          Get in touch with us to schedule your appointment or ask any questions
        </motion.p>

        <div className="space-y-6">
          <ContactOption
            icon="☎️"
            text="07394000272"
            href="https://wa.me/447394000272"
            delay={0.3}
          />
          <ContactOption
            icon="✉️"
            text="bookings@soskinaesthetics.com"
            href="mailto:bookings@soskinaesthetics.com"
            delay={0.4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center text-[#5C4033]">
            Send us a Message
          </h2>
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#ccab82]/20 text-center relative z-30"
            >
              <h3 className="text-2xl font-medium text-[#5C4033] mb-4">Thank you!</h3>
              <p className="text-gray-700 mb-6">Your message has been sent successfully. We&apos;ll get back to you soon.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-[#5C4033] text-white px-6 py-2 rounded-lg hover:bg-[#5C4033]/90 transition-colors font-medium"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white rounded-2xl p-8 shadow-lg border border-[#ccab82]/20 relative z-30"
            >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-[#5C4033] font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-[#ccab82]/20 focus:outline-none focus:ring-2 focus:ring-[#5C4033]/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-[#5C4033] font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-[#ccab82]/20 focus:outline-none focus:ring-2 focus:ring-[#5C4033]/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-[#5C4033] font-medium">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 rounded-lg border border-[#ccab82]/20 focus:outline-none focus:ring-2 focus:ring-[#5C4033]/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-[#5C4033] font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-[#ccab82]/20 focus:outline-none focus:ring-2 focus:ring-[#5C4033]/20"
              ></textarea>
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#5C4033] text-white py-3 rounded-lg hover:bg-[#5C4033]/90 transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          )}

          <p className="text-gray-600 text-center mt-6 text-sm">
            We aim to respond to all inquiries within 24 hours
          </p>
        </motion.div>
      </div>
    </div>
  );
}
