import defaultTheme from 'tailwindcss';
console.log('defaultTheme...', defaultTheme);
const defaultTheme = require('tailwindcss/defaultTheme');

const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      nunito: ['var(--font-nunito)'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-900': withOpacity('--color-primary-900'),
        'primary-700': withOpacity('--color-primary-700'),
        'primary-500': withOpacity('--color-primary-500'),
        'primary-400': withOpacity('--color-primary-400'),
      },
      borderColor: {
        'primary-900': withOpacity('--color-primary-900'),
        'primary-700': withOpacity('--color-primary-700'),
        'primary-500': withOpacity('--color-primary-500'),
        'primary-400': withOpacity('--color-primary-400'),
      },
    },
  },

  plugins: [],
};
