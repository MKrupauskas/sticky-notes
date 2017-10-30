const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => {
  return {
    entry: ['./app/javascript/index.jsx', './app/styles/styles.scss'],
    output: {
      filename: 'app/dist/bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
          }),
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [new ExtractTextPlugin('app/dist/styles.css')],
  };
};
