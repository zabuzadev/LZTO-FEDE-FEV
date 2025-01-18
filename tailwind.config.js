/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./gracias/**/*.{html,js}",
    "./registro-mc/**/*.{html,js}",
    "./registro-v1/**/*.{html,js}",
    "./registro-v2/**/*.{html,js}",
    "*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6A00',
        'secondary': '#D65E09',
        'fade-green': '#00A91F',
        'fade-terroso': '#1D0806'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
    },
  },
  },
  plugins: [

    ]
}

