module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        entryRightSide: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        exitRightSide: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: '20%' },
        },
        fadeOut: {
          from: { opacity: '20%' },
          to: { opacity: 0 },
        },
      },
      animation: {
        entryRightSide: 'entryRightSide .3s',
        exitRightSide: 'exitRightSide .3s',
        fadeIn: 'fadeIn .3s',
        fadeOut: 'fadeOut .3s',
      },
      colors: {
        brand: {
          primary: '#34219F',
          primaryDark: '#281787',
          primaryLight: '#503DB9',
          secondary: '#EA361B',
          secondaryLight: '#D62E15',
        },
        text: {
          main: '#3E3E3E',
          light: '#9A9A9A',
          dark: '#292929',
        },
        background: {
          light: '#F9F9F9',
          softLight: '#E9E9E9',
          dark: '#1B1B1B',
          softDark: '#5F5F5F',
        },
        notify: {
          success: '#6DB95A',
          error: '#DD5E5E',
          warning: '#D89614',
          info: '#177DDC',
        },
      },
      maxWidth: {
        // container: '1320px',
        container: '1252px',
      },
    },
    screens: {
      md: '450px', // Minimum 450px ( tablet )
      lg: '900px', // Minimum 900px ( desktop )
    },
  },
  plugins: [],
};
