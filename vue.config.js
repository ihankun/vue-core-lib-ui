// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  pages: {
    index: {
      entry: 'example/main.js'
    }
  },
  // chainWebpack(config) {
  //   // 排除icons目录中svg文件处理
  //   config.module.rule('svg').exclude.add(resolve('./src/icons/svg')).end()
  //   // 设置svg-sprite-loader处理icons目录中的svg
  //   config.module.rule('icons').test(/\.svg$/).include.add(resolve('src/icons/svg')).end().use('svg-sprite-loader').loader('svg-sprite-loader').options({ symbolId: 'icon-[name]' }).end()
  //   config.plugin('html').use(HtmlWebpackPlugin).tap(args => {
  //     // args[0].title = '管理系统'
  //     return args
  //   })
  // },
  css: {
    extract: true,
    loaderOptions: {
      sass: {
        prependData: '@import "lib/style/index.scss";'
      }
    }
  },
  configureWebpack: {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  }
}
