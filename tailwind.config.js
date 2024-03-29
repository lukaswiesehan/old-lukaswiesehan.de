const { m } = require('framer-motion')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
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
      'black': colors.black,
      'cool-gray': colors.coolGray,
      'blue-gray': colors.blueGray,
      'warm-gray': colors.warmGray,
      'true-gray': colors.trueGray,
      'teal': colors.teal
    },
    extend: {
      colors: {
        'warm-gray': {
          '250': '#E0DEDD'
        }
      },
      cursor: {
        'grab': 'grab',
        'grabbing': 'grabbing'
      },
      maxHeight: {
        '4/5-screen': '80vh'
      },
      height: {
        'screen-p-8': 'calc(100vh - 2rem)'
      },
      backgroundImage: theme => ({
        'footer-background-sm': "url('/img/backgrounds/footer_background_sm.svg')",
        'footer-background': "url('/img/backgrounds/footer_background.svg')",
        'footer-background-sm-dark': "url('/img/backgrounds/footer_background_sm_dark.svg')",
        'footer-background-dark': "url('/img/backgrounds/footer_background_dark.svg')",
        'header-background-sm': "url('/img/backgrounds/header_background_sm.svg')",
        'header-background-md': "url('/img/backgrounds/header_background_md.svg')",
        'header-background-lg': "url('/img/backgrounds/header_background_lg.svg')",
        'header-background-sm-dark': "url('/img/backgrounds/header_background_sm_dark.svg')",
        'header-background-md-dark': "url('/img/backgrounds/header_background_md_dark.svg')",
        'header-background-lg-dark': "url('/img/backgrounds/header_background_lg_dark.svg')"
      }),
      transitionProperty: {
        'bg': 'background-image'
      }
    }
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      scale: ['group-hover'],
      display: ['dark'],
      backgroundImage: ['dark', 'hover'],
      cursor: ['active']
    },
    lineClamp: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
