import { addDynamicIconSelectors } from '@iconify/tailwind';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        gs: colors.neutral,
        primary: colors.blue,
        danger: colors.red
      }
    }
  },
  plugins: [addDynamicIconSelectors()]
};

export default config;
