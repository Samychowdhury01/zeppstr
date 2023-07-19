/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        primary: '#E71D36',
        secondary: '#2EC4B6'
      },
      backgroundColor: {
        primary: '#E71D36',
      }
    },
  },
  plugins: [require("daisyui")],
}

