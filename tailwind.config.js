/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      heroBackgroundColor: "rgba(0,0,0,0.01%)",
      blue: "#23A6F0",
      light_black: "#252B42",
      grey: "#E6E6E6"
    },
    fontSize: {
      xl: ["42px"],
      lg: ["36px"],
      md: ["32px"],
      sm: ["26px"],
      lbase: ["18px"],
      base: ["14px"],
    },
    extend: {
      heroBackgroundImage: "url('/src/assets/hero-bg.png')",
    },
  },
  plugins: [],
};
