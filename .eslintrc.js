module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  settings: {},
  rules: {
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_$',
      },
    ],
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    quotes: ['error', 'single'],
    radix: 'off',
    'padded-blocks': 'off',
    'react/function-component-definition': 'off',
    'import/no-unresolved': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-multiple-empty-lines': 'off',
    'linebreak-style': ['warn', 'unix'],
    'consistent-return': 'off',
    'react/jsx-sort-props': ['error', {
      callbacksLast: true,
      shorthandFirst: true,
      noSortAlphabetically: false,
      reservedFirst: true,
    }],
  },
};
