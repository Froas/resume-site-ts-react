/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        light: '#f9f9f9',
        dark: '#1a1a1a',
      }
    },
  },
  plugins: [],
  darkMode: 'class', 
}
