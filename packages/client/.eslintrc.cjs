module.exports = {
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionstsconfigrootdir
    tsconfigRootDir: __dirname,
  },

  globals: {
    ga: "readonly", // Google Analytics
    cordova: "readonly",
    __statics: "readonly",
    __QUASAR_SSR__: "readonly",
    __QUASAR_SSR_SERVER__: "readonly",
    __QUASAR_SSR_CLIENT__: "readonly",
    __QUASAR_SSR_PWA__: "readonly",
    process: "readonly",
    Capacitor: "readonly",
    chrome: "readonly",
  },

  overrides: [
    // Pages and layouts are not used as components directly by developers,
    // so they don't necessarily need to have multi word component names
    {
      files: ["src/layouts/**/*.vue", "src/pages/**/*.vue"],
      rules: { "vue/multi-word-component-names": "off" },
    },
  ],
};
