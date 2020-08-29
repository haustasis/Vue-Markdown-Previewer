module.exports = {
  transpileDependencies: ['@inkline/inkline'],
  publicPath:
    process.env.NODE_ENV === 'production' ? '/vue-markdown-previewer/' : '/',
};
