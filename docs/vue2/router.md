# 路由

项目路由配置存放于 `src/router/index.js`中。

因为路由是生成菜单关键，所以本项目中对路由提供了以下配置，方便开发者进行定制。

## 配置

``` js
  // 当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
  hidden: true // (默认 false)

  //当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
  redirect: 'noRedirect'

  // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
  alwaysShow: true

  name: 'router-name' // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
  meta: {
    title: 'title' // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name' // 设置该路由的图标，支持 svg-class，也支持 el-icon-x element-ui 的 icon
    noCache: true // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    breadcrumb: false //  如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
    affix: true // 如果设置为true，它则会固定在tags-view中(默认 false)

    // 当路由设置了该属性，则会高亮相对应的侧边栏。
    // 这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
    // 点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
    activeMenu: '/article/list'
  }
```

### 如何添加新配置

如果本项目中的路由配置项，满足不了你当前的开发工作，可以自行添加新的属性。

::: warning 注意

所有的路由项配置，都必须放在 `meta` 中。


### 多级路由

::: warning 注意事项

- 整个项目所有路由 `name` 不能重复
- 所有的多级路由最终都会转成二级路由，所以不能内嵌子路由
- 除了 layout 对应的 path 前面需要加 `/`，其余子路由都不要以`/`开头

:::

**示例**

``` js
{
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true },
      },
    ],
  },

```

### 动态路由

项目中固定路由可以在 `src/router/index.js` 中配置，但是大部分业务需求都是通过后台查询有权限的菜单数据动态生成路由信息。

可参考 `mock/role/routes.js` 文件中的菜单项模拟数据

``` js
 [
  {
    path: '/icon',
    component: 'Layout',
    children: [
      {
        path: 'index',
        component: 'views/icons/index',
        name: 'Icons',
        meta: { title: 'icons', icon: 'icon', noCache: true },
      },
    ],
  },

  {
    path: '/error',
    component: 'Layout',
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404',
    },
    children: [
      {
        path: '401',
        component: 'views/error-page/401',
        name: 'Page401',
        meta: { title: 'page401', noCache: true },
      },
      {
        path: '404',
        component: 'views/error-page/404',
        name: 'Page404',
        meta: { title: 'page404', noCache: true },
      },
    ],
  },

  {
    path: '/theme',
    component: 'Layout',
    redirect: 'noRedirect',
    children: [
      {
        path: 'index',
        component: 'views/theme/index',
        name: 'Theme',
        meta: { title: 'theme', icon: 'theme' },
      },
    ],
  },

  {
    path: 'external-link',
    component: 'Layout',
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: 'externalLink', icon: 'link' },
      },
    ],
  },

  { path: '*', redirect: '/404', hidden: true },
]
```

配置规则与普通路由一致，`component` 对应工程 `src/` 下的 Vue 组件路径，`icon` 对应 `src/icons/svg` svg 文件名

1.`src/router/helper/index.js` 中 `generateRoutes()` 进行更改。

```js
//使用后端菜单数据
export async function generateRoutes() {
  return new Promise((resolve, reject) => {
    getRoutes()
      .then((response) => {
        if (response.code !== 20000) {
          reject()
        } else {
          const { data } = response
          const routerList = data.filter(Boolean)
          const accessedRoutes = _.cloneDeep(routerList)
          fixRouteData(accessedRoutes)
          asyncImportRoute(accessedRoutes)
          resolve(accessedRoutes)
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}
```

### 外链

只需要将 `path` 设置为需要跳转的**HTTP 地址**即可。

```js
{
  path: '/external-link',
  component: Layout,
  meta: {
    name: 'ExternalLink'
  },
  children: [
    {
      path: 'https://github.com',
      meta: { name: 'Link', title: '文档' }
    }
  ]
}
```

## 图标

这里的 `icon` 配置，会同步到 **菜单**。

## 多标签页

标签页使用的是 `keep-alive` 和 `router-view` 实现，实现切换 `tab` 后还能保存切换之前的状态。

### 如何开启页面缓存

开启缓存有 2 个条件

1. 路由设置 `name`，且**不能重复**
2. 路由对应的组件加上 `name`，与路由设置的 `name` 保持一致


:::warning 注意

keep-alive 生效的前提是：需要将路由的 `name` 属性及对应的页面的 `name` 设置成一样。因为：

**include - 字符串或正则表达式，只有名称匹配的组件会被缓存** :::

### 如何让某个页面不缓存

可以将 `noCache` 配置成 `true` 即可关闭缓存或者组件不添加 `name` 属性。

```js
{
  path: 'workplace',
  component: () => import('@/views/Dashboard/Workplace.vue'),
  name: 'Workplace',
  meta: {
    title: 'router.workplace',
    noCache: true
  }
}
```
