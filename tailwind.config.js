/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#DB4444",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#F5F5F5",
        200: "rgba(0, 0, 0, .2)",
      },
    },
    extend: {},
  },
  plugins: [],
};
