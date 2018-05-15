// ESLint configuration
// http://eslint.org/docs/user-guide/configuring

module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb-base',
    'prettier',
  ],

  plugins: [
    'prettier'
  ],

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },

  env: {
    browser: true,
    es6: true,
  },

  rules: {
    // Enforce that class methods utilize `this`.
    // Except polymer private method `_render`.
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: ['_render']
      },
    ],

    // "import/first": 0,

    // Recommend not to leave any console.log in your code.
    // Use console.error, console.warn and console.info instead.
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    // Polymer using dangling underscores to indicate "private" members of objects.
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 0,

    // ESLint plugin for prettier formatting.
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 'error',
  },
};
