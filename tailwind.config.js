/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      xxxl: "1990px",
    },
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "7rem",
      },
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
