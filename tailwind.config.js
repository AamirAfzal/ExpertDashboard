module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto'],
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'c1': '#E94D8A',
      'c2': '#4D5FFA',
      'c3': '#745BDF',
      'c4': '#E44E8F',
      'c5': '#E94E8B',
      'c6': '#E94D8B',
      'c7': '#775BDE',
      'c8': '#BDB2DA',
      'c9': '#E5C7F3',
      'c10':'#745BDF',
      'c11':'#E44E8F',
      'danger': '#e3342f',
     }),
     textColor: {
       'white':'#FFFFFF',
      'c12':'#00C287',
      'c13':'#E72D04',
      'g':'#868B93'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
