import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { FormItemProps } from '../form-item'
import type { ColProps, RowProps } from 'element-plus'

type PickColProps = Partial<Pick<ColProps, 'span' | 'push' | 'pull' | 'offset'>>
type ItemProps = FormItemProps & PickColProps & { display?: boolean }
interface Props extends /* @vue-ignore */ Partial<RowProps> {
  // 表单配置项
  items: ItemProps[]
  modelProp?: string
  viewModel?: boolean
  scope?: Record<string, any>
  gutter?: number
  span?: number
  responsive?: boolean
  responsiveMethod?: (width: number) => number
}
export function useFormGrid(props: Props, elRef) {
  const resizeSpan = ref(24)

  const resizeObserver = new ResizeObserver(function () {
    const el = elRef.value.$el
    if (!el) return
    const width = el.clientWidth - (props.gutter || 0)
    if (!props.responsive || width == 0) return
    resizeSpan.value = props.responsiveMethod
      ? props.responsiveMethod(width)
      : responsiveMethod(width)
  })

  function getSpan(span?: number) {
    if (typeof span == 'number') return span
    if (props.responsive) return resizeSpan.value
    return props.span
  }

  function responsiveMethod(width: number) {
    let span = 24
    if (width >= 500 && width < 800) span = 12
    if (width >= 800 && width < 1200) span = 8
    if (width >= 1200 && width < 1600) span = 6
    if (width >= 1600) span = 4
    return span
  }

  onMounted(() => {
    props.responsive && resizeObserver.observe(elRef.value.$el)
  })

  onBeforeUnmount(() => {
    props.responsive && resizeObserver.unobserve(elRef.value.$el)
  })

  return {
    resizeSpan,
    getSpan
  }
}

export default useFormGrid
