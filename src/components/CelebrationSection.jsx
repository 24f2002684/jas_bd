import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Cake } from 'lucide-react';

export default function CelebrationSection() {
  const [celebrated, setCelebrated] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleCelebrate = () => {
    setCelebrated(true);
    setClickCount((prev) => prev + 1);

    // Multi-stage elegant fireworks confetti
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#d4af37', '#f28ba8', '#eed9b2', '#ffffff', '#ab3282', '#ff6b8b']
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <section id="celebration" className="relative py-24 px-4 overflow-hidden text-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-champagne-gold/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-champagne-gold/30 text-champagne-gold text-xs uppercase tracking-widest font-mono"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Make A Birthday Wish</span>
          <Sparkles className="w-3.5 h-3.5" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-serif text-white font-medium"
        >
          Today is your day. ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg sm:text-2xl font-serif italic text-rose-warm max-w-xl mx-auto"
        >
          So please smile a little extra today.
        </motion.p>

        {/* Interactive Wish Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-4"
        >
          <button
            onClick={handleCelebrate}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-wine-800 via-[#862164] to-rose-deep text-white font-serif text-lg sm:text-xl shadow-glow hover:shadow-glow-lg border border-champagne-gold/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Cake className="w-5 h-5 text-champagne-gold group-hover:rotate-12 transition-transform" />
            <span>Tap to light up your sky ✨</span>
            <Sparkles className="w-5 h-5 text-champagne-glow" />
          </button>
        </motion.div>

        {/* Cheerful toast note upon tap */}
        <AnimatePresence>
          {celebrated && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="pt-4 text-sm sm:text-base font-serif text-champagne-glow italic flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-rose-blush text-rose-blush" />
              <span>
                {clickCount === 1
                  ? "May every single wish in your heart come true this year di Jas ❤️"
                  : `Burst #${clickCount}! Jasmiya's birthday joy level: 1000% 🥳🐮`}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
