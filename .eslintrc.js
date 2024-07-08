module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      rules: {
        "linebreak-style": "off",
      },
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "prettier/prettier": [
      "error",
      {
        semi: false,
        endOfLine: "auto",
        singleQuote: false,
      },
    ],
  },
}
