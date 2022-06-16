// https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    settings: {
        react: {
            version: "999.999.999" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      "default-case": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-extend-native": "off",
      "no-throw-literal": "off",
      "no-useless-concat": "off",
      "no-mixed-operators": "off",
      "no-prototype-builtins": "off",
      "prefer-const": "off",
      "prefer-rest-params": "off",
      "jsx-a11y/alt-text": "off",
      "jsx-a11y/iframe-has-title": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-useless-constructor": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/prefer-namespace-keyword": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    "overrides": [
      {
        "files": ["*.ts", "*.tsx"],
        "rules": {
            "default-case": "off",
            "no-var": "off",
            "no-undef": "off",
            "no-unused-vars": "off",
            "no-extend-native": "off",
            "no-throw-literal": "off",
            "no-useless-concat": "off",
            "no-mixed-operators": "off",
            "no-prototype-builtins": "off",
            "prefer-const": "off",
            "prefer-rest-params": "off",
            "jsx-a11y/alt-text": "off",
            "jsx-a11y/iframe-has-title": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-useless-constructor": "off",
            "@typescript-eslint/no-use-before-define": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/interface-name-prefix": "off",
            "@typescript-eslint/prefer-namespace-keyword": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off"
        }
      }
    ]
  };