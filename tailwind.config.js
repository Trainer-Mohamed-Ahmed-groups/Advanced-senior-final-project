/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  important: true,
  content: ["./src/**/*.{js,jsx}"],
  plugins: [],
  theme: {
    colors: {
      'nav-bg': "#273444",
      primary: "#273444",
      white: "#FFF",
      secondary: "#4e4e45",
      gray: {
        "400": "#b9b9b9",
        "600": "#424447"
      },
      gold: "#FFD700"
    },
    fontFamily: {
      // cairo: ['Cairo', 'sans-serif']
    }
  }
}

