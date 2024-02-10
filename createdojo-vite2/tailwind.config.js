/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "light-gray-100": "#d7d7d7",
      "dark-gray-200": "#7a7a7a",
      "regular-orange": "#f59a23",
      "blue-gray-100": "#a3b9d6",
      "darkest-gray-100": "#333333",
      "discord-100": "#5865F2",
      "twitter-100": "#1DA1F2",
      "feedback-100": "#333333",
      "arrow-colour-grey": "#8f8f8f",
      "logo-background-dark-grey": "#7a7a7a",
    },
    
    extend: {
      animation: {
        marquee: 'marquee 55s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors:{
        ...colors
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
