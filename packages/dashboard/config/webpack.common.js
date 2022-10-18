const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss|\.css$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/, // imported .mjs or .js files to be processed by babel
        exclude: /node_modules/, // dont run babel on stuff in node modules directory
        use: {
          loader: 'babel-loader',
          options: {
            // preset-react process all JSX tags added to our app
            // preset-env transforms ES6+ down to ES5
            presets: ['@babel/preset-env'],
            // adds some additional code inside the browser (??)
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
}
