# 服务

为了方便快速接入不同的后端系统，项目抽离了基本的服务接口, 使用了mock

开发重写一下几个接口并且对后台数据进行适配，返回统一的数据格式

参考 `mock/user.js`

## 登录 login

```json
{
  "code": 200,
  "token": "***you.token***"
}
```

``` js
export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data,
  })
}
```

## 登出 logout

```json
{
  "code": 200,
  "data": "success",
}
```

## 用户信息查询 getInfo

```json
{
  "code": 20000,
  "data": {
    "roles": ["admin"],
    "introduction": "I am a super administrator",
    "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    "name": "Super Admin",
  },
}
```

## 路由查询 getRoutes

```json
{
  "code": 20000,
  "data": {
    "path": "/icon",
    "component": "Layout",
    "children": [
      {
        "path": "index",
        "component": "views/icons/index",
        "name": "Icons",
        "meta": { "title": "icons", "icon": "icon", "noCache": true },
      },
    ],
  }
}
```

## 按钮权限 getAuth
``` json
{
  "code": 20000,
  "data": ['ABCDEGAADFAIDHUTQOMKVJBHR', 'ADFAJDIMVLKJUAD', 'ADFAIJKVUHAUU'],
}
```

## 国际化查询 getLangConfig

```json
{
  "code": 20000,
  "data": {
    "page": {
      "documentation": "文档",
    },
}
```
