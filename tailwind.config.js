/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#31B0D5',
        'smoke':"#F5F5F5",
        'green':"#006400",
        'red':"#FF0000",
        'borders-c':"rgb(153, 151, 151)"
      }
    },
  },
  extend: {
  },
  plugins: [],
}
