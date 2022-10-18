module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // imported .mjs or .js files to be processed by babel
        exclude: /node_modules/, // dont run babel on stuff in node modules directory
        use: {
          loader: 'babel-loader',
          options: {
            // preset-react process all JSX tags added to our app
            // preset-env transforms ES6+ down to ES5
            presets: ['@babel/preset-react', '@babel/preset-env'],
            // adds some additional code inside the browser (??)
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
}
