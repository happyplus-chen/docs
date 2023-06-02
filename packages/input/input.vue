<template>
  <el-input ref="elInputRef" v-model="value" v-bind="$attrs">
    <!--传递插槽-->
    <template v-for="(_item, key, index) in $slots" :key="index" #[key]>
      <slot :name="key"></slot>
    </template>
    <template v-if="selectPopParam" #append>
      <el-button :icon="selectPopParam.multiple ? '' : 'Search'" @click="handleClick">{{
        selectPopParam.multiple ? '多选' : ''
      }}</el-button>
    </template>
  </el-input>
  <select-pop
    v-if="selectPopParam && isRender"
    v-model="show"
    :value="value"
    :select-param="selectPopParam.selectParam"
    :multiple="selectPopParam.multiple"
    @select="select"
  />
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'Input', inheritAttrs: false }
</script>

<script setup lang="ts">
import SelectPop from '../select-pop'
import { ref, computed, nextTick } from 'vue'
interface SelectPopParam {
  multiple?: boolean
  formData?: Record<string, any>
  selectParam: Record<string, any>
}
interface Props {
  modelValue: string | number
  selectPopParam?: SelectPopParam
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue', 'confirmSelect'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const show = ref(false)
const isRender = ref(false)
function handleClick() {
  show.value = true
  isRender.value = true
}

const elInputRef = ref()

function select(val, rows) {
  value.value = val
  emit('confirmSelect', val, rows)
  nextTick(() => {
    const $input = elInputRef.value?.$el?.querySelector('input')
    $input && $input.dispatchEvent(new Event('change'))
  })
}

function getRef() {
  return elInputRef.value
}

const extendInputMethods = (methodKeys: any[]) => {
  const funcs: any = {}
  methodKeys.forEach((name) => {
    funcs[name] = (...args: any[]) => {
      const $elInput: any = elInputRef.value
      if ($elInput && $elInput[name]) {
        return $elInput[name](...args)
      }
    }
  })

  return funcs
}

const methodKeys = [
  'blur',
  'clear',
  'focus',
  'input',
  'ref',
  'resizeTextarea',
  'select',
  'textarea',
  'textareaStyle'
]
defineExpose({
  getRef,
  ...extendInputMethods(methodKeys)
})
</script>
