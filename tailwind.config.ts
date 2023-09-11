/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        cardShadow: "-25px 47px 66px 0px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryLight: "#0252CD",
        primaryDark: "#428DFF",
        secondary: "#FFBE62",
        challengeRed: "#E15A46",
        learningsGreen: "#02BC7D",
        white500: "#6F74A7",
        white800: "#F3F8FF",
        white900: "#FFFFFF",
        black200: "#151E2C",
        black300: "#29374C",
        black400: "#778295",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
