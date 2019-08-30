// const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  publicPath: '/',
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/sw/**/*',
          to: './[name].[ext]',
          ignore: [ '.*', ],
          toType: 'template',
        },
      ]),
      // new SWPrecacheWebpackPlugin({
      //   cacheId: 'simple-pwa',
      //   filename: 'sw.js',
      //   templateFilePath: path.resolve(__dirname, 'src/sw/service-worker.tmpl'),
      //   staticFileGlobs: ['dist/**/*.{js,html,css,png,jpg,jpeg,gif,sv}'],
      //   staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],
      //   minify: true,
      //   stripPrefix: 'dist/',
      // })
    ],
  },
}
