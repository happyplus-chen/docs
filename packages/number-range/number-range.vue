<template>
  <div>
    <div class="input-number-range" :class="{ 'is-disabled': disabled }">
      <div class="flex">
        <div class="from">
          <el-input
            ref="input_from"
            v-model="userInputForm"
            class="custom-input"
            :disabled="disabled"
            placeholder="最小值"
            @blur="handleBlurFrom"
            @focus="handleFocusFrom"
            @input="handleInputFrom"
            @change="handleInputChangeFrom"
          />
        </div>
        <div class="center">
          <span>至</span>
        </div>
        <div class="to">
          <el-input
            ref="input_to"
            v-model="userInputTo"
            class="custom-input"
            :disabled="disabled"
            placeholder="最大值"
            @blur="handleBlurTo"
            @focus="handleFocusTo"
            @input="handleInputTo"
            @change="handleInputChangeTo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'NumberRange', inheritAttrs: false }
</script>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  modelValue: number[]
  disabled?: boolean
  precision?: number | string
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  disabled: false,
  precision: 0
})

const userInputForm = ref<number | null>(null)
const userInputTo = ref<number | null>(null)

watch(
  () => props.modelValue,
  (newVal, oldVal) => {
    if (newVal instanceof Array && props.precision !== undefined) {
      userInputForm.value = typeof newVal[0] === 'number' ? newVal[0] : null
      userInputTo.value = typeof newVal[1] === 'number' ? newVal[1] : null
    }
  },
  { immediate: true }
)

const emit = defineEmits([
  'blurfrom',
  'focusfrom',
  'blurto',
  'focusto',
  'update:modelValue',
  'changefrom',
  'changeto'
])
// 根据精度保留数字
function toPrecision(num: number, precision = 0): number {
  const multiplier = Math.pow(10, precision)
  const rounded = Math.round(num * multiplier) / multiplier
  return Number(rounded.toFixed(precision))
}

function handleBlurFrom(event: FocusEvent) {
  emit('blurfrom', userInputForm.value, event)
}

function handleFocusFrom(event: FocusEvent) {
  emit('focusfrom', userInputForm.value, event)
}

function handleBlurTo(event: FocusEvent) {
  emit('blurto', userInputTo.value, event)
}

function handleFocusTo(event: FocusEvent) {
  emit('focusto', userInputTo.value, event)
}

function handleInputFrom(value: any) {
  userInputForm.value = value
}

function handleInputTo(value: any) {
  userInputTo.value = value
}

// from输入框change事件
function handleInputChangeFrom(value: any) {
  // 初始化数字精度
  userInputForm.value = setPrecisionValue(value)

  // 如果from > to 将from值替换成to
  if (typeof userInputTo.value === 'number') {
    userInputForm.value =
      parseFloat(String(userInputForm.value)) <= parseFloat(String(userInputTo.value))
        ? userInputForm.value
        : userInputTo.value
  }
  emit('update:modelValue', [userInputForm.value, userInputTo.value])
  emit('changefrom', userInputForm.value)
}

// to输入框change事件
function handleInputChangeTo(value: any) {
  // 初始化数字精度
  if (typeof userInputForm.value === 'number') {
    userInputTo.value = setPrecisionValue(value)
    userInputTo.value =
      parseFloat(String(userInputTo.value)) >= parseFloat(String(userInputForm.value))
        ? userInputTo.value
        : userInputForm.value
  }
  emit('update:modelValue', [userInputForm.value, userInputTo.value])
  emit('changeto', userInputTo.value)
}

// 设置成精度数字
function setPrecisionValue(value: number) {
  return toPrecision(value, props.precision as number)
}
</script>

<style lang="scss" scoped>
.input-number-range {
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
  :deep(.custom-input) {
    .el-input__wrapper {
      box-shadow: none;
      .el-input__inner {
        border: none;
        margin: 0;
        padding: 0 15px;
        background-color: transparent;
      }
    }
  }
}
.flex {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  .center {
    margin-top: -3px;
  }
}
.is-disabled {
  cursor: not-allowed;
}
</style>
