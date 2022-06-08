module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended', // tailwind用eslint
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'google',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'tailwindcss'],
  rules: {
    'semi': ['error', 'never'],
    'require-jscdoc': ['off'],
    'spaced-comment': ['off'],
    '@next/next/no-img-element': 'off',
    'require-jsdoc': 0,
  },
}
