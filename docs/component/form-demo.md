# Form 表单项

快速的数据化配置一个表单。

依赖组件：`ElFormItem` `ElInput`，依赖指令：`v-loading`，需先全局注册。


## 典型表单

使用内置数据化的表单项组件比如 `agel-select`、`agel-radio`、`agel-checkbox`等，可快速完成一个包含各种输入表单项的基础表单。

属性 `component` 指定要渲染的组件或组件名称

属性 `attrs` 为其组件提供属性支持，使用驼峰命名法。

属性 `required` 将自动生成由 label 组成的必填规则。

:::demo 
form-demo/base
:::


## 插槽表单

属性 `component` `label` 可以为一个渲染函数，使用 `jsx` 大幅提高体验。

属性 `component` 支持模板插槽，但必须 `component-` 开头，否则会被识别为组件名称。

属性 `slots` 可以实现表单项组件的子插槽的渲染。

:::demo 
form-demo/formDemoSlot
:::


## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| data | object | - | 表单数据 
| items | ItemProps[] | - | 表单配置项 
| view-model | boolean | - | 视图模式，只渲染 value
| model-prop | string | - | 表单 model 键名 
| scope | object | - | 表单项插槽作用域参数
| formConfig | object | - | [ElForm 属性](https://element-plus.gitee.io/zh-CN/component/form.html#form-attributes)


formConfig

### ItemProps

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| prop | string | - | model 键名，支持 'obj.xx.xx' 
| label | string \| RenderFunction | - | 标签文本 
| required | boolean | - | 自动生成必填规则
| component | string \| Component \| RenderFunction  | ElInput | 表单项组件
| slots | Slots ｜ RenderFunction | - | 表单项组件的插槽
| attrs | object | - | 表单项组件的属性
| viewModel | boolean | - | 视图模式，只渲染 value
| viewFormat | RenderFunction | - | 视图模式的格式化工具
| vmodel | '.trim' \| '.number' | - | v-model 修饰符
| loading | boolean | - | 是否显示加载
| hidden | boolean | - | 是否隐藏
| class  | string   | - | formitem class
| labelWidth, rules, error, showMessage,  inlineMessage  |  | ... |  [ElFormIten 属性](https://element-plus.gitee.io/zh-CN/component/layout.html#col-attributes)|


## 方法

| 名称            | 参数  |   说明                                   | 
| -----------    | ------- | -----------------------------  |
| getRef    | prop  |  获取组件实例,不传取到form表单实例       |
| validate, validateField,resetFields, scrollToField, clearValidate | .... | [ElForm 属性](https://element-plus.gitee.io/zh-CN/component/form.html#form-events)

## 插槽

| 名称            | 插槽作用域|   说明                                   | 
| -----------    |   ------- | -----------------------------  |
| component-xx        | itemProps |  item 组件具名插槽           | 