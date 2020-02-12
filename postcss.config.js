module.exports = {
  modules: true,
  plugins: {
    'postcss-modules': {
      globalModulePaths: [
        'src/style/emoji.css',
        'src/style/config.css',
        'src/style/reset.css',
        'src/style/reveal.scss',
        'src/style/style.css',
        'src/style/white.css',
      ]
    }
  }
};
