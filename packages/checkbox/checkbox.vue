<template>
  <el-checkbox-group :class="[`${$CLS_PREFIX}-chckbox-group`]" v-bind="$attrs">
    <component
      :is="checkBoxComponet"
      v-for="(item, index) in proxyOptions"
      :key="index"
      :border="border"
      :label="item[props.props.value as 'value']"
      :disabled="item.disabled"
      :checked="item.checked"
    >
      <slot :item="item" :index="index">
        {{ item[props.props.label as 'label'] }}
      </slot>
    </component>
  </el-checkbox-group>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'Checkbox', inheritAttrs: false }
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { $CLS_PREFIX } from '../utils/use-global-const'
import type { CheckboxGroupProps } from 'element-plus'
import useDataset from '../utils/use-dataset'
import type { Dataset } from '../utils/use-dataset'

type CheckboxProps = {
  label?: string
  value?: string | number | boolean
  disabled?: boolean
  checked?: boolean
  [k: string]: any
}

interface Props extends /* @vue-ignore */ Partial<CheckboxGroupProps> {
  options?: CheckboxProps[] | string[]
  props?: { label: string; value: string }
  button?: boolean
  border?: boolean
  dataset?: Dataset | null
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  props: () => {
    return { label: 'label', value: 'value' }
  },
  dataset: null
})

const { options } = useDataset(props) as any

const proxyOptions = computed(() => {
  return options.value.map((v: string | CheckboxProps) => {
    if (typeof v == 'string') return { label: v, value: v }
    return v
  })
})

const checkBoxComponet = computed(() => (props.button ? 'ElCheckboxButton' : 'ElCheckbox'))
</script>
