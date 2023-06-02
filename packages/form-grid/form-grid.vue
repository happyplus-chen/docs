<template>
  <el-row ref="rowRef" :class="[`${$CLS_PREFIX}-form-grid`]" v-bind="$attrs" :gutter="gutter">
    <slot name="prepend"></slot>
    <el-col
      v-for="(item, index) in formItems"
      v-show="!item.hide"
      :key="index"
      v-bind="getIncludeAttrs(ColPropKeys, item)"
      :span="getSpan(item.span)"
    >
      <form-item v-bind="getFormItemProps(item)" />
    </el-col>
    <slot name="append" :span="resizeSpan"></slot>
  </el-row>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'FormGrid', inheritAttrs: false }
</script>

<script setup lang="ts">
import FormItem, { type FormItemProps } from '../form-item'
import { ref } from 'vue'
import { getIncludeAttrs } from '../utils/utils'
import { $CLS_PREFIX } from '../utils/use-global-const'
import useFormItems from '../utils/use-form-items'
import type { ColProps, RowProps } from 'element-plus'
import useFormGrid from '../utils/use-form-grid'

const ColPropKeys = ['span', 'push', 'pull', 'offset']
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

const props = withDefaults(defineProps<Props>(), {
  gutter: 18,
  span: 24
})

const { formItems, getFormItemProps, getRef, validate, resetFields } =
  useFormItems<ItemProps>(props)

const rowRef = ref()
const { resizeSpan, getSpan } = useFormGrid(props, rowRef)

defineExpose({ getRef, validate, resetFields })
</script>

<style lang="scss">
/** 避免在 内联 form ，grid 显示不正常 */
@use '../theme/vars.scss' as *;
.el-form--inline .#{$cls-prefix}form-grid .el-form-item {
  display: flex;
  margin-right: 0px;
}

.#{$cls-prefix}form-grid .el-date-editor.el-input,
.#{$cls-prefix}form-grid .el-date-editor.el-input__inner,
.#{$cls-prefix}form-grid .el-select,
.#{$cls-prefix}form-grid .el-cascader,
.#{$cls-prefix}form-grid .el-input-number,
.#{$cls-prefix}form-grid .el-autocomplete {
  width: 100%;
}
</style>
