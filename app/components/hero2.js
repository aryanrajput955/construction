'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Stagger container for children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Individual child animation
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function ConstructionHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10"></div>
        <div className="bg-gray-900 w-full h-full absolute inset-0" />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="h-32" />
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO SECTION – Full Viewport */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        
        {/* Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10"
        />

        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src="/bg.jpg"
            alt="Construction site at golden hour"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </motion.div>

        {/* MAIN CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 text-center"
        >

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
          >
            Building the Future,
            <br />
            <motion.span
              initial={{ opacity: 0, color: '#ffffff' }}
              animate={{ opacity: 1, color: '#e55a24' }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[#e55a24]"
            >
              One Project at a Time
            </motion.span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Precision engineering, safety-first execution, and on-time completion for high-rise towers and sustainable residential complexes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
          >
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 30px rgba(229, 90, 36, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 bg-[#e55a24] hover:bg-[#d14d1f] text-white font-bold px-10 py-5 text-lg transition-all duration-300 shadow-2xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Get Free Quote
            </motion.a>

            <motion.a
              href="tel:+15551234567"
              whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#000000' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-5 text-lg transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (555) 123-4567
            </motion.a>
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white"
          >
            {[
              { value: "300+", label: "Projects Completed" },
              { value: "10", label: "Safety Awards" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "97%", label: "On-Time Delivery" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 + 0.5 }
                  }
                }}
                className="text-center"
              >
                <motion.p
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.7, type: 'spring', stiffness: 200 }}
                  className="text-4xl font-bold text-[#e55a24]"
                >
                  {stat.value}
                </motion.p>
                <p className="mt-2 text-sm uppercase tracking-wider text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll-down indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </section>
    </>
  );
}