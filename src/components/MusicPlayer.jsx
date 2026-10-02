import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicPlayer({ isUnlocked }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  // Initialize and attempt autoplay after unlock
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.55;
    audio.loop = true;

    const tryPlay = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setShowPrompt(false);
        })
        .catch((e) => {
          console.log("Autoplay waiting for user gesture:", e.message);
          setIsPlaying(false);
        });
    };

    if (isUnlocked) {
      tryPlay();
    }

    // Global listener on first user interaction to start audio smoothly
    const handleFirstGesture = () => {
      setHasInteracted(true);
      if (audio.paused && isUnlocked) {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            setShowPrompt(false);
          })
          .catch(() => {});
      }
    };

    window.addEventListener('click', handleFirstGesture, { once: true });
    window.addEventListener('touchstart', handleFirstGesture, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };
  }, [isUnlocked]);

  const togglePlay = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
        setShowPrompt(false);
      }).catch(console.error);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/bgm_music/The Rose (Instrumental).mp3"
        preload="auto"
      />

      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {/* Helper prompt banner when not playing yet */}
        <AnimatePresence>
          {showPrompt && !isPlaying && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={togglePlay}
              className="cursor-pointer hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-900/90 border border-champagne-gold/30 text-champagne-glow text-xs font-serif shadow-lg backdrop-blur-md hover:bg-wine-800 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-rose-blush animate-ping" />
              <span>Tap to play our song 🎵</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating pill controller */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-3 py-2 rounded-full glass-card-wine border border-champagne-gold/30 shadow-2xl backdrop-blur-xl text-rose-light"
        >
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause music" : "Play music"}
            className="w-8 h-8 rounded-full bg-rose-deep/30 hover:bg-rose-deep/50 border border-rose-blush/30 flex items-center justify-center transition-all text-champagne-glow hover:text-white"
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5" />
            ) : (
              <Play className="w-3.5 h-3.5 translate-x-0.5" />
            )}
          </button>

          {/* Equalizer Wave / State */}
          <button
            onClick={togglePlay}
            className="flex items-center gap-1.5 px-1 py-1"
            title={isPlaying ? "Playing: The Rose (Instrumental)" : "Music Paused"}
          >
            {isPlaying ? (
              <div className="flex items-end gap-0.5 h-4 w-4">
                <span className="w-0.5 bg-champagne-gold animate-[bounce_0.8s_ease-in-out_infinite] h-full rounded-full" />
                <span className="w-0.5 bg-rose-blush animate-[bounce_0.5s_ease-in-out_infinite_0.2s] h-3/4 rounded-full" />
                <span className="w-0.5 bg-champagne-gold animate-[bounce_0.7s_ease-in-out_infinite_0.4s] h-full rounded-full" />
                <span className="w-0.5 bg-rose-blush animate-[bounce_0.6s_ease-in-out_infinite_0.1s] h-2/3 rounded-full" />
              </div>
            ) : (
              <Music className="w-4 h-4 text-rose-warm/60" />
            )}
            <span className="text-xs font-serif hidden md:inline text-rose-warm/90 tracking-wide">
              {isPlaying ? "The Rose 🎵" : "Paused 🔇"}
            </span>
          </button>

          {/* Mute Toggle */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
            className="p-1.5 rounded-full hover:bg-white/10 text-rose-warm/80 hover:text-white transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-rose-blush" />
            ) : (
              <Volume2 className="w-3.5 h-3.5" />
            )}
          </button>
        </motion.div>
      </div>
    </>
  );
}
