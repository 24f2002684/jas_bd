/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          950: '#140510',
          900: '#1f0718',
          800: '#2f0b24',
          700: '#461136',
          600: '#64174c',
          500: '#862164',
          400: '#ab3282',
        },
        rose: {
          light: '#fde8ef',
          warm: '#f9c5d5',
          blush: '#f28ba8',
          deep: '#d94b78',
        },
        champagne: {
          light: '#FBF7EE',
          base: '#EED9B2',
          gold: '#D4AF37',
          glow: '#F3E5AB',
        },
        cream: '#FFFDF9',
        parchment: '#FAF5EE',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', '"Dancing Script"', 'cursive'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(242, 139, 168, 0.25)',
        'glow': '0 0 30px rgba(242, 139, 168, 0.35)',
        'glow-gold': '0 0 35px rgba(212, 175, 55, 0.3)',
        'glow-lg': '0 0 60px rgba(217, 75, 120, 0.4)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      }
    },
  },
  plugins: [],
}
