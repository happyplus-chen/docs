# 数据 mock&联调

## 开发环境

如果前端应用和后端接口服务器没有运行在同一个主机上，你需要在开发环境下将接口请求代理到接口服务器。

如果是同一个主机，可以直接请求具体的接口地址。

### 跨域设置

在 `vue.config.js` 配置文件中，提供了 server 的 proxy 功能，用于代理 API 请求。
现在默认情况下本地的请求会代理到http://localhost:${port}/mock下，如果你想调整为自己的 mock 地址可以修改 proxy

``` js
proxy: {
  // change xxx-api/login => mock/login
  // detail: https://cli.vuejs.org/config/#devserver-proxy
  [process.env.VUE_APP_BASE_API]: {
    target: `http://localhost:${port}/mock`,
    changeOrigin: true,
    pathRewrite: {
      ['^' + process.env.VUE_APP_BASE_API]: ''
    }
  }
},

after: require('./mock/mock-server.js')
```
