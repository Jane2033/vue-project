/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink500": "#E80063",
        "pink700": "#BD508B",
        "red200": "#FFC3C3",
        "red100": "#FFF4F4",
        "purple400": "#B9A4D9",
        "sky400": "#CEE0F7",
      },
      fontFamily: {
        NotoSans: ["Noto Sans TC, sans-serif"],
        Funkydori: ["funkydori, sans-serif"],
      },
      container: {
        padding: "2rem",
        center: true,
      },
    },
  },
  plugins: [],
}

