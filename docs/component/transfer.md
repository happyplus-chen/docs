# Transfer 穿梭框


依赖组件：`ElTransfer` 需先全局注册。
组件的属性和事件, 插槽和ElTransfer一致 [ElTransfer](https://element-plus.gitee.io/zh-CN/component/transfer.html#%E5%B1%9E%E6%80%A7)

## 基础用法

Transfer 的数据通过 data 属性传入。 数据需要是一个对象数组，每个对象有以下属性：key 为数据的唯一性标识，label 为显示文本，disabled 表示该项数据是否禁止被操作。 目标列表中的数据项会同步到绑定至 v-model 的变量，值为数据项的 key 所组成的数组。 当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 v-model 绑定的变量赋予一个初始值。


:::demo 
transfer/base
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| dataset | object | - | 全局dataset配置,用于请求后端接口

## 方法

| 名称            | 参数  |   说明                                   | 
| -----------    | ------- | -----------------------------  |
| getRef    |   |  获取ElTree组件实例        |
