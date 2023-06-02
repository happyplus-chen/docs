# NumberRange 数值范围

数值范围输入组件, 用于表单输入数值范围

依赖组件：`ElInput` 需先全局注册。

## 基础用法

:::demo 
number-range/base
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| v-model | number[] | - | 绑定值	
| disabled | boolean | false | 是否禁用	
| precision | number | 0 | - | 数值精度	


## 方法

| 名称            | 类型  |   说明                                   | 
| -----------    | ------- | -----------------------------  |
| blurfrom    |  Function |  最小值失去焦点时触发	        |
| blurto    |  Function |  最大值失去焦点时触发	        |
| focusfrom    | Function  |  最小值获得焦点时触发	        |
| focusto    | Function  |  最大值获得焦点时触发	        |
| changefrom    | Function  |  最小值绑定值被改变时触发	        |
| changeto    | Function  |  最大值绑定值被改变时触发	        |
