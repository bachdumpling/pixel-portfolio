/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vt323: ["VT323", "monospace"],
      },
      keyframes: {
        loading: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        loading: "loading 1s linear forwards",
      },
      colors: {
        "win-gray": "#C0C0C0",
        "win-white": "#E7E1E0",
        "win-blue": "#8AB1D6",
        "win-border": "#000000",
        "win-bg": "#386EA7",
        "win-yellow": "#FFFDDC",
      },
    },
  },
  plugins: [],
};
