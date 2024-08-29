const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath:'./',
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': { 
        target: 'https://api.yujn.cn/api',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});
