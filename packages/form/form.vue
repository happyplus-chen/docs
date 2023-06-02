<template>
  <el-form ref="elFormRef" :model="props.data" v-bind="formConfig">
    <form-items
      ref="formItemsRef"
      :items="props.items"
      :model-prop="props.modelProp"
      :view-model="props.viewModel"
      :scope="props.scope"
    >
      <!-- 实现插槽透传 -->
      <template v-for="(item, key, index) in formSlots" :key="index" #[key]>
        <slot :name="key"></slot>
      </template>
    </form-items>
  </el-form>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'Form', inheritAttrs: false }
</script>

<script setup lang="ts">
import { ref, useSlots } from 'vue'
import FormItems from '../form-items'
import type { FormItemProps } from '../form-item'
import type { FormLayoutContext } from '../utils/use-form-items'
import { useForm } from './use-form'

interface Props {
  data: Record<string, any>
  formConfig?: Record<string, any>
  items: FormItemProps[]
  modelProp?: string
  viewModel?: boolean
  scope?: Record<string, any>
}

const props = withDefaults(defineProps<Props>(), {})

const formSlots: FormLayoutContext['slots'] = useSlots()

const formItemsRef = ref()
const methodKeys = ['validate', 'validateField', 'resetFields', 'scrollToField', 'clearValidate']
const funs = useForm(formItemsRef, methodKeys)

defineExpose(funs)
</script>
