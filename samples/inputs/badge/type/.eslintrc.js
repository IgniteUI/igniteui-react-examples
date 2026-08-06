module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: 2020, sourceType: "module", ecmaFeatures: { jsx: true } },
    settings: { react: { version: "999.999.999" } },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
    rules: {
        "default-case": "off", "no-undef": "off", "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off", "@typescript-eslint/no-explicit-any": "off",
        "react/react-in-jsx-scope": "off"
    }
};
