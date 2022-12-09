const { defineConfig } = require('@vue/cli-service')
const port = process.env.port || process.env.env_port || 8080
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: port,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_URL,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})