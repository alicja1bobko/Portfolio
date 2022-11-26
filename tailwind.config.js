/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    ,
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "375px",
      xs: "414px",
      sm: "539px",
      md: "912px",
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
