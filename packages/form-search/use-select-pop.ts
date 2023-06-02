import { ref } from 'vue'
import type { FormItemProps } from '../form-item'
interface SelectParams {
  selectCode: string // 根据code去查找对应的搜索表单配置和表格列配置
  selectProp: string // 选中时返回行对应的列字段
  dialogTitle?: string
  multiple?: boolean
  formData?: Record<string, any>
}
interface Data {
  [key: string]: any
}

export function useSelectPop(data: Data) {
  const selectPopShow = ref(false)
  const selectParam = ref<SelectParams>({
    selectCode: '',
    selectProp: ''
  })
  const currItem = ref<FormItemProps>({})

  function confimSelect(val) {
    if (currItem.value.prop) {
      data[currItem.value.prop] = val
      const emitFun = currItem.value.attrs?.onChange || (() => {})
      emitFun(val)
    }
  }
  function handleSearchClick(item, param) {
    selectPopShow.value = true
    currItem.value = item
    selectParam.value = param
  }

  return {
    selectPopShow,
    selectParam,
    confimSelect,
    handleSearchClick
  }
}

export default useSelectPop
