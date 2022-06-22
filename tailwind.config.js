module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway'],
        kosugimaru: ['Kosugi Maru'],
        azeretmono: ['Azeret Mono'],
      },
      animation: {
        fadeOut: 'fadeOut 4s ease-out forwards',
      },
      keyframes: {
        fadeOut: {
          '0%': {
            transform: 'translateY(0rem)',
          },
          '50%': {
            transform: 'translateY(0rem)',
          },
          '100%': {
            transform: 'translateY(6rem)',
          },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
}
