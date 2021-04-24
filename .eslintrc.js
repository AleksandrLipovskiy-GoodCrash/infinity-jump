module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  plugins: ['prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': ['error'],
  },
}
