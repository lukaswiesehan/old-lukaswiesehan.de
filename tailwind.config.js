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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
