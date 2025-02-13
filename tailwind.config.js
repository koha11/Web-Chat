/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,pug}',
    './src/**/**/*.{html,pug}',
    './src/**/**/**/*.{html,pug}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
};
