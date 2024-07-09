/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/hero2.jpg')",
      },
      fontFamily: {
        geologica: ["Geologica", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
      colors: {
        frenchBlue: "#1976D2",
        russet: "#854D27",
        silver: "#BFC0C0",
        gunMetal: "#2D3142",
      },
    },
  },
  plugins: [],
};
