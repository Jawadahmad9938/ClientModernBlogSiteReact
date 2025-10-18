/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e63946",
        secondary: "#1d3557",
        accent: "#f1faee",
      },
      backgroundImage: {
        "red-gradient": "linear-gradient(90deg, #e63946, #ff758f)",
      },
    },
  },
  plugins: [],
}
