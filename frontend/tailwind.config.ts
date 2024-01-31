import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#34219F',
          primaryLight: '#4935B7',
          primaryDark: '#281787',
          secondary: '#FF3E41',
          secondaryLight: '#FF5053',
          secondaryDark: '#DD2B2E',
        },
        text: {
          main: '#3E3E3E',
          light: '#9A9A9A',
          dark: '#292929',
        },
        background: {
          light: '#FAFAFA',
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
        container: '1320px',
      },
    },
  },
  plugins: [],
};
export default config;

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#34219F',
          primaryLight: '#4935B7',
          primaryDark: '#281787',
          secondary: '#FF3E41',
          secondaryLight: '#FF5053',
          secondaryDark: '#DD2B2E',
        },
        text: {
          main: '#3E3E3E',
          light: '#9A9A9A',
          dark: '#292929',
        },
        background: {
          light: '#FAFAFA',
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
        container: '1320px',
      },
    },
    screens: {
      md: '450px', // Minimum 450px ( tablet )
      lg: '900px', // Minimum 900px ( desktop )
    },
  },
  plugins: [],
};
