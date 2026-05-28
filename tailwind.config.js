/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A56FF',
          dark: '#003BD6',
        },
        navy: {
          DEFAULT: '#0B1F6B',
          dark: '#050D30',
        },
        accent: {
          DEFAULT: '#3B82F6',
          sky: '#60A5FA',
          light: '#EFF6FF',
        },
        darkBg: {
          DEFAULT: '#0F172A',
          card: '#1E293B',
          border: '#334155',
        },
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          light: '#F8FAFC',
        },
        borderBlue: '#BFDBFE',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        accent: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #1A56FF 0%, #60A5FA 100%)',
        'gradient-navy': 'linear-gradient(135deg, #0B1F6B 0%, #1A56FF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #050D30 0%, #0F172A 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(26, 86, 255, 0.7)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 10px rgba(26, 86, 255, 0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(11, 31, 107, 0.1)',
        'premium-hover': '0 20px 40px -15px rgba(26, 86, 255, 0.25)',
        'premium-glow': '0 0 25px 2px rgba(26, 86, 255, 0.15)',
        'premium-glow-dark': '0 0 25px 2px rgba(96, 165, 250, 0.2)',
      }
    },
  },
  plugins: [],
}
