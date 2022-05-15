const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports={
  publicPath:"/gcauth_oauth",
  devServer: {
    proxy: "https://yuanshen.com/"
  }
}