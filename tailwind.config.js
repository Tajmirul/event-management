module.exports = {
  content: [
    './src/**/*.css',
    './*.html'
  ],
  theme: {
    "fontFamily": {
      "Rubik": ["Rubik", "sans-serif"],
      "Ubuntu": ["Ubuntu", "serif"],
    },
    extend: {
      colors: {
        primary: {
          100: '#cce9da',
          200: '#b3dfc7',
          300: '#99d4b4',
          400: '#80c9a2',
          500: '#66be8f',
          600: '#4db37c',
          700: '#33a969',
          800: '#1a9e57',
          900: '#009344',
        },
      },
    },
  },
  plugins: [],
}
