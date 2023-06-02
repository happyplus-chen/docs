# MultSelectPop 多选弹窗选择

依赖组件：`jgFormSearch`、`jgGrid`

## 基础用法
多选弹窗选择



## selectPop属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| model-value / v-model | boolean | - | 是否显示 Dialog
| value | string | - | 选择的值
| dialogLoading | boolean | false | Dialog 对话框loading
| dialogTitle | string | - | Dialog 对话框 Dialog 的标题
| dialogWidth | string | 50% | Dialog 对话框的宽度，单位 px / %
| tableHeight | string | 300px | Dialog 对话框表格高度，单位 px / %
| formData | object | - | 搜索表单数据
| formItems | object | - | 搜索表单配置
| selectProp | string | - | 选中时返回行对应的列字段
| dataset | object | - | dataset配置,用于请求后端接口
| tableColumns | array | - | 表格列配置
| querySearch | funtion(data) | - | 查询按钮事件，如果传递了该参数，则不启用dataset
| tableData | array | - | 表格数据
| tableLoading | boolean | - | 表格请求数据时loading


## selectPop Events

| 事件名            | 参数  |   说明                                   | 
| -----------    | ------- | -----------------------------  |
| select    | rows  | 确认按钮事件        |

