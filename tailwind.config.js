/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Epilogue: ["Epilogue", "sans-serif"],
      },
      colors: {
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-white": "hsl(0, 0%, 98%)",
      },
      screens: {
        "1.5xl" : "1440px"
      }
    },
  },
  plugins: [],
};
