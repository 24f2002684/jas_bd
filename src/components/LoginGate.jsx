import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Lock, Heart, Sparkles, Send } from 'lucide-react';

const incorrectMessages = [
  "Aiyo 😂 think properly...",
  "Hint: He's kinda annoying, but he loves you a lot. 🐮",
  "Try again, kannukutty 👀",
  "Wait, did you forget your own gundu? 🥺😂",
  "Think of the guy who made this entire website for you 😉",
  "Think... who calls you kannukutty all the time? 🐮❤️"
];

export default function LoginGate({ onUnlock }) {
  const [answer, setAnswer] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const checkAnswer = (input) => {
    const cleaned = input
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');

    // Accept variations of Suhail / Suhail Akthar / Suhail Akthar S M / gundu
    const validTerms = [
      'suhail',
      'suhailakthar',
      'suhailakhtarsm',
      'suhailakhtar',
      'suhailakhtarsm',
      'gundu',
      'mygundu',
      'engundu',
      'suhailkutty',
    ];

    return validTerms.some(term => cleaned.includes(term) || term.includes(cleaned));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!answer.trim()) return;

    if (checkAnswer(answer)) {
      setIsSuccess(true);
      setErrorMsg('');

      // Confetti burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f28ba8', '#d4af37', '#ffffff', '#eed9b2', '#d94b78']
      });

      setTimeout(() => {
        onUnlock();
      }, 2000);
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);

      const nextMsg = incorrectMessages[attemptCount % incorrectMessages.length];
      setErrorMsg(nextMsg);
      setAttemptCount(prev => prev + 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#140510] via-[#1f0718] to-[#140510] p-4 overflow-hidden">
      {/* Ambient background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-rose-deep/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-champagne-gold/10 blur-[130px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        
        {/* Floating subtle sparkles */}
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-rose-blush/30 twinkle-star"
            style={{
              top: `${(i * 19) % 95}%`,
              left: `${(i * 23) % 95}%`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              animationDelay: `${(i * 0.4)}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative z-10 w-full max-w-md p-6 sm:p-8 rounded-3xl glass-card border border-rose-blush/20 shadow-2xl backdrop-blur-xl ${
          isShaking ? 'animate-bounce' : ''
        }`}
      >
        <div className="text-center space-y-4">
          {/* Top secret badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-300/20 text-rose-blush text-xs tracking-wider uppercase font-medium">
            <Lock className="w-3.5 h-3.5 text-rose-blush" />
            <span>Top Secret Surprise</span>
          </div>

          {/* Secret Intro Lines */}
          <div className="space-y-1.5 pt-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg font-serif italic text-champagne-base"
            >
              Hey you... 👀
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-rose-light/85"
            >
              I made something for someone very special.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xs sm:text-sm text-rose-warm/75"
            >
              But first, I need to make sure it's actually you. 😉
            </motion.p>
          </div>

          {/* The Cute Question */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-4 pb-2"
          >
            <div className="p-4 rounded-2xl bg-wine-900/60 border border-champagne-gold/20 shadow-inner">
              <h2 className="text-xl sm:text-2xl font-serif font-medium gold-gradient-text tracking-wide flex items-center justify-center gap-2">
                <span>Who's your gundu?</span>
                <span className="text-2xl">🐮😉</span>
              </h2>
            </div>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 pt-2">
            <div className="relative">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer..."
                disabled={isSuccess}
                autoFocus
                className="w-full px-5 py-3.5 rounded-xl bg-wine-950/70 border border-rose-blush/30 text-rose-light placeholder-rose-warm/40 focus:outline-none focus:border-champagne-gold focus:ring-2 focus:ring-champagne-gold/20 transition-all text-center sm:text-left text-base shadow-inner disabled:opacity-70"
              />
              <button
                type="submit"
                disabled={!answer.trim() || isSuccess}
                className="absolute right-2 top-2 bottom-2 px-4 rounded-lg bg-gradient-to-r from-rose-deep to-wine-600 hover:from-rose-500 hover:to-wine-500 text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md hover:shadow-rose-deep/30"
              >
                {isSuccess ? (
                  <Heart className="w-4 h-4 fill-white text-white animate-pulse" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Error Message */}
            <AnimatePresence mode="wait">
              {errorMsg && !isSuccess && (
                <motion.div
                  key={errorMsg}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3 rounded-xl bg-rose-950/50 border border-rose-500/30 text-xs sm:text-sm text-rose-warm font-sans"
                >
                  {errorMsg}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success Message */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-xl bg-wine-800/80 border border-champagne-gold/40 text-center space-y-1 shadow-lg"
                >
                  <p className="text-base sm:text-lg font-serif italic text-champagne-glow font-medium flex items-center justify-center gap-1.5">
                    <span>I knew you'd know.</span>
                    <span>😌❤️</span>
                  </p>
                  <p className="text-xs text-rose-light/75 animate-pulse">
                    Opening your birthday world... ✨
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Subtle footer hint */}
          <div className="pt-2 text-[11px] text-rose-warm/40 tracking-wider">
            Surprise created with love by Suhail S M
          </div>
        </div>
      </motion.div>
    </div>
  );
}
