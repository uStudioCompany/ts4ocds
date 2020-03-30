require('ts-node').register();

exports.createPages = require('./src/lib/create-pages').createPages;

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
      ],
    },
  });
};
