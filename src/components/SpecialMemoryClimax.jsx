import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { siteData } from '../data/content';

export default function SpecialMemoryClimax() {
  const { specialHeroImage } = siteData;
  const { climaxOverlay } = specialHeroImage;

  return (
    <section id="special-climax" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[340px] sm:h-[650px] bg-wine-800/30 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Intro Tag */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card border border-champagne-gold/30 text-champagne-glow text-xs font-serif italic">
            <Heart className="w-3.5 h-3.5 fill-rose-blush text-rose-blush animate-pulse" />
            <span>The Heart of It All</span>
          </div>
        </div>

        {/* Large Grand Cinematic Photo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden border border-champagne-gold/40 shadow-glow-gold bg-black/80"
        >
          {/* Main Photo with slow gentle zoom */}
          <div className="relative aspect-[3/4] sm:aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden">
            <img
              src={specialHeroImage.src}
              alt={specialHeroImage.alt}
              loading="lazy"
              onError={(e) => {
                const currentSrc = e.currentTarget.src;
                if (currentSrc.includes('%20')) {
                  e.currentTarget.src = decodeURIComponent(currentSrc);
                } else if (currentSrc.includes(' ')) {
                  e.currentTarget.src = currentSrc.replace(/ /g, '%20');
                }
              }}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
            />

            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#140510] via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-wine-950/20 mix-blend-color" />

            {/* Text Overlay centered & bottom */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 md:p-16 text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-2 max-w-2xl mx-auto"
              >
                <p className="text-xl sm:text-3xl md:text-4xl font-serif text-white/95 leading-snug drop-shadow-lg">
                  "{climaxOverlay.line1}"
                </p>

                <p className="text-2xl sm:text-3xl md:text-5xl font-serif italic gold-gradient-text font-bold drop-shadow-md">
                  "{climaxOverlay.line2}"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="pt-4 space-y-1.5"
              >
                <p className="text-sm sm:text-base font-serif text-rose-light/85 drop-shadow">
                  {climaxOverlay.line3}
                </p>
                <p className="text-lg sm:text-2xl font-serif font-semibold text-rose-warm drop-shadow-md">
                  {climaxOverlay.line4}
                </p>
              </motion.div>

              {/* Personal Signoff */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="pt-4"
              >
                <div className="inline-block px-5 py-2.5 rounded-2xl glass-card border border-champagne-gold/30 backdrop-blur-md">
                  <p className="font-handwriting text-xl sm:text-2xl text-champagne-glow whitespace-pre-line leading-relaxed">
                    {climaxOverlay.signoff}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
