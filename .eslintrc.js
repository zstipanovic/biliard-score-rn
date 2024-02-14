module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['simple-import-sort', 'import'],
  rules: {
    curly: ['error', 'multi-line'],
    'react-native/no-inline-styles': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
