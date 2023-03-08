/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./components/*.{js,ts,jsx,tsx}', './pages/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        offBlack: '#343231',
        pomegranate: {
          50: '#fef4ee',
          100: '#fee7d6',
          200: '#fbcbad',
          300: '#f9a678',
          400: '#f57742',
          500: '#f2511b',
          600: '#e33913',
          700: '#bc2812',
          800: '#962216',
          900: '#791f15'
        }
      },
      screens: {
        xs: '480px'
        // => @media (min-width: 480px) { ... }
      }
    }
  },
  plugins: []
}
