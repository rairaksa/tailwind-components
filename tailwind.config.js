/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      'dark': '#212121',
      'dark-secondary': '#ececec',
      'white': '#ffffff',
      'slate': '#eaeef6',
      'info': '#CEECFD',
      'info-dark': '#1778b0',
      'purple-primary': '#7784ee',
      'purple-secondary': '#d2d7ff'
    },
    extend: {},
    fontFamily: {
      'body': ['"Poppins"'],
    }
  },
  plugins: [],
}
