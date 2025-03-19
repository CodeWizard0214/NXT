const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'eurostar-extended': ['EurostarExtended', ...fontFamily.sans],
        manrope: ['var(--font-manrope)', ...fontFamily.sans],
        inter: ['var(--font-inter)', ...fontFamily.sans],
        'g-light': ['g-light', ...fontFamily.sans],
        'Bank-Sans': ['Bank-Sans', ...fontFamily.sans],
        'Poppins': ['Poppins', ...fontFamily.sans]
      },
      colors: {
        gallery: '#EFEFEF',
        gray: '#888888',
        'cod-gray': '#1A1A1A',
        'oslo-gray': '#81859F',
        'royal-blue': '#3966E0',
        'shuttle-gray': '#62686F',
        woodsmoke: '#171B20',
        'cadet-blue': '#B2B9C2',
        jumbo: '#81818B',
        'silver-chalice': '#A6A6A6',
        'dusty-gray': '#959595',
        mercury: '#E4E4E4',
        'mine-shaft': '#333333',
        'shark': "#1B1B1F"
      },
      fontSize: {
        '2xs': '0.625rem',
        '4.5xl': '2.4375rem',
        '5.5xl': '3.375rem',
        '7.5xl': '5rem'
      },
      screens: {
        'mini-screen': { raw: '(max-height: 715px) and (max-width: 640px)' },
        'min-wide-screen': { raw: '(max-height: 833px) and (min-width: 1024px)' }
      },
      backdropBlur: {
        xs: '3px'
      }
    }
  },
  plugins: [],
  variants: {
    extend: {
      brightness: ['hover'],
    },
  }
};
