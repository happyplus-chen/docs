<template>
  <template v-if="hidden !== true">
    <ElSubMenu
      v-if="children && children.length > 0"
      :index="index"
      :disabled="disabled"
      v-bind="getExcludeAttrs(extendPropKeys, $attrs)"
    >
      <template #title>
        <icon v-if="props.icon" :icon="props.icon" />
        <span>{{ props.title }}</span>
      </template>
      <menu-item v-for="(child, i) in children" :key="i" v-bind="child" />
    </ElSubMenu>
    <ElMenuItem v-else :index="index" :disabled="disabled">
      <icon v-if="props.icon" :icon="props.icon" />
      <template #title>
        <span>{{ props.title }}</span>
      </template>
    </ElMenuItem>
  </template>
</template>

<script lang="ts">
export default { name: 'MenuItem', inheritAttrs: false }
</script>

<script setup lang="ts">
import { getExcludeAttrs } from '../utils/utils'
import type { SubMenuProps } from 'element-plus'
import Icon from '../icon'

const extendPropKeys = ['title', 'icon', 'children', 'hidden']

interface MenuItem extends /* @vue-ignore */ Partial<SubMenuProps> {
  index: string
  title: string
  icon?: string
  disabled?: boolean
  hidden?: boolean
  children?: MenuItem[]
}

const props = defineProps<MenuItem>()
</script>
<style></style>
