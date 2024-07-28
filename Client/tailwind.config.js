/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 5px 50px 16px rgba(0,0,0,0.1)',
        '4xl': '4px 8px 19px -3px rgba(0,0,0,0.27)',
        '5xl': '1.5px 1px 6px 1.5px rgba(0,0,0,0.22)',
      },
      backgroundImage: {
        banner: "url('./src/assets/pictures/aboutbg.jpg')",
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
        snowWhite: "#F5F5F5",
      },
    },
  },
  

};
