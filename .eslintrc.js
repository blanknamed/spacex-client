const RULE_OFF = 'off';
const RULE_ERROR = 'error';

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: [
    'testing-library',
    'import',
    'react',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/indent': RULE_ERROR,
    '@typescript-eslint/no-floating-promises': RULE_OFF,
    'import/no-default-export': [RULE_ERROR],
    'import/prefer-default-export': RULE_OFF,
    'import/no-extraneous-dependencies': RULE_OFF,
    indent: RULE_OFF,
    'react/react-in-jsx-scope': RULE_OFF,
    'react/require-default-props': RULE_OFF,
    'react/function-component-definition': RULE_OFF,
    'react/jsx-props-no-spreading': RULE_OFF,

  },
};
