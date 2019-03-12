const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
module.exports = {
  pages: {
    index: './example/main.js'
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./'))
      .set('@packages', resolve('packages'))
    //   .set('@components', resolve('example/components'))
    config.module
      .rule('js')
      .include
      .add(resolve('packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
