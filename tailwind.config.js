/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'; // 1. Import defaultTheme

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 2. Add the fontFamily section here
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      
      // 3. Add the animation and keyframes for the blob
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};