const { defineConfig } = require('cypress');
const webpackConfig = require('@vue/cli-service/webpack.config');
const { devServer } = require('@cypress/webpack-dev-server');

console.log({ webpackConfig });

module.exports = defineConfig({
  // Component testing, JavaScript, Vue CLI, Webpack
  component: { devServer, devServerConfig: { webpackConfig } },
});
