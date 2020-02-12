module.exports = {
  modules: true,
  plugins: {
    'postcss-modules': {
      globalModulePaths: [
        'src/style/config.css',
        'src/style/style.css',
      ]
    }
  }
};
