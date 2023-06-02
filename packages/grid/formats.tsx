import type { VxeGlobalRendererHandles } from 'vxe-table'
import XEUtils from 'xe-utils'

// 格式化性别
export const formatSex = ({ cellValue }: any) => {
  return cellValue ? (cellValue === '1' ? '男' : '女') : ''
}
// 格式化下拉选项
export const formatSelect = (
  { cellValue }: VxeGlobalRendererHandles.FilterMethodParams,
  list: Record<string, any>
) => {
  const item = list.find((item: any) => item.value === cellValue)
  return item ? item.label : ''
}
// 格式化日期，默认 yyyy-MM-dd HH:mm:ss
export const formatDateTime = (
  { cellValue }: VxeGlobalRendererHandles.FilterMethodParams,
  format: string
) => {
  return XEUtils.toDateString(cellValue, format || 'yyyy-MM-dd HH:mm:ss')
}

export const formatDate = (
  { cellValue }: VxeGlobalRendererHandles.FilterMethodParams,
  format: string
) => {
  return XEUtils.toDateString(cellValue, format || 'yyyy-MM-dd')
}
// 四舍五入金额，每隔3位逗号分隔，默认2位数
export const formatAmount = (
  { cellValue }: VxeGlobalRendererHandles.FilterMethodParams,
  digits = 2
) => {
  return XEUtils.commafy(Number(cellValue), { digits })
}
// 格式化银行卡，默认每4位空格隔开
export const formatBankcard = ({ cellValue }: VxeGlobalRendererHandles.FilterMethodParams) => {
  return XEUtils.commafy(XEUtils.toValueString(cellValue), { spaceNumber: 4, separator: ' ' })
}
// 四舍五入,默认两位数
export const formatFixedNumber = (
  { cellValue }: VxeGlobalRendererHandles.FilterMethodParams,
  digits = 2
) => {
  return XEUtils.toFixed(XEUtils.round(cellValue, digits), digits)
}
// 向下舍入,默认两位数
export const formatCutNumber = (
  { cellValue }: VxeGlobalRendererHandles.FilterMethodParams,
  digits = 2
) => {
  return XEUtils.toFixed(XEUtils.floor(cellValue, digits), digits)
}
// 转换 moment 类型为字符串
export const toMomentString = (
  { cellValue }: VxeGlobalRendererHandles.FilterMethodParams,
  format: string
) => {
  return cellValue ? cellValue.format(format) : ''
}
