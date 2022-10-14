/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          50: '#F2FAF4',
          100: '#E5F5E9',
          150: '#D9F0DE',
          200: '#CCEBD3',
          300: '#B2E1BD',
          400: '#99D7A7',
          500: '#7FCD91',
          600: '#68A977',
          700: '#50855D',
          800: '#396242',
          850: '#2D5035',
          900: '#213E28',
          950: '#162C1B',
          1000: '#0A1A0E',
        },
        secondary: {
          50: '#D0CDCD',
          100: '#C2BEBE',
          150: '#B3AFAF',
          200: '#A5A0A0',
          300: '#878282',
          400: '#6A6464',
          500: '#4D4646',
          600: '#3E3838',
          700: '#2E2A2A',
          800: '#1F1C1C',
          850: '#171515',
          900: '#0F0E0E',
          950: '#080707',
          1000: '#000000',
        }
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
