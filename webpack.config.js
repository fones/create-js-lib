const path = require('path')

const ESLintPlugin = require('eslint-webpack-plugin')

const moduleName = 'lib'
const outputFile = 'build.js'

const config = {
  entry: {
    [moduleName]: path.join(__dirname, '/src/index.js')
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: outputFile,
    library: '[name]',
    libraryTarget: 'var'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: [new ESLintPlugin()]
}

module.exports = config
