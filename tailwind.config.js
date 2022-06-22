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
        fadeInOut: 'fadeInOut 2s ease-in forwards',
      },
      keyframes: {
        fadeInOut: {
          '0%': {
            transform: 'translateY(0rem)',
          },
          '20%': {
            transform: 'translateY(-6rem)',
          },
          '70%': {
            transform: 'translateY(-6rem)',
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
