module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  root: true,

  // .eslintignore can't be extended as the same way as .eslintrc.js, so we put the common patterns here
  ignorePatterns: ["dist", "node_modules", ".eslintrc.cjs"],

  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionstsconfigrootdir
    tsconfigRootDir: __dirname,
  },

  extends: ["coralloy" /*, "coralloy/vue-i18n"*/],

  // add your custom rules here
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": [
      process.env.NODE_ENV === "production" ? "error" : "warn",
      { allow: ["error"] },
    ],

    // This rule must be updated as `vue` dependency is, to match the used Vue version
    "vue/no-unsupported-features": ["error", { version: "3.2.0" }],
  },

  settings: {
    "import/resolver": {
      typescript: {
        project: ["./tsconfig.json", "packages/*/tsconfig.json"],
      },
    },
  },
};
