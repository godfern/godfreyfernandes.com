/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // colors: {
      //   sunset: '#F15A29',
      //   coral: '#D9462E',
      //   glow: '#F29B50',
      //   ocean: '#2F3A45',
      //   twilight: '#1B1E22',
      //   skyash: '#8A8F91',
      //   backgroundImage: {
      //     'sunset-gradient': 'linear-gradient(to bottom, #F15A29 0%, #F29B50 30%, #2F3A45 70%, #1B1E22 100%)',
      //   },
      // },
      colors: {
        'brand-aqua': '#3FB9C6',
        'brand-navy': '#1D3557',
        'brand-sand': '#F4D3A1',
        'brand-coral': '#E67E22',
        'brand-green': '#496D59',
        primary: {
          DEFAULT: '#F15A29',   // Sunset Orange
          dark: '#D74D21',
          light: '#F37C4E',
        },
        secondary: {
          DEFAULT: '#F29B50',   // Golden Glow
          dark: '#D6843F',
          light: '#F8B36C',
        },
        accent: {
          DEFAULT: '#2F3A45',   // Ocean Blue-Gray
          dark: '#1B1E22',      // Twilight Charcoal
          light: '#4D5B66',
        },
        neutral: {
          light: '#F9F4EF',     // Cloud Cream
          DEFAULT: '#EAEAEA',   // Off White
          dark: '#1B1E22',
        },
      },
      keyframes: {
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10%) scaleY(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scaleY(1)' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.3s ease-out forwards',
         'fade-in': 'fade-in 0.8s ease-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
