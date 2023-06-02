<template>
  <ElRadioGroup :class="[`${$CLS_PREFIX}-radio-group`]" v-bind="$attrs">
    <component
      :is="radioComponet"
      v-for="(item, index) in proxyOptions"
      :key="index"
      :border="border"
      :label="item[props.props.value as 'value']"
      :disabled="item.disabled"
    >
      <slot :item="item" :index="index">
        {{ item[props.props.label as 'label'] }}
      </slot>
    </component>
  </ElRadioGroup>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'Radio', inheritAttrs: false }
</script>

<script setup lang="ts">
import { computed } from 'vue'
import type { RadioGroupProps } from 'element-plus'
import { $CLS_PREFIX } from '../utils/use-global-const'
import useDataset from '../utils/use-dataset'
import type { Dataset } from '../utils/use-dataset'

type RadioProps = {
  label?: string
  value?: string | number | boolean
  disabled?: boolean
  [k: string]: any
}

interface Props extends /* @vue-ignore */ Partial<RadioGroupProps> {
  options?: RadioProps[] | string[]
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
  return options.value.map((v: string | RadioProps) => {
    if (typeof v == 'string') return { label: v, value: v }
    return v
  })
})

const radioComponet = computed(() => (props.button ? 'ElRadioButton' : 'ElRadio'))
</script>

<style scoped></style>
