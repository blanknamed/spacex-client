const RULE_OFF = "off";
const RULE_ERROR = "error";
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "xo",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.eslint.json"],
  },
  plugins: [
    "testing-library",
    "import",
    "react",
    "@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/indent": [RULE_ERROR, 2],
    "@typescript-eslint/member-delimiter-style": [RULE_ERROR],
    "@typescript-eslint/consistent-type-imports": [RULE_ERROR],
    "@typescript-eslint/quotes": [RULE_ERROR],
    "@typescript-eslint/consistent-indexed-object-style": [
      RULE_ERROR,
      "record",
    ],
    "@typescript-eslint/consistent-type-definitions": [RULE_ERROR, "interface"],
    "import/no-default-export": [RULE_ERROR],
    "import/newline-after-import": [RULE_ERROR, {
      count: 1,
    }],
    "newline-before-return": [RULE_ERROR],
    "object-curly-newline": [RULE_ERROR, {
      ObjectExpression: "always",
      ObjectPattern: {
        multiline: true,
      },
      ImportDeclaration: "never",
      ExportDeclaration: {
        multiline: true, minProperties: 3,
      },
    }],
    "object-curly-spacing": [RULE_ERROR, "always"],
    "react/react-in-jsx-scope": RULE_OFF,
    "react/self-closing-comp": [RULE_ERROR], "react/jsx-curly-brace-presence": [RULE_ERROR, {
      props: "never", children: "always",
    }],
    indent: RULE_OFF,
    quotes: RULE_OFF,
    "no-multiple-empty-lines": [RULE_ERROR, {
      max: 1, maxEOF: 0,
    }],
  },
};
