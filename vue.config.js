module.exports = {
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-',
      outFile: "src/router/routes.js",
    }
  },
  chainWebpack: config =>{
    config.plugin('html')
      .tap(args => {
        args[0].title = "铜陵经济开发区智慧园区安全环保监测系统";
        return args;
      })
  }
}
