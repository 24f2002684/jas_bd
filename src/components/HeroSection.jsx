import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronDown, Heart } from 'lucide-react';

export default function HeroSection({ onOpenSurprise }) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[550px] h-[340px] sm:h-[550px] rounded-full bg-rose-deep/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-champagne-gold/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
        
        {/* Subtle floating heart drifts */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute heart-drift text-rose-blush/25 select-none pointer-events-none"
            style={{
              left: `${15 + (i * 11)}%`,
              bottom: `${10 + (i * 5)}%`,
              fontSize: `${14 + (i % 3) * 6}px`,
              animationDelay: `${i * 1.1}s`,
              animationDuration: `${7 + (i % 4)}s`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        {/* Little badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-rose-blush/30 shadow-glow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-champagne-gold animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-xs sm:text-sm font-sans tracking-widest uppercase text-rose-warm font-medium">
            A Special Day for Someone Special
          </span>
          <Sparkles className="w-3.5 h-3.5 text-champagne-gold animate-spin" style={{ animationDuration: '8s' }} />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
            Happy Birthday,{' '}
            <span className="gold-gradient-text drop-shadow-sm inline-block">
              Jasmiya
            </span>{' '}
            <span className="inline-block text-rose-deep animate-pulse">❤️</span>
          </h1>

          <div className="pt-1">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-rose-warm/95 flex items-center justify-center gap-2">
              <span>To my cute kannukutty</span>
              <span className="inline-block text-2xl hover:scale-125 transition-transform duration-200">🐮</span>
            </p>
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-base sm:text-lg font-sans text-rose-light/80 max-w-lg mx-auto font-light"
        >
          A little something from your gundu...
        </motion.p>

        {/* Call to action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="pt-4"
        >
          <button
            onClick={onOpenSurprise}
            className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-rose-deep via-[#862164] to-wine-600 text-white font-medium text-base sm:text-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 border border-rose-blush/30"
          >
            <Sparkles className="w-5 h-5 text-champagne-gold group-hover:rotate-12 transition-transform" />
            <span className="tracking-wide">Open your surprise ✨</span>
            <Heart className="w-4 h-4 fill-white text-white opacity-80 group-hover:scale-125 transition-transform" />
          </button>
        </motion.div>

        {/* Small subtle scroll prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="pt-12 flex flex-col items-center gap-2 text-rose-warm/50 text-xs tracking-widest uppercase font-light"
        >
          <span>Scroll down slowly</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-champagne-gold/70" />
        </motion.div>
      </div>
    </section>
  );
}
