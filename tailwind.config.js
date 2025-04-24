/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_posts/*.{html,md}',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2c3e50',
      },
      height: {
        'screen-90': '90vh',
      }
    },
  },
  plugins: [],
} 