# Select 下拉框

快速的数据化配置一个下拉框，常用于搭配数据表单。

依赖组件： `ElSelect` `ElOption` `ElOptionGroup`，需先全局注册。

## 基础使用

支持直接配置`options`数组
:::demo
select/base
:::

## 分组配置

:::demo
select/group
:::

## 数据源

通过配置 `dataset` 属性，组件会制动根据配置发起数据请求并绑定。通过`props`属性可修改数据显示与绑定键值

:::demo
select/dataset
:::

## 远程搜索

配置`dataset`，并将`remote`设置为`true`，组件自动开启远程搜索功能

:::demo
select/suggest
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  |
| --- | ---   | ---   | --- |
| options | OptionProps[] \| string[] | - | option 配置|
| props | `{label: string, value: string}` | - | OptionProps 配置别名|
| dataset | Dataset |  | 数据源 |
| lazyLoad | boolean | false | 在配置数据源时，组件是否默认加载数据，设置为false时，当下拉面板弹出时才会请求数据 |
| ...... | -  | - | [ElSelect 属性](https://element-plus.gitee.io/zh-CN/component/select.html#select-%E5%B1%9E%E6%80%A7)|

### 选项配置

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | ---
| label | string | - | 标签
| value | string \| number \| boolean \| object | - | 选中值
| disabled | boolean | - | 是否禁用
| options | OptionProps[] | - | 分组配置

## 方法

| 名称            | 参数  |   说明       |
| -----------    | ------- | -----------------------------  |
| focus, blur | - |   [ElSelect 方法](https://element-plus.gitee.io/zh-CN/component/select.html#select-%E6%96%B9%E6%B3%95)

## 插槽

| 名称            | 插槽作用域 |   说明                                   |
| -----------    |   ------- | -----------------------------  |
| default       | `{item,index}` |  自定义模板           |
| prefix        | - | 组件头部内容           |
| empty        | - |  无选项时的列表           |
