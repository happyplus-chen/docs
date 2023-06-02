<template>
  <el-transfer ref="elTransferRef" v-model="value" v-bind="$attrs" :data="proxyOptions">
    <!--传递插槽-->
    <template v-for="(_item, key, index) in $slots" :key="index" #[key]="{ option }">
      <slot :name="key" :option="option"></slot>
    </template>
  </el-transfer>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'Transfer', inheritAttrs: false }
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'
import useDataset from '../utils/use-dataset'

const props = defineProps(['modelValue', 'dataset', 'data'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const { options, loading } = useDataset(props) as any
const proxyOptions = computed(() => {
  if (props.data && props.data.length) {
    return props.data
  }
  return options.value.map((v: any) => {
    return v
  })
})

const elTransferRef = ref()

function clearQuery(prop: string) {
  return elTransferRef.value?.clearQuery(prop)
}

defineExpose({ clearQuery })
</script>
