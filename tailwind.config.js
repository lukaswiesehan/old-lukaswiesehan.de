const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Lato', 'sans-serif']
    },
    fontWeight: {
      'normal': 400,
      'bold': 900
    },
    colors: {
      'white': colors.white,
      'cool-gray': colors.coolGray,
      'blue-gray': colors.blueGray,
      'teal': colors.teal
    },
    extend: {
      backgroundImage: theme => ({
        'footer-background-sm': "url('/img/footer_background_sm.svg')",
        'footer-background': "url('/img/footer_background.svg')",
        'header-background-sm': "url('/img/header_background_sm.svg')",
        'header-background-md': "url('/img/header_background_md.svg')",
        'header-background-lg': "url('/img/header_background_lg.svg')"
      })
    }
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
  plugins: [],
}
