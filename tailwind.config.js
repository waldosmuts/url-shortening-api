/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white": "#FFF",
      "primary-cyan": "hsl(180, 66%, 49%)",
      "primary-violet": "hsl(257, 27%, 26%)",
      "secondary-red": "hsl(0, 87%, 67%)",
      "neutral-gray": "hsl(0, 0%, 75%)",
      "neutral-violet": "hsl(257, 7%, 63%)",
      "neutral-dark-blue": "hsl(255, 11%, 22%)",
      "neutral-dark-violet": "hsl(260, 8%, 14%)",
      "transparent": "transparent",
    },
    fontFamily: {
      "poppins": ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
