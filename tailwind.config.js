/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      'dark': '#212121',
      'dark-secondary' : '#717171',
      'border-secondary': '#ececec',
      'white': '#ffffff',
      'slate': '#eaeef6',
      'info': '#CEECFD',
      'info-dark': '#1778b0',
      'purple-primary': '#7784ee',
      'purple-secondary': '#d2d7ff',
      'blue-primary': '#08a0f7',
      'blue-secondary': '#f0f5fc',
      'green-primary': '#46bd84',
      'green-secondary': '#ebf6f1'
    },
    extend: {},
    fontFamily: {
      'body': ['"Poppins"'],
    }
  },
  plugins: [],
}
