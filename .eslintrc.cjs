module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    // Possible Errors
    "no-console": ["warn", { allow: ["warn", "error"] }], // Allow console.warn/error, warn on console.log
    "no-debugger": "error",

    // Best Practices
    eqeqeq: ["error", "always"],
    curly: ["error", "all"],
    "no-var": "error",
    "prefer-const": "warn",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

    // Stylistic Choices (adjust to your preferences)
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
    "comma-dangle": ["error", "only-multiline"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "max-len": ["warn", { code: 120, ignoreComments: true }],

    // React Specific
    "react/react-in-jsx-scope": "off", // React 17+ does not require import React in scope
    "react/prop-types": "off", // If you don't use PropTypes (likely with TS or other validation)
    "react/jsx-uses-react": "off", // Same reason as above
    "react/jsx-uses-vars": "error",

    // React Hooks
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies

    // Accessibility - you can add eslint-plugin-jsx-a11y if you want further rules
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: "detect", // Automatically detect React version
    },
  },
  ignorePatterns: ["node_modules/", "dist/", "build/"],
};
