import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { siteData } from '../data/content';

export default function FinalStarlitNight() {
  const { finalStarlit } = siteData;

  return (
    <footer className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-[#140510] via-[#0d020a] to-[#080106] overflow-hidden">
      {/* Night Sky Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-champagne-light twinkle-star"
            style={{
              top: `${(i * 17) % 96}%`,
              left: `${(i * 31) % 98}%`,
              width: `${(i % 3) + 1.5}px`,
              height: `${(i % 3) + 1.5}px`,
              animationDelay: `${(i * 0.3)}s`,
              animationDuration: `${2.5 + (i % 4)}s`,
              opacity: 0.3 + (i % 5) * 0.15
            }}
          />
        ))}

        {/* Ambient deep nebula glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[650px] h-96 sm:h-[650px] bg-wine-900/10 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        {/* Soft Starlit Lines */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-2xl font-serif italic text-rose-warm/85 font-light"
          >
            "{finalStarlit.line1}"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl sm:text-3xl font-serif text-white/90"
          >
            "{finalStarlit.line2}"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-2"
          >
            <p className="text-2xl sm:text-4xl font-serif font-semibold gold-gradient-text">
              {finalStarlit.line3}
            </p>
          </motion.div>
        </div>

        {/* Final Birthday Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="pt-8 border-t border-rose-blush/10 space-y-3"
        >
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight flex items-center justify-center gap-2">
            <span>Happy Birthday, Jasmiya</span>
            <span className="text-rose-deep animate-pulse">❤️</span>
          </h2>

          <p className="text-sm sm:text-base font-serif italic text-champagne-glow font-medium">
            {finalStarlit.from}
          </p>

          {/* Micro tagline */}
          <p className="text-[11px] text-rose-warm/30 font-sans tracking-widest uppercase pt-6">
            Forever & Always InshaAllah • Made with love
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
