/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        200: "200px",
        300: "300px",
        350: "350px",
        400: "400px",
        500: "500px",
      },

      minWidth: { 200: "200px", 300: "300px", 350: "350px", 400: "400px" },

      height: {
        200: "200px",
        300: "300px",
        350: "350px",
        400: "400px",
      },
    },
  },
  plugins: [],
};
