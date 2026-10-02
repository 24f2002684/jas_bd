import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronLeft, ChevronRight, Maximize2, Heart } from 'lucide-react';
import { siteData } from '../data/content';

export default function MemoryGallery() {
  const { gallery } = siteData;
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  // Mobile swipe support
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  return (
    <section id="memories" className="relative py-24 px-4 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-wine-800/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-rose-deep/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card border border-rose-blush/20 text-rose-warm text-xs font-serif italic">
            <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
            <span>Digital Scrapbook</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white font-medium">
            Memories of My Favourite Girl ❤️
          </h2>
          <p className="text-sm sm:text-base text-rose-light/75 max-w-lg mx-auto font-sans font-light">
            Every photograph tells a small story of how you quietly stole my heart.
          </p>
        </div>

        {/* Scrapbook Polaroid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 items-start">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 * index, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setSelectedIndex(index)}
              className={`cursor-pointer rounded-2xl bg-[#FFFDF9] p-3 sm:p-4 text-wine-950 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-rose-blush/20 relative group ${item.rotation}`}
            >
              {/* Top Washi Tape Accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-champagne-base/60 backdrop-blur-sm border border-champagne-gold/30 shadow-sm rotate-[-2deg] pointer-events-none z-10" />

              {/* Photo Frame */}
              <div className={`relative overflow-hidden rounded-xl bg-wine-950/20 ${item.aspect} shadow-inner`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  onError={(e) => {
                    const currentSrc = e.currentTarget.src;
                    if (currentSrc.endsWith('.PNG')) {
                      e.currentTarget.src = currentSrc.replace(/\.PNG$/, '.png');
                    } else if (currentSrc.endsWith('.png')) {
                      e.currentTarget.src = currentSrc.replace(/\.png$/, '.PNG');
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-wine-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/40">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {item.isHero && (
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-wine-950/80 backdrop-blur-md text-champagne-glow border border-champagne-gold/40 text-[10px] font-serif flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-rose-blush text-rose-blush" />
                    <span>Special Memory</span>
                  </div>
                )}
              </div>

              {/* Polaroid Caption */}
              <div className="pt-4 pb-2 px-1 text-center space-y-1">
                <p className="font-serif italic text-base sm:text-lg font-bold text-[#461136]">
                  {item.caption}
                </p>
                <p className="text-xs text-[#735360] font-sans">
                  {item.subcaption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content Container with Touch Swipe Handlers */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="max-w-2xl w-full max-h-[88vh] flex flex-col items-center select-none"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-h-[70vh]">
                <img
                  src={gallery[selectedIndex].src}
                  alt={gallery[selectedIndex].alt}
                  onError={(e) => {
                    const currentSrc = e.currentTarget.src;
                    if (currentSrc.endsWith('.PNG')) {
                      e.currentTarget.src = currentSrc.replace(/\.PNG$/, '.png');
                    } else if (currentSrc.endsWith('.png')) {
                      e.currentTarget.src = currentSrc.replace(/\.png$/, '.PNG');
                    }
                  }}
                  className="max-h-[70vh] w-auto object-contain rounded-2xl"
                />
              </div>

              {/* Caption Card */}
              <div className="mt-4 p-4 rounded-2xl glass-card text-center max-w-md w-full border border-rose-blush/20">
                <p className="font-serif text-lg sm:text-xl font-bold text-champagne-glow">
                  {gallery[selectedIndex].caption}
                </p>
                <p className="text-xs sm:text-sm text-rose-light/80 font-sans mt-0.5">
                  {gallery[selectedIndex].subcaption}
                </p>
                <div className="text-[11px] text-rose-warm/50 mt-2 font-mono">
                  {selectedIndex + 1} of {gallery.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
