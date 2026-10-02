import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Feather } from 'lucide-react';
import { siteData } from '../data/content';

export default function LoveLetter() {
  const { letter } = siteData;

  return (
    <section id="letter" className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-deep/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        {/* Section title */}
        <div className="text-center space-y-2 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-rose-blush/20 text-rose-warm text-xs font-serif italic"
          >
            <Feather className="w-3.5 h-3.5 text-champagne-gold" />
            <span>From my heart to yours</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif text-white font-medium tracking-tight"
          >
            {letter.heading}
          </motion.h2>
        </div>

        {/* Parchment Love Letter */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative paper-letter rounded-3xl p-6 sm:p-10 md:p-12 text-[#2b1720] shadow-2xl border border-champagne-gold/30 rotate-[-0.5deg] hover:rotate-0 transition-transform duration-500"
        >
          {/* Vintage Stamp Accent top right */}
          <div className="absolute top-6 right-6 w-14 h-16 rounded-md border-2 border-dashed border-[#8b3a59]/60 p-1 flex flex-col items-center justify-center rotate-6 select-none opacity-80">
            <span className="text-[9px] font-mono tracking-widest text-[#8b3a59] font-bold">AIR MAIL</span>
            <Heart className="w-4 h-4 fill-[#d94b78] text-[#d94b78] my-0.5" />
            <span className="text-[8px] font-mono text-[#8b3a59]">FOR JAS ❤️</span>
          </div>

          {/* Letter Header Date / Location */}
          <div className="border-b border-[#e0cbaf] pb-4 mb-6 pr-16">
            <p className="font-serif italic text-xs sm:text-sm text-[#735360]">
              Written with all my heart • On your special day
            </p>
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-5 text-base sm:text-lg md:text-xl font-serif leading-relaxed text-[#2a131e]/90">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl font-serif font-bold text-[#64174c]"
            >
              {letter.paragraphs[0]}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {letter.paragraphs[1]}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="italic text-[#75204c] font-medium"
            >
              {letter.paragraphs[2]}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {letter.paragraphs[3]}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="font-medium text-[#461136]"
            >
              {letter.paragraphs[4]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="pt-2 whitespace-pre-line text-[#64174c] font-semibold"
            >
              {letter.paragraphs[5]}
            </motion.div>
          </div>

          {/* Letter Signoff with Wax Seal Accent */}
          <div className="mt-10 pt-6 border-t border-[#e0cbaf] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-handwriting text-2xl sm:text-3xl text-[#862164]">
                {letter.signoff}
              </p>
              <p className="text-xs text-[#735360] font-serif">
                Always yours, Suhail
              </p>
            </div>

            {/* Faux Wax Seal */}
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#b81d4b] via-[#851336] to-[#540820] shadow-md flex items-center justify-center border border-[#e5a0b5]/40 select-none group cursor-pointer hover:scale-105 transition-transform">
              <span className="text-xs font-serif font-bold text-champagne-glow tracking-widest">
                S ❤️ J
              </span>
              <div className="absolute inset-0 rounded-full border border-white/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
