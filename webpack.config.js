'use strict'

const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const del = require('del')
require('colors')

const appBase = path.resolve(__dirname, 'client')
const distBase = path.resolve(__dirname, 'dist')

del.sync(distBase)
console.log(`DELETE '${distBase}' successful!`.cyan + '\n')

const WebpackDevEnvironment = process.env.NODE_ENV === 'dev'
// const WebpackMockEnvironment = process.env.NODE_ENV === 'mock'

let WebpackConfig = {
  entry: {
    'app': path.resolve(appBase, 'index.js')
  },
  output: {
    path: distBase,
    publicPath: WebpackDevEnvironment ? '/' : '/dist/',
    filename: `javascripts/[name]-[${WebpackDevEnvironment ? 'hash' : 'chunkhash'}:8].min.js`,
    chunkFilename: `javascripts/[name]-[${WebpackDevEnvironment ? 'hash' : 'chunkhash'}:8].min.js`
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   use: 'source-map-loader'
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract('css-loader!postcss-loader')
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract('css-loader!postcss-loader!sass-loader')
      },
      {
        test: /\.png|\.gif|\.jpg|\.jpeg|\.ico$/,
        use: 'url-loader?limit=1024&name=images/[name]-[hash:8].[ext]'
      },
      {
        test: /\.eot|\.svg|\.ttf|\.woff|\.woff2$/,
        use: 'url-loader?limit=1024&name=fonts/[name]-[hash:8].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin(`stylesheets/[name]-[contenthash:8].min.css`),
    new HtmlWebpackPlugin({
      filename: path.resolve(distBase, 'index.html'),
      template: path.resolve(appBase, 'index.html'),
      inject: true,
      minify: {
        collapseWhitespace: true
      }
    }),
    new FriendlyErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.common.js'
    }
  },
  devtool: 'source-map',
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/images': 'http://localhost:3000',
      '/thumbnails': 'http://localhost:3000'
    },
    overlay: {
      warnings: true,
      errors: true
    }
  }
}

module.exports = WebpackConfig
