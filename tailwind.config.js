/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: {
        100: "#f3c3c3",
        400: "#e26969",
        900: "#DB4444",
      },
      black: {
        900: "#000",
      },
      white: {
        900: "#fff",
      },
      gray: {
        100: "#F5F5F5",
        200: "rgba(0, 0, 0, .2)",
        300: "rgb(100 116 139)",
        400: "rgb(51 65 85)",
        500: "rgba(0, 0, 0, .3)",
        600: "rgb(3 7 18)",
        700: "rgb(31 41 55)",
        900: "#808080",
        800: "#7A7A7A",
      },
      green: {
        100: "rgb(220 252 231)",
      },
    },
    extend: {},
  },
  plugins: [],
};
