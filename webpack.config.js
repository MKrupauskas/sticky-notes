module.exports = options => {
  return {
    entry: "./app/js/main.js",
    output: {
      filename: "app/bundle.js"
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true
              }
            }
          ]
        }
      ]
    }
  };
};
