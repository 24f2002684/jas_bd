import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { siteData } from '../data/content';

export default function GoldenTerraceHero() {
  const { specialHeroImage } = siteData;

  return (
    <section id="golden-terrace" className="relative py-20 px-4 overflow-hidden">
      {/* Background ambient warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-champagne-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm uppercase tracking-widest text-champagne-gold font-medium inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>A Moment Frozen in Time</span>
            <Sparkles className="w-3.5 h-3.5" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-4xl md:text-5xl font-serif text-white leading-snug"
          >
            "{specialHeroImage.quoteTop}
            <br />
            <span className="text-champagne-base italic">
              {specialHeroImage.quoteMiddle}"
            </span>
          </motion.h2>
        </div>

        {/* Cinematic Card Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative group rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-champagne-gold/30 via-rose-blush/20 to-wine-800/40 border border-champagne-gold/40 shadow-glow-gold max-w-xl mx-auto"
        >
          {/* Inner image container */}
          <div className="relative overflow-hidden rounded-2xl bg-black aspect-[3/4] sm:aspect-[4/5] shadow-2xl">
            <img
              src={specialHeroImage.src}
              alt={specialHeroImage.alt}
              loading="eager"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle warm vignette / golden overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-wine-950/80 via-transparent to-black/20 pointer-events-none" />

            {/* Floating corner tag */}
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass-card border border-champagne-gold/40 shadow-md backdrop-blur-md flex items-center gap-1.5 text-xs text-champagne-glow font-serif">
              <Heart className="w-3.5 h-3.5 fill-rose-blush text-rose-blush animate-pulse" />
              <span>Our golden terrace</span>
            </div>

            {/* Bottom text inside photo */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-wine-950/80 backdrop-blur-md border border-rose-blush/30 text-xs sm:text-sm font-serif italic text-rose-light">
                Golden hour memories with you
              </span>
            </div>
          </div>
        </motion.div>

        {/* Emotion Highlight Text Below */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-8 space-y-2"
        >
          <p className="text-xl sm:text-2xl font-serif font-medium text-rose-warm italic flex items-center justify-center gap-2">
            <span>{specialHeroImage.highlight}</span>
          </p>
          <p className="text-xs sm:text-sm text-rose-light/60 font-sans max-w-md mx-auto">
            Every time I look at this picture, it reminds me of how peaceful the world feels when I'm right next to you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
