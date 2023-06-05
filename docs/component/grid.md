# Grid 高级表格组件

基于`vxe-table`封装, 详细使用方法请参考[vxe-table](https://vxetable.cn)

## 基本使用

::: demo
grid/base
:::


## 数据源

配置`dataset`即可实现表格的远程请求与分页功能, 分页需要同时配置 `pagerConfig`，未配置时无分页，数据会一次性请求回来

::: demo
grid/dataset
:::

## 完整数据代理

<!-- `接到真实环境先设置下token  localStorage.setItem('token',token)` -->

通过自行实现 `proxyConfig.ajax` 来实现表格的增删改查功能

::: demo
grid/proxy
:::


## 编辑器

::: demo
grid/edit
:::


## 渲染器


## 单元格合并