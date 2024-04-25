/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: '#1b1b1b',
        light: '#fff4dd',
        primary: '#B63E96', // 240,86,199
        'primary-dark': '#58E6D9', // 80,230,217
      },

      animation: {
        reveal: 'reveal 1s ease-out forwards',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(50%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        circularLight:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #fff4dd 5px, #fff4dd 100px);',
      },

      screens: {
        sm: '640px', // Applies from 640px and up
        md: '768px', // Applies from 768px and up
        lg: '1024px', // Applies from 1024px and up
        xl: '1280px', // Applies from 1280px and up
        '2xl': '1536px', // Applies from 1536px and up
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
