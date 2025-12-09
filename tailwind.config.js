/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#151312',
        secondary: '#F59E0B',
        accent: '#AB8BFF',
      },
      light: {
        100:'#D6C6FF',
        200:'#A8B5DB',
        300:'#9CA4AB',
      },
      dark: {
        100:'#221F3D',
        200:'#0f0d23',
        
      },
    },
  },
  plugins: [],
};
