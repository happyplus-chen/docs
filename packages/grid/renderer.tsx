import { VXETable } from 'vxe-table'
import {
  inputEditor,
  inputNumberEditor,
  selectEditor,
  popSelectEditor,
  timePickerEditor,
  timeSelectEditor,
  DatePickerEditor,
  autocompleteEditor,
  switchEditor,
  enumRenderer
} from './render'

VXETable.renderer.add('Input', {
  // 激活时自动聚焦
  autofocus: '.el-input__inner',
  // 可编辑激活模板
  renderEdit: inputEditor
})

VXETable.renderer.add('InputNumber', {
  autofocus: '.el-input__inner',
  renderEdit: inputNumberEditor
})
VXETable.renderer.add('Select', {
  autofocus: '.el-input__inner',
  renderEdit: selectEditor,
  renderCell: enumRenderer
})

VXETable.renderer.add('PopSelect', {
  autofocus: '.el-input__inner',
  renderEdit: popSelectEditor
})

VXETable.renderer.add('TimePicker', {
  autofocus: '.el-input__inner',
  renderEdit: timePickerEditor
})

VXETable.renderer.add('TimeSelect', {
  autofocus: '.el-input__inner',
  renderEdit: timeSelectEditor
})

VXETable.renderer.add('DatePicker', {
  autofocus: '.el-input__inner',
  renderEdit: DatePickerEditor
})

VXETable.renderer.add('AutoComplete', {
  autofocus: '.el-input__inner',
  renderEdit: autocompleteEditor
})

VXETable.renderer.add('Switch', {
  autofocus: '.el-input__inner',
  renderEdit: switchEditor
})
