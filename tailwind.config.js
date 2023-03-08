/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./components/*.{js,ts,jsx,tsx}', './pages/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#f2511b'
      },
      screens: {
        xs: '480px'
        // => @media (min-width: 480px) { ... }
      }
    }
  },
  plugins: []
}
