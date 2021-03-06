module.exports = {
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '812px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
  },
  plugins: [],
}
