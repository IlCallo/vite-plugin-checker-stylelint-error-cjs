module.exports = {
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionstsconfigrootdir
    tsconfigRootDir: __dirname,
  },

  env: {
    node: true,
    jest: true,
  },
};
