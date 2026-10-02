module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: 2020, sourceType: "module", ecmaFeatures: { jsx: true } },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
    rules: {
      "no-undef": "off", "no-unused-vars": "off", "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off", "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-non-null-assertion": "off"
    }
};
