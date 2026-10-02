import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircleHeart } from 'lucide-react';
import { siteData } from '../data/content';

export default function RizzSection() {
  const { rizzCards } = siteData;

  return (
    <section id="rizz" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card border border-rose-blush/20 text-rose-warm text-xs font-serif italic">
            <MessageCircleHeart className="w-3.5 h-3.5 text-rose-blush" />
            <span>A little honest teasing</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white font-medium">
            Just a few facts about us... 😉
          </h2>
          <p className="text-xs sm:text-sm text-rose-light/60 max-w-sm mx-auto">
            (Don't blame me, you make it too easy to tease you)
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rizzCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-3xl p-6 glass-card border border-rose-blush/20 shadow-lg flex flex-col justify-between relative group hover:border-champagne-gold/40 transition-colors"
            >
              {/* Top emoji & title */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{card.emoji}</span>
                  <span className="text-[11px] uppercase tracking-wider font-mono text-champagne-gold/80">
                    Card #{i + 1}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-semibold text-rose-light mb-4">
                  {card.title}
                </h3>

                {/* Dialogues */}
                <div className="space-y-2.5 text-sm sm:text-base font-sans text-rose-light/85">
                  {card.dialogue.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                        item.speaker === 'Heart'
                          ? 'bg-rose-500/20 text-rose-warm border border-rose-400/20'
                          : item.speaker === 'Brain'
                          ? 'bg-wine-900/60 text-champagne-base border border-wine-700/30'
                          : 'bg-wine-950/40 text-rose-light/90'
                      }`}
                    >
                      <span className="font-semibold text-rose-blush mr-1.5">
                        {item.speaker}:
                      </span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom cute tag */}
              <div className="pt-5 mt-4 border-t border-rose-blush/10 text-[11px] text-rose-warm/60 flex items-center justify-between">
                <span>Guilty as charged</span>
                <span>🐮❤️</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
