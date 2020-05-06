module.exports = {
  devServer: {
    proxy: {
      '/weibo': {
        target: 'http://manhua.weibo.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/weibo': ''
        }
      }
    }
  }
}
