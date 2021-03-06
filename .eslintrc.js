module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false,
      },
    ],
    'no-undef': 'off',
    'comma-dangle': [
      'error',
      'always',
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
