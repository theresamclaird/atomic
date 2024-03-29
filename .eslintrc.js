module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:storybook/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/no-named-as-default': 'off',
    'no-restricted-exports': 'off',
    'react/forbid-prop-types': 'off',
    'linebreak-style': 0,
    'import/no-unresolved': [
      'error',
      {
        ignore: ['.svg'],
      },
    ],
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'object-curly-newline': 'off',
    'react/jsx-curly-newline': 'off',
    'no-confusing-arrow': 'off'
  },
  ignorePatterns: ['.plop-templates/**/*.{js,jsx}'],
};
