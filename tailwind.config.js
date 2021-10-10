module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'titles' : 'Staatliches',
        'sharp' : 'Orbitron',
        'digital' : 'Courgette',
      },
      backgroundColor:{
        'starColor' : '#edd015',
      },
      // backgroundImage:{
      //   'body-bg': '#0f2027',
      //   'body-bg1': '#203a43',
      //   'body-bg2': '#2c5364',
      // },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
}
