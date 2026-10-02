import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Image, Mail, ShieldCheck, Gift, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ onCowClick }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check current section
      const sections = ['hero', 'golden-terrace', 'letter', 'reassurance', 'rizz', 'kavithai', 'memories', 'special', 'celebration', 'surprise'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Letter", href: "#letter", icon: Mail },
    { label: "Memories", href: "#memories", icon: Image },
    { label: "For You", href: "#reassurance", icon: ShieldCheck },
    { label: "Special", href: "#special", icon: Star },
    { label: "Surprise", href: "#surprise", icon: Gift },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
      {/* Top progress line */}
      <div className="w-full h-1 bg-wine-900/30">
        <div
          className="h-full bg-gradient-to-r from-rose-deep via-rose-blush to-champagne-gold transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-3 flex items-center justify-between pointer-events-auto">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-rose-blush/20 shadow-lg transition-transform hover:scale-105"
        >
          <span className="text-sm font-serif font-semibold gold-gradient-text tracking-wide">
            Jasmiya
          </span>
          <span className="text-xs text-rose-deep group-hover:scale-125 transition-transform duration-200">
            ❤️
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCowClick?.();
            }}
            className="text-xs hover:scale-125 transition-transform ml-1 select-none"
            title="A secret cow button? 👀"
          >
            🐮
          </button>
        </a>

        {/* Minimal Navigation Pills */}
        <nav className="flex items-center gap-1 sm:gap-2 px-2.5 py-1.5 rounded-full glass-card border border-rose-blush/20 shadow-lg text-xs font-sans">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="px-2.5 py-1 rounded-full text-rose-light/80 hover:text-champagne-glow hover:bg-white/10 transition-colors flex items-center gap-1.5"
              >
                <Icon className="w-3 h-3 text-rose-blush hidden sm:inline" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
