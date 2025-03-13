/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#9333ea',
          DEFAULT: '#7928ca',
          dark: '#5b21b6',
        },
        secondary: {
          light: '#06b6d4',
          DEFAULT: '#0891b2',
          dark: '#0e7490',
        },
        accent: {
          light: '#f472b6',
          DEFAULT: '#ec4899',
          dark: '#db2777',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7928ca 0%, #06b6d4 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #9333ea 0%, #0891b2 100%)',
        'gradient-accent': 'linear-gradient(135deg, #5b21b6 0%, #0e7490 100%)',
      }
    },
  },
  plugins: [],
};