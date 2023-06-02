/* eslint-disable */
import 'vxe-table/lib/style.css'
import { modalAdapter } from './modal'
import * as formaters from './formats'
import useGlobalConfig from '../utils/use-global-config'
import './renderer'
import './grid.scss'

import {
  // 全局对象
  VXETable,

  // 表格功能
  Filter,
  Edit,
  Menu,
  Export,
  Keyboard,
  Validator,

  // 可选组件
  Icon,
  Grid,
  Button,
  Tooltip,
  Toolbar,
  Table,
  ModalController,
  VXETableSetupOptions
} from 'vxe-table'
// import Cell from 'vxe-table/es/table/src/cell'


function getEventTargetNode(evnt, container, className) {
  let targetElem;
  let target = evnt.target;
  while (target && target.nodeType && target !== document) {
    if (
      className &&
      target.className &&
      target.className.split &&
      target.className.split(' ').indexOf(className) > -1
    ) {
      targetElem = target;
    } else if (target === container) {
      return { flag: className ? !!targetElem : true, container, targetElem: targetElem };
    }
    target = target.parentNode;
  }
  return { flag: false };
}



function handleClearEvent(params) {
  const { $event } = params
  const bodyElem = document.body
  if (
    // 远程搜索
    getEventTargetNode($event, bodyElem, 'el-autocomplete-suggestion').flag ||
    // 下拉框
    getEventTargetNode($event, bodyElem, 'el-select-dropdown').flag ||
    // 级联
    getEventTargetNode($event, bodyElem, 'el-cascader__dropdown').flag ||
    getEventTargetNode($event, bodyElem, 'el-cascader-menus').flag ||
    // 日期
    getEventTargetNode($event, bodyElem, 'el-time-panel').flag ||
    getEventTargetNode($event, bodyElem, 'el-picker-panel').flag ||
    // 颜色
    getEventTargetNode($event, bodyElem, 'el-color-dropdown').flag ||
    // 弹出框
    getEventTargetNode($event, bodyElem, 'el-dialog').flag
  ) {
    return false
  }
}

// Cell.renderSortIcon = (params) => {
//   const { $table, column } = params
//   const { computeSortOpts } = $table.getComputeMaps()
//   const sortOpts = computeSortOpts.value
//   const { showIcon } = sortOpts
//   const { order, title } = column
//   return showIcon ? (
//     <div>
//       <span>{title}</span>
//       <span
//         class={{ 'custom-sort': true, 'is-order': order }}
//         onClick={(evnt) => {
//           const type = order === 'asc' ? 'desc' : order === 'desc' ? '' : 'asc'
//           $table.triggerSortEvent(evnt, column, type)
//         }}
//       >
//         <i class={[order ? `vxe-icon-sort-alpha-${order}` : 'vxe-icon-sort']}> </i>
//       </span>
//     </div>
//   ) : (
//     []
//   )
// }

VXETable.setup(useGlobalConfig().Grid as VXETableSetupOptions)

VXETable.modal = modalAdapter as ModalController
VXETable.formats.mixin(formaters as any)
VXETable.interceptor.add('event.clearFilter', handleClearEvent);
VXETable.interceptor.add('event.clearActived', handleClearEvent);
VXETable.interceptor.add('event.clearAreas', handleClearEvent);

export const setupGrid = (app) => {
  app.use(Grid).use(Table).use(Button).use(Filter).use(Edit).use(Menu).use(Export).use(Keyboard).use(Validator).use(Icon).use(Toolbar).use(Tooltip)
}
