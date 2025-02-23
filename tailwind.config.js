/** @type {import('tailwindcss').Config} */


export default {
  darkMode: "class", // Active le mode sombre en fonction de la classe CSS
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a",
        light: "#ffffff",
      },
      
    },
  },
  plugins: [],

};