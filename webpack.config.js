const path = require('path');

module.exports = {
  mode:'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "postcss-loader"
        },{
            loader: "sass-loader",
            options: {
                includePaths: ["absolute/path/a", "absolute/path/b"]
            }
        }]
      }
    ]
  }
};
