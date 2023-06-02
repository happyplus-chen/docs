import { VXETable } from 'vxe-table'
import {
  renderRate,
  renderEdit,
  renderCell,
  renderSelect,
  renderEnum,
  renderNumberRange,
  renderNumberRangeCell,
  renderNumber,
  // renderButton,
  renderDatePicker,
  renderSwitch,
  // renderSelectPop
  renderJsInputEdit
} from './render'

VXETable.renderer.add('JInput', {
  // 激活时自动聚焦
  autofocus: '.el-input__inner',
  // 可编辑激活模板
  renderEdit: renderEdit,
  // 可编辑显示模板
  renderCell: renderCell
})

VXETable.renderer.add('JRate', {
  autofocus: '.el-input__inner',
  renderEdit: renderEdit,
  renderCell: renderRate,
  renderDefault: renderRate
})

VXETable.renderer.add('JSelect', {
  autofocus: '.el-input__inner',
  renderEdit: renderSelect,
  renderDefault: renderEnum,
  renderCell: renderEnum
})

VXETable.renderer.add('JNumberRange', {
  autofocus: '.el-input__inner',
  renderEdit: renderNumberRange,
  renderCell: renderNumberRangeCell
})

VXETable.renderer.add('Jnumber', {
  autofocus: '.el-input__inner',
  renderEdit: renderNumber,
  renderCell: renderCell
})

VXETable.renderer.add('JDatePicker', {
  autofocus: '.el-input__inner',
  renderEdit: renderDatePicker
  // renderCell: renderDateCell // todo:使用普通span渲染不出来的问题
})
VXETable.renderer.add('JSwitch', {
  autofocus: '.el-input__inner',
  renderEdit: renderSwitch,
  renderCell: renderSwitch
})

// VXETable.renderer.add('JselectPop', {
//   autofocus: '.el-input__inner',
//   renderEdit: renderSelectPop,
//   renderCell: renderCell
// })

VXETable.renderer.add('JSInput', {
  autofocus: '.el-input__inner',
  renderEdit: renderJsInputEdit
})
