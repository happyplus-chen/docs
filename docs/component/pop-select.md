# PopSelect 弹出选择器

通用弹出面板上通过表格选择数据的组件

## 基础使用

配置 `gridConfig` 与 `options`即可，默认单选模式。`props` 属性配置组件值与输入框文字显示映射

:::demo
pop-select/base
:::

## 多选

`multi` 开启多选模式，交互为弹出面板上通过左右两个表格展示全量数据与选中数据

:::demo
pop-select/multi
:::


## 数据请求

配置`dataset` 自动开启数据请求功能

:::demo
pop-select/dataset
:::


## 表单配置

`formConfig` 配置查询表单，联合`dataset`可轻易实现源端查询选择功能

:::demo
pop-select/form
:::


## 分页配置

配置`pagerConfig`时开启分页功能，需联合`dataset`使用

:::demo
pop-select/pager
:::

## 动态设置

在一些场景需要动态根据接口请求数据来配置组件，以下示例为通过配置一个接口，动态设置表单，列信息，并且同时映射数据的示例。关键在`dataset.afterRequest`中做处理，并配置`proxyProps`映射关系

:::demo
pop-select/dynamic
:::



## 属性

| 属性 | 类型  | 默认值 | 说明  |
| --- | ---   | ---   | ---|
| modelValue v-model | Array | - | 绑定值 |
| title | string | - | 弹出框标题 |
| textSplit | string | / | 多选时显示文本分隔符 |
| options | Array | - | 静态数据源 |
| dataset | Dataset | - | 动态数据源 |
| readonly | boolean | false | 可编辑状态 |
| disabled | boolean | false | 禁用状态 |
| multi | boolean | false | 多选 |
| clearable | boolean | true | 文本狂显示清除按钮 |
| dialogClass | string | - | 弹出框自定义样式类名 |
| pagerConfig | Object | - | 分页配置 |
| placeholder | string | '' | 文本框占位提示 |
| props | object | `{label: 'label', value:'value'}` | 值与显示文本映射关系 |
| width | string | 800px | 弹出框宽度 |
| lazyLoad | boolean | false | 组件是否默认加载数据，设置为true时在点击弹出时才会加载数据 |
| alwaysLoad | boolean | false | 每次弹出时都请求数据 |


## 事件

| 属性 | 类型  | 默认值 | 说明  |
| --- | ---   | ---   | ---|
| change | string | - | 值发生变化 |
| close | string \| number \| boolean | - | 弹窗关闭 |
| open | boolean | - | 弹出 |
| search | boolean | - | 表单搜索 |

## 
