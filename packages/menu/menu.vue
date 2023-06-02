<template>
  <ElMenu
    ref="menuRef"
    v-bind="$attrs"
    @select="(...v) => emits('select', ...v)"
    @close="(...v) => emits('close', ...v)"
    @open="(...v) => emits('open', ...v)"
  >
    <menu-item v-for="(item, i) in menusProxy" :key="i" v-bind="item" />
  </ElMenu>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'Menu', inheritAttrs: false }
</script>

<script setup lang="ts">
import MenuItem from './menu-item.vue'
import { ref, computed } from 'vue'
import type { MenuProps } from 'element-plus'
import useDataset from '../utils/use-dataset'
import type { Dataset } from '../utils/use-dataset'

type MenuItem = InstanceType<typeof MenuItem>['$props']

interface Props extends /* @vue-ignore */ MenuProps {
  menus?: MenuItem[]
  dataset?: Dataset | null
}

const props = withDefaults(defineProps<Props>(), {
  dataset: null
})
const emits = defineEmits(['close', 'select', 'open']) // ts 提示
const menuRef = ref() as any
const { options } = useDataset(props) as any
const menusProxy = computed(() => props.menus || options.value)

defineExpose({
  open: (...v: any) => menuRef.value.open(...v),
  close: (...v: any) => menuRef.value.close(...v)
})
</script>
