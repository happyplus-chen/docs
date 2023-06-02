import type { VxeGlobalRendererHandles } from 'vxe-table'
import { isObject } from '../utils/utils'
import XEUtils from 'xe-utils'
import { $CLS_PREFIX } from '../utils/use-global-const'

const width100 = { width: '100%' }

function getOnName(type: string) {
  return 'on' + type.substring(0, 1).toLocaleUpperCase() + type.substring(1)
}

const getOns = (renderOpts, params) => {
  const { events } = renderOpts
  const ons: { [type: string]: Function } = {}
  XEUtils.objectEach(events, (func: Function, key: string) => {
    ons[getOnName(key)] = function (...args: any[]) {
      func(params, ...args)
    }
  })
  return ons
}

const getAttrs = (renderOpts: any = {}, params: any) => {
  const { options = [], attrs = {} } = renderOpts
  if (isObject(attrs)) {
    return { options, ...attrs, ...getOns(renderOpts, params) }
  }
  if (typeof attrs === 'function') {
    return attrs(params)
  }
}

export const renderEdit = (
  renderOpts: VxeGlobalRendererHandles.RenderEditOptions,
  params: VxeGlobalRendererHandles.RenderEditParams
) => {
  const { row, column } = params
  const attrs = getAttrs(renderOpts, params)
  return [<el-input class="jg-cell" v-model={row[column.field]} {...attrs}></el-input>]
}

export const renderNumber = (
  renderOpts: VxeGlobalRendererHandles.RenderEditOptions,
  params: VxeGlobalRendererHandles.RenderEditParams
) => {
  const { row, column } = params
  const attrs = getAttrs(renderOpts, params)
  return [
    <el-input-number
      style={{ width: '100%' }}
      v-model={row[column.field]}
      {...attrs}
    ></el-input-number>
  ]
}

export const renderCell = (
  renderOpts: VxeGlobalRendererHandles.RenderEditOptions,
  params: VxeGlobalRendererHandles.RenderEditParams
) => {
  const { row, column } = params
  return [<span>{row[column.field]}</span>]
}

export const renderRate = (
  renderOpts: VxeGlobalRendererHandles.RenderEditOptions,
  params: VxeGlobalRendererHandles.RenderEditParams
) => {
  const { row, column } = params

  const format = {
    fraction: 2,
    total: 1,
    section: [30, 60, 90]
  }
  const rate = (row[column.field] * 100).toFixed(2)

  let css = ''

  const rateValue = parseInt(rate, 10)

  const width = Math.min(rateValue, 100) + '%'

  if (rateValue === 100) {
    css = ` ${$CLS_PREFIX}-grid__chart-completed`
  } else {
    const cssMap = [
      ` ${$CLS_PREFIX}-grid__chart-danger`,
      ` ${$CLS_PREFIX}-grid__chart-warning`,
      ` ${$CLS_PREFIX}-grid__chart-normal`
    ]

    for (let i = 0; i < format.section.length; i++) {
      if (rateValue < format.section[i]) {
        css = cssMap[i]
        break
      }
    }
  }

  return [
    <div class={`${$CLS_PREFIX}-grid__data-rate`}>
      <div class={[`${$CLS_PREFIX}-grid__rate-chart`, css]} style={{ width }}></div>
      <span class={`${$CLS_PREFIX}-grid__rate-text`}>{rate + '%'}</span>
    </div>
  ]
}

export const renderSelect = (
  renderOpts: VxeGlobalRendererHandles.RenderEditOptions,
  params: VxeGlobalRendererHandles.RenderEditParams
) => {
  const { row, column } = params
  const attrs = getAttrs(renderOpts, params)
  return [<jg-select class="jg-cell" v-model={row[column.field]} {...attrs}></jg-select>]
}

export const renderNumberRange = (
  renderOpts: VxeGlobalRendererHandles.RenderEditOptions,
  params: VxeGlobalRendererHandles.RenderEditParams
) => {
  const { row, column } = params
  const attrs = getAttrs(renderOpts, params)
  return [<jg-numberRange class="jg-cell" v-model={row[column.field]} {...attrs}></jg-numberRange>]
}

