import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'var(--font-poppins)',
        'dm-serif-text': 'var(--font-dm-serif-text)',
      },
      colors: {
        primary: '#6D18EF',
        secondary: '#186EF2',
        white: '#ffffff',
        black: '#000000',
        'app-100': '#272727',
        'app-200': '#5c5959',
        'app-300': '#969393',
        'app-400': '#c9c7c7',
        'app-500': '#dddddd',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-app': 'linear-gradient(to right, #186EF2, #6D18EF)',
        'gradient-app-hover': 'linear-gradient(to left, #186EF2, #6D18EF)',
        'gradient-app-vertical': 'linear-gradient(to bottom, #186EF2, #6D18EF)',
        'gradient-app-diagonal': 'linear-gradient(135deg, #186EF2, #6D18EF)',
      },
    },
  },
  plugins: [],
};
export default config;
