# 构建&部署

::: tip 前言

由于是展示项目，所以打包后相对较大，如果项目中没有用到的插件，可以删除对应的文件或者路由，不引用即可，没有引用就不会打包。

:::

## 构建

项目开发完成之后，执行以下命令进行构建

- 开发环境 pnpm run build:dev ===> dist-dev
- 测试环境 pnpm run build:test ===> dist-test
- 生产环境 pnpm run build:pro ===> dist-pro

构建打包成功之后，会在根目录生成 dist-\* 文件夹，里面就是构建打包好的文件。

### 预览

发布之前可以在本地进行预览

**不能直接打开构建后的 html 文件**

使用项目自定的命令进行预览(推荐)

```bash
# 先打包在进行预览

# 预览开发环境
pnpm run preview:dev

# 预览测试环境
pnpm run preview:test

# 预览生产环境
pnpm run preview:pro
```

## 部署

::: danger 注意

项目默认是在生产环境开启 Mock，这样做非常不好，只是为了演示环境有数据，不建议在生产环境使用 Mock，而应该使用真实的后台接口。

:::

### 发布

简单的部署只需要将最终生成的静态文件，dist-\* 文件夹的静态文件发布到你的 cdn 或者静态服务器即可。

**部署时可能会发现资源路径不对，只需要修改对应的`.env.xxx`文件即可。**

```bash
# 根据自己路径来配置更改
VITE_BASE_PATH = /dist-dev/
```