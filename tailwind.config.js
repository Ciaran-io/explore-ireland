// const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // fontFamily: {
    //   'display': ['Nunito', 'sans-serif'],
    //   'body': ['Nunito', 'sans-serif'],
    // },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      colors: {
        primary: '#011d38'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
