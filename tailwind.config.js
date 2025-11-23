/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
     colors: {
      bg: "#F2F2F2",
      card: "#EDF2C2",
      textPrimary: "#404040",
      textSecondary: "#737373",
      accent: "#F26800",
      darkBg: "#0D0D0D",
      darkCard: "#404040",
      darkText: "#F2F2F2",
      borderAccent: "#A3CCAB",
    },
    fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
