export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {
      browsers: ['last 2 versions', 'not dead', 'not op_mini all']
    }
  }
};
