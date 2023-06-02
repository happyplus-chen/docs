<template>
  <el-tree ref="elTreeRef" v-bind="$attrs" v-loading="loading" :data="proxyOptions">
    <!--传递插槽-->
    <template v-for="(_item, key, index) in $slots" :key="index" #[key]="{ node, data }">
      <slot :name="key" :node="node" :data="data"></slot>
    </template>
  </el-tree>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'Tree', inheritAttrs: false }
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'
import useDataset from '../utils/use-dataset'

const props = defineProps(['dataset', 'data'])

const { options, loading } = useDataset(props) as any
const proxyOptions = computed(() => {
  if (props.data && props.data.length) {
    return props.data
  } else {
    return options
  }
})

const elTreeRef = ref()

function getRef() {
  return elTreeRef
}

defineExpose({ getRef })
</script>
