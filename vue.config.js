const isProductionBuild = process.env.NODE_ENV === 'production';

const publicPath = isProductionBuild
  ? './' // production
  : '/'; // dev

module.exports = {
  publicPath,

  transpileDependencies: ['quasar'],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
    },
  },

  chainWebpack(config) {
    config.plugins.delete('prefetch');
  },

  configureWebpack: {
    devtool: 'none',
  },

  devServer: {
    https: false,
    // proxy: {},
  },
};
