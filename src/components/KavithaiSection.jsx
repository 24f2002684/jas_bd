import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { siteData } from '../data/content';

export default function KavithaiSection() {
  const { kavithai } = siteData;

  const stanzas = [
    {
      lines: [
        "Nee sirikkira neram,",
        "enakku konjam neram nikkara madhiri..."
      ]
    },
    {
      lines: [
        "Un kural kekkumbodhu,",
        "naal full-ah konjam azhaga irukkara madhiri..."
      ]
    },
    {
      lines: [
        "Nee pakkathula illa naalum,",
        "en nenjula romba pakkathula dhaan..."
      ]
    },
    {
      lines: [
        "En kannukutty nee,",
        "enakku eppovume special dhaan. ❤️"
      ],
      isHighlight: true
    }
  ];

  return (
    <section id="kavithai" className="relative py-24 px-4 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-rose-950/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2 mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card border border-champagne-gold/30 text-champagne-glow text-xs font-serif italic">
            <Sparkles className="w-3 h-3 text-champagne-gold" />
            <span>Kavithai</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white font-medium">
            {kavithai.title}
          </h2>
        </motion.div>

        {/* Poem Stanzas in elegant glass scroll */}
        <div className="space-y-8 relative">
          {stanzas.map((stanza, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * idx, duration: 0.7 }}
              className={`p-6 sm:p-8 rounded-3xl glass-card transition-all duration-300 ${
                stanza.isHighlight
                  ? 'border border-rose-blush/40 shadow-glow bg-gradient-to-r from-wine-900/80 via-wine-800/80 to-wine-900/80'
                  : 'border border-rose-blush/15 hover:border-rose-blush/30'
              }`}
            >
              <div className="space-y-2">
                {stanza.lines.map((line, lIdx) => (
                  <p
                    key={lIdx}
                    className={`font-serif leading-relaxed ${
                      stanza.isHighlight
                        ? 'text-xl sm:text-2xl font-semibold gold-gradient-text'
                        : lIdx === 0
                        ? 'text-lg sm:text-xl text-rose-light/95 italic font-medium'
                        : 'text-base sm:text-lg text-rose-warm/85 font-light'
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small heartfelt note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-xs text-rose-warm/50 font-serif italic mt-8"
        >
          Lines written while thinking of your smile 😌
        </motion.p>
      </div>
    </section>
  );
}
