const { defineConfig } = require("@vue/cli-service");
// vue.config.js
module.exports = {
  // configureWebpack: {
  //   devtool: "source-map",
  //   },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',  // 后端 Node.js 服务地址
        changeOrigin: true,               // 是否修改请求头中的 origin 字段
        pathRewrite: {
          '^/api': ''  // 将请求路径中的 '/api' 前缀去掉，转发到 Node.js 后端
        },
        logLevel: 'debug',  // 显示代理日志
      }
    },
    open: true,  // 自动打开浏览器
    host: '0.0.0.0',  // 允许局域网访问
    port: 8088,  // 默认端口
  }
};
