# 页面权限

本模板页面权限方式是通过后台来动态生成路由表(服务端方式控制)

具体参考[动态路由](router)

# 按钮权限

当前实现为

在获取用户详情 `fetchUserInfoService` 接口返回用户权限信息数据

`src\store\modules\system.ts`

```ts
    updateUserInfo(userInfo) {
      const { roles = [], permissions = [] } = userInfo
      if (Array.isArray(roles)) {
        const roleList = roles.map((item) => item.value)
        this.setRoleList(roleList)
        this.setPermissions(permissions)
      } else {
        userInfo.roles = []
        this.setRoleList([])
        this.setPermissions([])
      }
      this.setUserInfo(userInfo.data)
    }
```

参考 `mock\system\index.ts`

```ts

  // 用户信息
  {
    url: '/getInfo',
    method: 'get',
    timeout,
    response: ({ headers }) => {
      return {
        code: headers.authorization ? result_code : 401, //模拟未登录
        message: '处理成功',
        data: {
          userId: '1373767183417344',
          userName: 'CHENJIAXING',
          perNo: 'CHENJIAXING',
          email: 'xxxxxx@xx.com',
          phone: null,
          tel: null,
          permissions: ['demo:form:create', 'demo:form:delete']
        }
      }
    }
  },
```

页面通过 `v-hasPermi` 指令控制元素权限

`src\views\demo\Menu12.vue`

```html
<el-row class="pt-20px">
  <el-button v-hasPermi="['demo:form:test']">无权限</el-button>
  <el-button v-hasPermi="['demo:form:create']" type="primary">有权限</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</el-row>
```
