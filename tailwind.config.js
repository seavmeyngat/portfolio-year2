/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        knewave: ['Knewave', 'cursive'],
        fredoka: ['Fredoka', 'sans-serif'],  // Combined here
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out forwards',
      },
      boxShadow: {
        'custom-shadow': '0 4px 10px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
