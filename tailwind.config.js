/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  important: true,
  content: ["./src/**/*.{js,jsx}"],
  plugins: [],
  theme: {
    colors: {
      primary: "#273444",
      white: "#FFF",
      secondary: "#4e4e45",
      gray: {
        "600": "#424447"
      }
    },
    fontFamily: {
      cairo: ['Cairo', 'sans-serif']
    }
  }
}

