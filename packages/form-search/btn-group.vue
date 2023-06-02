<template>
  <el-form-item class="btn-group" label-width="0">
    <el-button
      v-if="props.collapseButton"
      :collapse="isCollapse"
      :icon="isCollapse ? 'ArrowDownBold' : 'ArrowUpBold'"
      circle
      @click="handleCollapse"
    />
    <el-button type="primary" plain icon="search" @click="handleSearch">{{
      locale.search
    }}</el-button>
    <el-button icon="refresh-right" @click="handleReset">{{ locale.reset }}</el-button>
    <slot name="append-btn"></slot>
  </el-form-item>
</template>

<script setup lang="ts">
import useLocale from '../utils/use-locale'
interface Props {
  collapseButton?: boolean
  isCollapse?: boolean
}
const locale = useLocale({
  'zh-cn': {
    search: '搜索',
    reset: '重置'
  },
  en: {
    search: 'search',
    reset: 'reset'
  }
})

const props = withDefaults(defineProps<Props>(), {})

// 按钮功能
const emit = defineEmits(['collapse', 'search', 'reset', 'update:isCollapse'])
function handleCollapse() {
  emit('update:isCollapse', !props.isCollapse)
}
function handleSearch() {
  emit('search')
}

function handleReset() {
  emit('reset')
}
</script>
<style scoped lang="scss">
.btn-group {
  :deep(.el-form-item__content) {
    flex-wrap: nowrap;
  }
}
</style>
