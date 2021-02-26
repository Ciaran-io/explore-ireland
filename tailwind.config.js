module.exports = {
  purge: {
    enabled: false,
    content: ['./index.html', 'src/main.js'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  // extends theme fonts available
  theme: {
    fontFamily: {
      display: ['Nunito', 'sans-serif'],
      body: ['Nunito', 'sans-serif'],
    },
    // add min width sizes
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    // extends tailwind colors
    extend: {
      colors: {
        primary: '#011d38',
      },
      // extends tailwind spacing width
      spacing: {
        120: '30rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