export const renderNumberRangeCell = (
  renderOpts: VxeGlobalRendererHandles.RenderEditOptions,
  params: VxeGlobalRendererHandles.RenderEditParams
) => {
  const { row, column } = params
  const attrs = getAttrs(renderOpts, params)
  const data = row[column.field] || ''
  return [
    <div>
      <span>{data[0]}</span>
      {attrs.defaultText || '至'}
      <span>{data[1]}</span>
    </div>
  ]
}

export const renderEnum = (
  renderOpts: VxeGlobalRendererHandles.RenderEditOptions,
  params: VxeGlobalRendererHandles.RenderEditParams
) => {
  const { row, column } = params
  const cellValue = row[column.field]
  const { options = [], props } = getAttrs(renderOpts, params) || {}
  const { label = 'label', value = 'value' } = props || {}
  const text = options
    .filter((item) => {
      return cellValue?.includes(item[value])
    })
    .map((item: any) => item[label])
    .join(',')
  return <span>{text}</span>
}
// 按钮废弃
// export const renderButton = (
//   renderOpts: VxeGlobalRendererHandles.RenderEditOptions,
//   params: VxeGlobalRendererHandles.RenderEditParams
// ) => {
//   const { row, column } = params
//   const attrs = getAttrs(renderOpts, params)
//   const data = row[column.field] || ''
//   return [
//     <div>
//       {attrs.multiple ? (
//         attrs.config.map((item, index) => {
//           return (
//             <el-button style={width100} {...item}>
//               {item.label}
//             </el-button>
//           )
//         })
//       ) : (
//         <el-button style={width100} {...attrs}>
//           {attrs.label}
//         </el-button>
//       )}
//     </div>
//   ]
// }

export const renderDatePicker = (
  renderOpts: VxeGlobalRendererHandles.RenderEditOptions,
  params: VxeGlobalRendererHandles.RenderEditParams
) => {
  const { row, column } = params
  const attrs = getAttrs(renderOpts, params)
  const data = row[column.field] || ''

  return [<el-date-picker style={width100} {...attrs} v-model={row[column.field]} />]
}

export const renderDateCell = (
  renderOpts: VxeGlobalRendererHandles.RenderEditOptions,
  params: VxeGlobalRendererHandles.RenderEditParams
) => {
  const { row, column } = params
  const date = row[column.field] || ''
  return [<span>{date}</span>]
}

export const renderSwitch = (
  renderOpts: VxeGlobalRendererHandles.RenderEditOptions,
  params: VxeGlobalRendererHandles.RenderEditParams
) => {
  const { row, column } = params
  const attrs = getAttrs(renderOpts, params)

  return [<el-switch style={width100} {...attrs} v-model={row[column.field]} />]
}

//查询对象组件
// export const renderSelectPop = (
//   renderOpts: VxeGlobalRendererHandles.RenderEditOptions,
//   params: VxeGlobalRendererHandles.RenderEditParams
// ) => {
//   const { row, column } = params
//   const attrs = getAttrs(renderOpts, params)
//   const data = row[column.field] || ''
//   const show = ref(false)
//   return [
//     <div>
//       <el-input
//         v-model={row[column.field]}
//         placeholder="Please input"
//         class="input-with-select"
//         clearable
//         v-slots={{
//           append: () => (
//             <el-button
//               icon="Search"
//               onClick={() => {
//                 show.value = true
//                 console.log(show.value, '查询对象弹窗')
//               }}
//             />
//           )
//         }}
//       ></el-input>
//       <jg-select-pop v-model={show.value} {...attrs}></jg-select-pop>
//     </div>
//   ]
// }

export const renderJsInputEdit = (
  renderOpts: VxeGlobalRendererHandles.RenderEditOptions,
  params: VxeGlobalRendererHandles.RenderEditParams
) => {
  const { row, column } = params
  const attrs = getAttrs(renderOpts, params)
  return [<jg-input class="jg-cell" v-model={row[column.field]} {...attrs}></jg-input>]
}
