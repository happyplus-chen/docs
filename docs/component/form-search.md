# FormSearch 表单项

快速的数据化配置一个表单。

依赖组件：`ElForm` `ElFormItem` `ElInput`，依赖指令：`v-loading`，需先全局注册。


## 典型表单

使用内置表单项组件比如 `jgFormItems`
继承jgFormItems的属性

属性 attrs 为其组件提供属性支持，使用驼峰命名法。
事件使用onXxx语法，如：click事件用onClick


:::demo 
form-search/base
:::


## 珊格表单

使用内置表单项组件比如 `jgFormGrid`
继承jgFormGrid的属性

:::demo 
form-search/formSearchGrid
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| layout | enum `[grid, default]`| `default` | 通用表格布局还是珊格表单
| data | object | - | 表单数据
| formConfig | object | - | [ElForm 属性](https://element-plus.gitee.io/zh-CN/component/form.html#form-attributes)
| collapseButton | boolean | - | 是否显示收起按钮 
| showItemsNum | number | 3 | 收起时展示多少个,设置了responsive为true时，会根据宽度自适应
| items | ItemProps[] | - | 表单配置项 
| view-model | boolean | - | 视图模式，只渲染 value
| model-prop | string | - | 表单 model 键名 
| scope | object | - | 表单项插槽作用域参数 
| responsive | boolean | - | 是否开启自适应容器
| responsive-method | (width: number) => number | - | 自定义自适应容器方法
| span | number | 24 | 珊格列
| gutter | number | 18 | 珊格间距
| ...... | RowProps | - | [ElRow 属性](https://element-plus.gitee.io/zh-CN/component/layout.html#row-attributes)

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
| selectParam | object | - | input输入框弹窗选择参数
| labelWidth, rules, error, showMessage,  inlineMessage  |  | ... |  [ElFormIten 属性](https://element-plus.gitee.io/zh-CN/component/layout.html#col-attributes)|

### selectParam 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| selectCode | string | - | 表单配置和表格列配置key，用于请求接口的传参
| selectProp | string | - | 选中时返回行对应的列字段
| dialogTitle | string | - | 弹窗标题
| multiple | boolean | - | 是否多选
| formData | object | - | 搜索表单数据
## 方法

| 名称            | 参数  |   说明                                   | 
| -----------    | ------- | -----------------------------  |
| getRef    | prop  |  获取组件实例,不传取到form表单实例       |
| validate, validateField,resetFields, scrollToField, clearValidate | .... | [ElForm 属性](https://element-plus.gitee.io/zh-CN/component/form.html#form-events)

## 插槽

| 名称            | 插槽作用域|   说明                                   | 
| -----------    |   ------- | -----------------------------  |
| component-xx   | itemProps |  item 组件具名插槽           | 
| append-btn     |   -   |  按钮后置内容，应该也是一个按钮   | 