module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'min': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'min': '1023px'},
      // => @media (min-width: 1001px) { ... }

      'md': {'max': '1001px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '700px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}

