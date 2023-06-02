<template>
  <el-select
    ref="elSelectRef"
    :class="[`${$CLS_PREFIX}-select`]"
    v-bind="$attrs"
    :loading="loading"
    :remote-method="remoteMethod"
    :remote="remote"
    @visible-change="visibleChange"
  >
    <template #default>
      <template v-for="(item, index) in proxyOptions" :key="index">
        <el-option-group
          v-if="item.options && item.options.length > 0"
          :label="String(item[props.props.label as 'label'])"
          :disabled="item.disabled"
        >
          <el-option
            v-for="(option, index) in item.options"
            :key="index"
            :label="option[props.props.label as 'label']"
            :value="option[props.props.value as any]"
            :disabled="option.disabled"
          >
            <slot :item="option" :index="index"></slot>
          </el-option>
        </el-option-group>
        <el-option
          v-else
          :label="item[props.props.label as 'label']"
          :value="item[props.props.value as any]"
          :disabled="item.disabled"
        >
          <slot :item="item" :index="index"></slot>
        </el-option>
      </template>
    </template>
    <template #prefix>
      <slot name="prefix"></slot>
    </template>
    <template v-if="$slots.empty" #empty>
      <slot name="empty"></slot>
    </template>
  </el-select>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'Select', inheritAttrs: false }
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ElSelect, ElOption } from 'element-plus'
import useDataset from '../utils/use-dataset'
import type { Dataset } from '../utils/use-dataset'
import { $CLS_PREFIX } from '../utils/use-global-const'

type OptionProps = {
  label?: string
  value?: string | number | boolean | Record<string, any>
  disabled?: boolean
  lazyLoad?: boolean
  options?: OptionProps[]
  [k: string]: any
}

type SelectProps = InstanceType<typeof ElSelect>['$props']

interface Props extends /* @vue-ignore */ Partial<SelectProps> {
  remote?: boolean
  lazyLoad?: boolean
  dataset?: Dataset | null
  options?: OptionProps[] | string[]
  props?: { label: string; value: string }
}

const props = withDefaults(defineProps<Props>(), {
  remote: false,
  lazyLoad: false,
  dataset: null,
  options: () => [],
  props: () => {
    return { label: 'label', value: 'value' }
  }
})

const emit = defineEmits(['visibleChange'])

const elSelectRef = ref()

const firstLoad = ref(false)

const { options, loading, getOptions } = useDataset(props) as any

const proxyOptions = computed(() => {
  return options.value.map((v: OptionProps | string) => {
    if (typeof v == 'string') return { label: v, value: v }
    return v
  })
})

const remoteMethod = ref(props.remoteMethod)

if (props.remote && !props.remoteMethod) {
  remoteMethod.value = (query: string) => {
    query && getOptions({ query })
  }
}

const visibleChange = (value: boolean) => {
  emit('visibleChange', value)
  if (value && props.lazyLoad && !firstLoad.value) {
    firstLoad.value = true
    getOptions()
  }
}

const focus = () => elSelectRef.value.focus()
const blur = () => elSelectRef.value.blur()

defineExpose({ focus, blur })
</script>
