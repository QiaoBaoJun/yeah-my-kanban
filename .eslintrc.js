module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': ['error', { skipUndeclared: true }],
    'react/no-unknown-property': ['error', { ignore: ['css'] }]
  }
}
