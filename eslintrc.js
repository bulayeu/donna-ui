// Rules automatically generated and merged by eslint-picker based on team consensus
// Don't change without consulting the team! See https://docs.google.com/spreadsheets/d/1XA_KS_PFe9D35gYw0W_lk0Byh7l78dp-hfQpVyZ2Q6c for details

module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb"],
  plugins: ["babel", "react", "import"],
  env: {
    browser: true
  },
  globals: {
    __DEV__: false,
    __TEST__: false,
    __PROD__: false,
    __COVERAGE__: false,
    define: false,
    _: false,
    $: false,
    WebFont: false
  },
  rules: {
    "key-spacing": "off",
    indent: ["error", 4],
    "jsx-quotes": ["error", "prefer-single"],
    "max-len": [
      "error",
      140,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    "object-curly-spacing": ["error", "always"],
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "comma-dangle": [
      "warn",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline"
      }
    ],
    "no-multi-spaces": "off",
    "prefer-destructuring": "off",
    "no-plusplus": "off",
    "accessor-pairs": "warn",
    "no-alert": "error",
    "no-eq-null": "error",
    "no-fallthrough": "warn",
    "no-magic-numbers": "off",
    "no-param-reassign": "off",
    "no-unused-expressions": "off",
    "prefer-promise-reject-errors": "off",
    "no-extra-boolean-cast": "off",
    "no-prototype-builtins": "off",
    "global-require": "off",
    "no-mixed-requires": "off",
    "capitalized-comments": "off",
    "func-names": "off",
    "max-lines": [
      "warn",
      {
        max: 800,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    "no-nested-ternary": "warn",
    "no-underscore-dangle": "off",
    "one-var": "off",
    "space-before-function-paren": ["error", "always"],
    "no-use-before-define": [
      "warn",
      {
        functions: false,
        classes: true,
        variables: true
      }
    ],
    "class-methods-use-this": "off",
    "react/jsx-props-no-multi-spaces": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/sort-comp": [
      "warn",
      {
        order: ["static-methods", "lifecycle", "everything-else", "rendering"],
        groups: {
          rendering: ["/^render.+$/", "render"]
        }
      }
    ]
  },
  settings: {
    "import/resolver": ["webpack", "node"]
  }
};
