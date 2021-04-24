module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'plugin:proposal/recommended'],
  plugins: ['prettier', 'jest', 'proposal'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': ['error'],
    'proposal/class-property-space-infix-ops': 'error',
  },
}
