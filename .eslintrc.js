// ESLint configuration
// http://eslint.org/docs/user-guide/configuring

module.exports = {
  parser: 'babel-eslint',

  extends: ['airbnb-base', 'prettier'],

  plugins: ['prettier'],

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
    // Enable using private class methods without `this`.
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 0,

    // Forbid the use of extraneous packages.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 0,

    // When there is only a single export from a module, prefer using default export over named export.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 0,

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
