const ESLintPlugin = require('eslint-webpack-plugin')

const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'minesweeper.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MyLibrary',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  plugins: [new ESLintPlugin({})]
}
