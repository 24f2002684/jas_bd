import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { siteData } from '../data/content';

export default function ThingsILove() {
  const { thingsILove } = siteData;

  return (
    <section id="special" className="relative py-20 px-4 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div className="text-center space-y-2 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card border border-rose-blush/20 text-rose-warm text-xs font-serif italic">
            <Heart className="w-3.5 h-3.5 fill-rose-blush text-rose-blush" />
            <span>Pure Appreciation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white font-medium">
            A few things I love about you...
          </h2>
          <p className="text-xs sm:text-sm text-rose-light/60 max-w-sm mx-auto">
            (Just five among a million little reasons)
          </p>
        </div>

        {/* 5 Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {thingsILove.map((item, idx) => {
            const isLast = idx === thingsILove.length - 1;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`rounded-3xl p-6 transition-all duration-300 relative group flex flex-col justify-between ${
                  isLast
                    ? 'sm:col-span-2 lg:col-span-2 bg-gradient-to-r from-wine-900/90 via-rose-950/80 to-wine-900/90 border border-champagne-gold/40 shadow-glow-gold'
                    : 'glass-card border border-rose-blush/20 hover:border-rose-blush/40 shadow-lg'
                }`}
              >
                <div>
                  <div className="text-3xl sm:text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-200 inline-block">
                    {item.icon}
                  </div>

                  <h3 className={`text-lg sm:text-xl font-serif font-bold mb-2 ${
                    isLast ? 'gold-gradient-text' : 'text-white'
                  }`}>
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-rose-light/80 font-sans leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-rose-blush/10 flex items-center justify-between text-[11px] text-rose-warm/50 font-serif italic">
                  <span>Part of what makes you Jas</span>
                  <span>✨</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
