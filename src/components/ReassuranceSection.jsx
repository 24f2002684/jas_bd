import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Flame, Sparkles } from 'lucide-react';
import { siteData } from '../data/content';

export default function ReassuranceSection() {
  const { reassurance } = siteData;

  return (
    <section id="reassurance" className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* Warm enveloping ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-rose-900/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        {/* Container with warm glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-6 sm:p-12 glass-card-wine border border-champagne-gold/25 shadow-2xl space-y-8 text-center"
        >
          {/* Subtle shield / comforting badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-400/20 text-champagne-glow text-xs sm:text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-champagne-gold" />
            <span>A Promise From My Soul</span>
            <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
          </div>

          {/* Primary Comforting Tamil Quote */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white leading-tight font-medium">
              “Nee onnum kavala padaatha...
              <br />
              <span className="rose-gradient-text italic font-semibold">
                ellam nalladhe dhaan nadakum. ❤️
              </span>”
            </h2>

            {/* Reassurance text */}
            <p className="text-base sm:text-xl font-serif text-rose-warm/90 max-w-xl mx-auto leading-relaxed pt-2">
              {reassurance.togetherPromise}
            </p>
          </div>

          {/* Glowing affirmation cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 max-w-xl mx-auto">
            {reassurance.protectionLines.map((line, idx) => {
              const isHighlight = idx === reassurance.protectionLines.length - 1;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * idx, duration: 0.5 }}
                  className={`p-4 rounded-2xl flex items-center justify-center gap-2.5 text-center transition-all duration-300 ${
                    isHighlight
                      ? 'sm:col-span-2 bg-gradient-to-r from-rose-950/80 via-wine-800/80 to-rose-950/80 border border-rose-blush/40 shadow-glow text-champagne-glow font-bold text-lg sm:text-xl'
                      : 'bg-wine-900/50 border border-rose-blush/15 text-rose-light text-base sm:text-lg font-serif'
                  }`}
                >
                  {isHighlight ? (
                    <Flame className="w-5 h-5 text-rose-blush animate-pulse" />
                  ) : (
                    <Heart className="w-4 h-4 fill-rose-deep text-rose-deep" />
                  )}
                  <span>{line}</span>
                  {isHighlight && (
                    <Flame className="w-5 h-5 text-rose-blush animate-pulse" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Subtext warmth */}
          <p className="text-xs sm:text-sm text-rose-light/60 font-sans italic pt-2">
            No matter what storms come, you will never have to face anything alone. I'm right here.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
