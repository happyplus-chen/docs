# Table 表格组件



## 基础使用

:::demo 
table/base
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| dataset | Dataset[] \| string[] | - | 数据源配置
| columns | Column | - | Column 配置
| pagerConfig | boolean | - | 分页配置



### columns

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 


## 插槽

| 名称            | 插槽作用域 |   说明                                   | 
| -----------    |   ------- | -----------------------------  |
| default        | `{item,index}` |  自定义模板           | 