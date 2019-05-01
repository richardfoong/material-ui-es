const path = require('path');
const appConfig = require('../webpack.config');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  const isProduction = mode === 'PRODUCTION';
  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      !isProduction && {
        loader: 'babel-loader',
        options: { plugins: ['react-hot-loader/babel'] }
      },
      'ts-loader'
    ].filter(Boolean)
  });

  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');
  config.resolve.alias = Object.assign(config.resolve.alias, {
    app: path.resolve(__dirname, '..', 'src', 'app'),
    '@ap-components': path.resolve(__dirname, '..', 'src', 'app', 'components'),
    '@ap-actions': path.resolve(__dirname, '..', 'src', 'app', 'actions'),
    '@ap-containers': path.resolve(__dirname, '..', 'src', 'app', 'containers'),
    '@ap-reducers': path.resolve(__dirname, '..', 'src', 'app', 'reducers'),
    '@ap-utils': path.resolve(__dirname, '..', 'src', 'app', 'utils'),
    '@ap-icons': path.resolve(__dirname, '..', 'src', 'app', 'icons')
  });

  // Return the altered config
  return config;
};
