# SelectPop 弹窗选择

依赖组件：`jgSingleSelectPop `、`jgSingleSelectPop `


## 基础用法  
单选或者多选

:::demo 
select-pop/base
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| model-value / v-model | boolean | - | 是否显示 Dialog
| multiple | boolean | false | 是否多选
| formData | object | - | 搜索表单数据
| selectParam | object | - | 


### selectParam 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| selectCode | string | - | 表单配置和表格列配置key，用于请求接口的传参
| selectProp | string | - | 选中时返回行对应的列字段
| dialogTitle | string | - | 弹窗标题

## Events

| 事件名            | 参数  |   说明                                   | 
| -----------    | ------- | -----------------------------  |
| select    | val |  双击选中事件        |


## jg-input 属性
| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| selectPopParam | object | - |  弹窗选择参数
| ...... | -   | - | [ElInput 属性](https://element-plus.org/zh-CN/component/input.html#attributes)

## selectPopParam 属性
| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| multiple | boolean | false |  是否多选
| formData | object | - |  搜索表单数据
| selectParam | object | - |  


## jg-input Events
| 事件名            | 参数  |   说明                                   | 
| -----------    | ------- | -----------------------------  |
| confirmSelect    | val, rows |  选中时的事件  |
| ...... | -  | [ElInput Events](https://element-plus.org/zh-CN/component/input.html#events)



