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
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: [
        '**/*.stories.*',
      ],
      rules: {
        'import/no-anonymous-default-export': RULE_OFF,
        'import/prefer-default-export': RULE_ERROR,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
    sourceType: 'module',
  },
  plugins: ['testing-library', 'import', 'react', '@typescript-eslint', 'sort-keys-fix'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [RULE_ERROR, {
      prefer: 'type-imports',
    }],
    '@typescript-eslint/indent': RULE_ERROR,
    '@typescript-eslint/no-floating-promises': RULE_OFF,
    'import/no-default-export': [RULE_ERROR],
    'import/no-extraneous-dependencies': RULE_OFF,
    'import/order': [RULE_ERROR, {
      groups: ['builtin', 'internal', 'external', 'index', 'sibling', 'parent', 'object', 'type'],
      pathGroups: [{
        group: 'builtin',
        pattern: 'react',
        position: 'before',
      }],
    }],
    'import/prefer-default-export': RULE_OFF,
    indent: RULE_OFF,
    'key-spacing': [RULE_ERROR, {
      afterColon: true,
    }],
    'newline-before-return': RULE_ERROR,
    'object-curly-newline': [RULE_ERROR, {
      ExportDeclaration: {
        minProperties: 2,
        multiline: true,
      },
      ImportDeclaration: 'never',
      ObjectExpression: 'always',
      ObjectPattern: {
        minProperties: 2,
        multiline: true,
      },
    }],
    'object-property-newline': [RULE_ERROR],
    'react/function-component-definition': RULE_OFF,
    'react/jsx-props-no-spreading': RULE_OFF,
    'react/react-in-jsx-scope': RULE_OFF,
    'react/require-default-props': RULE_OFF,
    'sort-keys': [RULE_ERROR, 'asc', {
      minKeys: 2,
    }],
    'sort-keys-fix/sort-keys-fix': RULE_ERROR,
  },
};
