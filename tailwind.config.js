/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sono)"],
      },
      colors: {
        sfondo: "#1A1B27",
        celeste: "#5377B9",
        giallo: "#DB7F4E",
        verde: "#33AFAC",
      },
    },
  },
  plugins: [],
};
