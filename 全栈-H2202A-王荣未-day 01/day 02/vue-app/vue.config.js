const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: "https://www.thenewstep.cn/v1/vue3system",
        changOrigin: true
      }
    }
  }
})
