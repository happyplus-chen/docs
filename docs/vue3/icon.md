# icon

## element-plus 图标

参考 [element-plus](https://element-plus.org/zh-CN/component/icon.html)

## 自定义图标

1. 将 svg 文件放到 `src\assets\svgs` 目录下

2. 在 Vue 文件中 使用 Icon 组件，配置属性 `icon`为 `svg-icon + svg文件名`

Icon 组件实现如下，该组件已经全局注册

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { ElIcon } from 'element-plus'
import { propTypes } from '@/utils/propTypes'
import { useDesign } from '@/hooks/web/useDesign'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('icon')

const props = defineProps({
  // icon name
  icon: propTypes.string,
  // icon color
  color: propTypes.string,
  // icon size
  size: propTypes.number.def(16),
})

const symbolId = computed(() => {
  return `#icon-${props.icon.split('svg-icon:')[1]}`
})
</script>

<template>
  <ElIcon :class="prefixCls" :size="size" :color="color">
    <svg v-if="symbolId" aria-hidden="true">
      <use :xlink:href="symbolId || ''" />
    </svg>
  </ElIcon>
</template>
```
