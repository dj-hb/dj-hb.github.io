const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8090,
  },
  outputDir: path.resolve(__dirname, '../../docs'),
})
