/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      heroBackgroundColor: "rgba(0,0,0,0.01%)",
      blue: "#23A6F0",
      light_black: "#252B42",
      black: "#18191F",
      grey: "#E6E6E6",
      grey_two: "#E4E4E4",
      orange: "#F4511E",
      muted_color: "#F5F5F5",
      dark_grey: "#818181",
      light_grey: "#979797",
      pagination: "#BDBDBD",
      flexibilityImageHover: "rgba(0,0,0,20%)",
      inputBg: "#f9f9f9",
      inputText: "#737373",
      fileBg: "rgba(244, 81, 30, 1%)",
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
      dropShadow: {
        minimumLiving: "0 4px 4px rgba(0,0,0,25%)",
        propertyList: "0 34px 36px rgba(0,0,0,13.37%)",
        addProperty: "0 4px 63px rgba(0,0,0,15%)",
      },
    },
  },
  plugins: [],
};
