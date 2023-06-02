# 服务

为了方便快速接入不同的后端系统，项目抽离了基本的服务接口 `src\service\index.ts`

开发重写一下几个接口并且对后台数据进行适配，返回统一的数据格式

参考 `mock\system\index.ts`

## 登录 LoginService

```json
{
  "code": 200,
  "token": "***you.token***"
}
```

## 登出 logOutService

```json
{
  "code": 200
}
```

## 用户信息查询 fetchUserInfoService

```json
{
  "userId": "1373767183417344",
  "userName": "测试",
  "email": "xxxxxx@xx.com",
  "phone": null,
  "tel": null,
  "permissions": ["demo:form:create", "demo:form:delete"]
}
```

## 路由查询 fetchRouterListService

```json
{
  "path": "/demo",
  "component": "#",
  "redirect": "/demo/menu1/menu1-1/menu1-1-1",
  "name": "Level",
  "meta": {
    "title": "formDemo.example",
    "icon": "svg-icon:message"
  },
  "children": [...]
}
```

## 国际化查询 fetchI18nService

```json
{
  "en": {
    "formDemo": {
      "input": "Input",
      "inputNumber": "InputNumber",
      "default": "Default",
      "icon": "Icon",
      "mixed": "Mixed"
    }
  }
}
```
