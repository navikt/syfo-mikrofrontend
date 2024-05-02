import parser from "@typescript-eslint/parser";

module.exports = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: parser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    env: {
      browser: true,
    },
    ignorePatterns: [".eslintrc.*", "**/dist/*.js", "vite.config.ts", "/server/server.js", "plugin:react/recommended"],
    plugins: ["@typescript-eslint", "jsx-a11y", "react"],
    configs: [
      {
        name: "eslint:recommended",
      },
      {
        name: "plugin:@typescript-eslint/eslint-recommended",
      },
      {
        name: "plugin:@typescript-eslint/recommended",
      },
      {
        name: "plugin:jsx-a11y/recommended",
      },
      {
        name: "plugin:react/recommended",
      },
    ],
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
