import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'light-gray': '#F2F4FB',
      'dark-gray': '#5F6680',
      'dark-blue': '#181F3A',
      'dark-ash-blue': '#727C9E',
      'ash-blue': '#A9B4D9',
      blue: '#5790FF',
      'pop-blue': '#4F76FF',
      mint: '#68CBFF',
      purple: '#4F00FF',
      yellow: '#FEE500',
      'middle-blue-gray': '#B2BBDD',
      'light-blue-gray': '#DCE1F2',
      'bright-blue-gray': '#F2F4FB',
      'pale-blue': '#FCFCFF',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
