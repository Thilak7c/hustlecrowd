/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      circular: ['CircularStd-Book', 'sans-serif'],
      circularBold: ['CircularStd-Medium', 'sans-serif'],
    },
  },
  plugins: [],
}
