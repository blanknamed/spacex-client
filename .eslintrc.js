const RULE_ERROR = 'error';

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'xo',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'testing-library',
    'import',
    'react',
    '@typescript-eslint',
  ],
  rules: {
    indent: [RULE_ERROR, 2],
    'object-curly-spacing': [RULE_ERROR, 'always'],
    'import/no-default-export': [RULE_ERROR],
    'newline-before-return': [RULE_ERROR],
    'object-curly-newline': [RULE_ERROR,
      {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true, minProperties: 3,
        },
      }],
  },
};
