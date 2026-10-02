import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Gift, Heart, Sparkles, Flame, Check } from 'lucide-react';
import { siteData } from '../data/content';

export default function FinalSurprise() {
  const { finalSurprise } = siteData;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.65 },
      colors: ['#f28ba8', '#d4af37', '#ffffff', '#ab3282']
    });
  };

  return (
    <section id="surprise" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-rose-deep/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        {/* Section title */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card border border-rose-blush/20 text-rose-warm text-xs font-serif italic">
            <Gift className="w-3.5 h-3.5 text-champagne-gold" />
            <span>The Final Envelope</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white font-medium">
            {finalSurprise.heading}
          </h2>
        </div>

        {/* Closed Envelope Interactive State */}
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="closed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center p-8 sm:p-14 rounded-3xl glass-card border border-champagne-gold/30 shadow-2xl text-center space-y-6 max-w-lg mx-auto"
            >
              {/* Envelope Graphic */}
              <div className="relative w-36 h-28 sm:w-44 sm:h-32 rounded-2xl bg-gradient-to-br from-wine-800 to-rose-950 border-2 border-champagne-gold/50 shadow-glow flex items-center justify-center group cursor-pointer"
                   onClick={handleOpenEnvelope}>
                {/* Envelope Flap Lines */}
                <div className="absolute top-0 left-0 right-0 h-14 border-b-2 border-champagne-gold/40 clip-path-triangle bg-wine-900/60" />
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-deep to-champagne-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 fill-white text-white" />
                </div>
                <div className="absolute bottom-2 text-[10px] font-mono tracking-widest text-champagne-base/70">
                  SEALED FOR JASMIYA
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-base sm:text-lg font-serif text-rose-light">
                  A letter written specifically for your eyes only.
                </p>
                <p className="text-xs text-rose-warm/60 font-sans">
                  Tap below to break the wax seal
                </p>
              </div>

              <button
                onClick={handleOpenEnvelope}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-deep via-wine-600 to-rose-deep text-white font-serif text-lg font-medium shadow-glow hover:shadow-glow-lg border border-rose-blush/30 hover:scale-105 active:scale-95 transition-all"
              >
                <Mail className="w-4 h-4 text-champagne-gold" />
                <span>{finalSurprise.envelopePrompt}</span>
                <Sparkles className="w-4 h-4 text-champagne-glow" />
              </button>
            </motion.div>
          ) : (
            /* Open Letter State */
            <motion.div
              key="opened"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="paper-letter rounded-3xl p-6 sm:p-10 md:p-12 text-[#2b1720] shadow-2xl border border-champagne-gold/40 relative"
            >
              {/* Top Greeting Badge */}
              <div className="border-b border-[#e0cbaf] pb-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#64174c]">
                  {finalSurprise.birthdayWishes}
                </h3>
                <span className="text-xs font-serif italic text-[#855467] bg-[#f4e6d4] px-3 py-1 rounded-full">
                  October 2026 • Cit Chennai
                </span>
              </div>

              {/* Main Letter Content */}
              <div className="space-y-4 text-base sm:text-lg md:text-xl font-serif leading-relaxed text-[#2a131e]/90">
                <p className="font-semibold text-[#862164]">
                  {finalSurprise.mainText[0]}
                </p>
                <p>{finalSurprise.mainText[1]}</p>
                <p className="italic text-[#75204c]">
                  {finalSurprise.mainText[2]}
                </p>
                <p>{finalSurprise.mainText[3]}</p>
                <p className="font-medium text-[#461136]">
                  {finalSurprise.mainText[4]}
                </p>
                <div className="py-2 space-y-1">
                  <p className="text-[#862164] font-semibold">{finalSurprise.mainText[5]}</p>
                  <p className="text-[#862164] font-semibold">{finalSurprise.mainText[6]}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#eedec8]/60 border border-[#ddc3a2] my-4 space-y-2">
                  <p className="text-sm font-sans tracking-wide text-[#735360] uppercase">
                    {finalSurprise.mainText[7]}
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-[#64174c]">
                    {finalSurprise.mainText[8]}
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-[#862164]">
                    {finalSurprise.mainText[9]}
                  </p>
                  <div className="pt-2 text-base font-semibold text-[#461136] space-y-1">
                    <p>{finalSurprise.mainText[10]}</p>
                    <p>{finalSurprise.mainText[11]}</p>
                    <p className="flex items-center gap-1.5 text-[#a82548]">
                      <span>{finalSurprise.mainText[12]}</span>
                      <Flame className="w-4 h-4" />
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#735360] italic pt-2">
                  {finalSurprise.mainText[13]}
                </p>
              </div>

              {/* Signoff */}
              <div className="mt-8 pt-6 border-t border-[#e0cbaf] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="whitespace-pre-line font-handwriting text-2xl sm:text-3xl text-[#862164] text-center sm:text-left">
                  {finalSurprise.signoff}
                </div>

                {/* Final Cute Title */}
                <div className="px-4 py-2 rounded-2xl bg-[#64174c] text-champagne-glow font-serif text-sm sm:text-base font-bold shadow-md">
                  {finalSurprise.footerKutty}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
