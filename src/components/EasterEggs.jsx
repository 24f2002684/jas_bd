import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function EasterEggs({ activeEasterEgg, onClose }) {
  return (
    <AnimatePresence>
      {activeEasterEgg && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 max-w-sm w-[90%] p-4 rounded-2xl glass-card-wine border border-champagne-gold/50 shadow-2xl text-center space-y-2 backdrop-blur-xl"
        >
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-champagne-gold" />
            <span className="text-xs uppercase tracking-wider font-mono text-champagne-glow font-bold">
              Secret Unlocked
            </span>
            <Sparkles className="w-4 h-4 text-champagne-gold" />
          </div>

          <p className="text-base sm:text-lg font-serif italic text-white font-medium">
            {activeEasterEgg}
          </p>

          <button
            onClick={onClose}
            className="text-xs text-rose-warm/70 hover:text-white underline pt-1"
          >
            close 😉
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
