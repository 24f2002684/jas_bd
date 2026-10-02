import React, { useState, useEffect } from 'react';
import LoginGate from './components/LoginGate';
import MusicPlayer from './components/MusicPlayer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GoldenTerraceHero from './components/GoldenTerraceHero';
import LoveLetter from './components/LoveLetter';
import ReassuranceSection from './components/ReassuranceSection';
import RizzSection from './components/RizzSection';
import KavithaiSection from './components/KavithaiSection';
import MemoryGallery from './components/MemoryGallery';
import ThingsILove from './components/ThingsILove';
import CelebrationSection from './components/CelebrationSection';
import SpecialMemoryClimax from './components/SpecialMemoryClimax';
import FinalSurprise from './components/FinalSurprise';
import FinalStarlitNight from './components/FinalStarlitNight';
import EasterEggs from './components/EasterEggs';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [cowClicks, setCowClicks] = useState(0);
  const [activeEasterEgg, setActiveEasterEgg] = useState(null);

  // Check session storage on mount
  useEffect(() => {
    const saved = sessionStorage.getItem('jasmiya_surprise_unlocked');
    if (saved === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    setIsUnlocked(true);
    sessionStorage.setItem('jasmiya_surprise_unlocked', 'true');
  };

  const handleOpenSurprise = () => {
    const el = document.getElementById('golden-terrace');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCowClick = () => {
    const nextCount = cowClicks + 1;
    setCowClicks(nextCount);

    if (nextCount === 3) {
      setActiveEasterEgg("Aiyo, found the secret cow button 😂🐮");
    } else if (nextCount === 6) {
      setActiveEasterEgg("Okay okay... I admit it. I miss you. ❤️");
    } else if (nextCount === 10) {
      setActiveEasterEgg("En kannukutty ku vera vela illaya? 🐮❤️ Just kidding, click away!");
    }

    setTimeout(() => {
      setActiveEasterEgg(null);
    }, 4500);
  };

  return (
    <div className="relative min-h-screen bg-wine-950 text-rose-light overflow-x-hidden selection:bg-rose-deep selection:text-white">
      {/* Secret Login Entrance Gate */}
      {!isUnlocked && (
        <LoginGate onUnlock={handleUnlock} />
      )}

      {/* Main Experience (Mounted only after unlock or ready) */}
      {isUnlocked && (
        <div className="relative animate-fadeIn">
          {/* Persistent Background Music Player */}
          <MusicPlayer isUnlocked={isUnlocked} />

          {/* Minimal Navigation & Progress */}
          <Navbar onCowClick={handleCowClick} />

          {/* Hero Section */}
          <HeroSection onOpenSurprise={handleOpenSurprise} />

          {/* Special Hero Photo Reveal */}
          <GoldenTerraceHero />

          {/* Personal Handwritten Letter */}
          <LoveLetter />

          {/* Reassurance & Comfort */}
          <ReassuranceSection />

          {/* Playful & Tasteful Teasing */}
          <RizzSection />

          {/* Romantic Kavithai */}
          <KavithaiSection />

          {/* Interactive Digital Memory Scrapbook */}
          <MemoryGallery />

          {/* Why You're Special */}
          <ThingsILove />

          {/* Birthday Celebration & Wishes */}
          <CelebrationSection />

          {/* Special Photo Climax */}
          <SpecialMemoryClimax />

          {/* Final Surprise Envelope */}
          <FinalSurprise />

          {/* Starlit Closing Screen */}
          <FinalStarlitNight />

          {/* Easter Egg Toast Notification */}
          <EasterEggs
            activeEasterEgg={activeEasterEgg}
            onClose={() => setActiveEasterEgg(null)}
          />
        </div>
      )}
    </div>
  );
}
