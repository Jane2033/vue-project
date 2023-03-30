/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        NotoSans: ["Noto Sans TC, sans-serif"],
        Funkydori: ["funkydori, sans-serif"],
      },
      container:{
        padding: "2rem",
        center: true,
      },
    },
  },
  plugins: [],
}

