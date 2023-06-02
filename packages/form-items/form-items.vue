<template>
  <form-item v-for="(item, i) in formItems" v-bind="getFormItemProps(item)" :key="i" />
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'FormItems', inheritAttrs: false }
</script>

<script setup lang="ts">
import FormItem, { type FormItemProps } from '../form-item'
import useFormItems from '../utils/use-form-items'

interface Props {
  items: FormItemProps[]
  modelProp?: string
  viewModel?: boolean
  scope?: Record<string, any>
}
const props = withDefaults(defineProps<Props>(), {})

const { formItems, getFormItemProps, getRef, validate, resetFields } = useFormItems(props)

defineExpose({ getRef, validate, resetFields })
</script>
