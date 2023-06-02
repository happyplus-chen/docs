# 页面权限

本模板页面权限方式是通过后台来动态生成路由表(服务端方式控制)

具体参考[动态路由](router)

# 按钮权限

当前实现为

在获取用户详情 `getAuth` 接口返回用户权限信息数据

`src/store/modules/user.js`

``` js
    // 获取按钮权限，全局按钮权限
  getAuth({ commit, state }) {
    return new Promise((resolve, reject) => {
      getAuth(state.token)
        .then((response) => {
          const { data = [] } = response
          commit('SET_AUTH', data)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
```

参考 `mock/user.js`

``` js
const auth = ['ABCDEGAADFAIDHUTQOMKVJBHR', 'ADFAJDIMVLKJUAD', 'ADFAIJKVUHAUU']
  // user auth
  {
    url: '/vue-element-admin/user/auth',
    type: 'get',
    response: (_) => {
      return {
        code: 20000,
        data: auth,
      }
    },
  },
```

# 指令权限
封装了一个指令权限，能简单快速的实现按钮级别的权限判断。 v-auth

`src/directive/permissioni/ndex.js`

### 使用

```html
<template>
  <el-button v-auth="'ABCDEF'">按钮</el-button>
</template>
```
