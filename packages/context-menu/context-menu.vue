<template>
  <teleport v-if="menuData.length > 0" to="body" :disabled="isSubMenu">
    <transition :name="transition">
      <div
        v-show="modelValue"
        :class="[`${$CLS_PREFIX}-context-menu`]"
        :style="menuStyle"
        @mouseleave="hoverIndex = -1"
      >
        <div
          v-for="(item, index) in menuData"
          :key="index"
          :class="[
            `${$CLS_PREFIX}-context-menu-item`,
            item.className,
            { __divided: item.divided, __disabled: item.disabled, __hasicon: hasIcon }
          ]"
          @mouseenter="hoverIndex = index"
        >
          <div :class="[`${$CLS_PREFIX}-menu-item_content`]" @click="onSelect(item, $event)">
            <el-icon
              v-if="item.icon"
              :icon="item.icon"
              :class="[`${$CLS_PREFIX}-context-menu-item_icon`]"
            />
            <span :class="[`${$CLS_PREFIX}-context-menu-item_title`]">{{ item.title }}</span>
            <span :class="[`${$CLS_PREFIX}-context-menu-item_remark`]">{{ item.remark }}</span>
            <el-icon
              v-if="hasSubMenu(item.children)"
              icon="ArrowRight"
              :class="[`${$CLS_PREFIX}-context-menu_arrow`]"
            />
          </div>
          <context-menu
            v-if="hasSubMenu(item.children)"
            :model-value="hoverIndex === index"
            :menus="item.children"
            :transition="transition"
            :x="submenuXY"
            :y="submenuXY"
            @select="onSelect"
          />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'ContextMenu' }
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { $CLS_PREFIX } from '../utils/use-global-const'
import { useZIndex } from 'element-plus/es/hooks/index'

interface MenuItem {
  title: string // 名称
  remark?: string // 备注
  icon?: string // 图标
  divided?: boolean // 分隔下划线
  disabled?: boolean // 禁用
  hidden?: boolean // 隐藏
  children?: MenuItem[] // 下级菜单
  className?: string
}

interface Props {
  modelValue: boolean
  x: number
  y: number
  menus: MenuItem[]
  transition?: string
}

const props = withDefaults(defineProps<Props>(), {
  menus: () => [],
  transition: 'el-zoom-in-top'
})

const emits = defineEmits(['update:modelValue', 'select'])

const { nextZIndex } = useZIndex()
const zIndex = ref(nextZIndex())
const hoverIndex = ref(-1)
const submenuXY = -1000
const isSubMenu = props.x === submenuXY && props.y === submenuXY

const menuStyle = computed(() => {
  const zindexStyle = {
    zIndex: zIndex.value
  }
  const positionStyle = {
    top: props.y + 'px',
    left: props.x + 'px',
    position: 'fixed'
  }
  return isSubMenu ? zindexStyle : { ...zindexStyle, ...positionStyle }
})

const menuData = computed(() => {
  return filterMenu(props.menus)
})

const hasIcon = computed(() => {
  return props.menus.some((v) => v.icon != undefined)
})

function hasSubMenu(menus: MenuItem[] = []) {
  return filterMenu(menus).length > 0
}

function filterMenu(menus: MenuItem[] = []) {
  return menus.filter((v) => v.hidden !== true)
}

function hideMenu() {
  emits('update:modelValue', false)
}

function onSelect(menuItem: MenuItem, e?: MouseEvent) {
  if (hasSubMenu(menuItem.children)) {
    e && e.stopPropagation()
  } else {
    emits('select', menuItem)
  }
}

onMounted(() => {
  document.addEventListener('click', hideMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', hideMenu)
})
</script>

<style lang="scss">
// @import '../theme/vars.scss';
@use '../theme/vars.scss' as *;

.#{$cls-prefix}context-menu {
  --hover-bg: var(--el-menu-hover-bg-color);
  --hover-color: var(--el-menu-hover-text-color);
  --font-size: 13px;

  display: flex;
  flex-direction: column;
  padding: 5px 5px;
  border-radius: 6px;
  user-select: none;
  box-shadow: var(--el-box-shadow-light);
  background-color: var(--el-bg-color);
  min-width: 120px;
}

.#{$cls-prefix}context-menu-item {
  position: relative;
  font-size: var(--font-size);
  color: var(--el-text-color-primary);
  width: 100%;
}

.#{$cls-prefix}menu-item_content {
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 6px;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
}

.#{$cls-prefix}context-menu-item.__divided {
  margin-bottom: 10px;
}

.#{$cls-prefix}context-menu-item.__divided::after {
  position: absolute;
  bottom: -5.5px;
  left: 0;
  display: block;
  width: 100%;
  height: 0;
  content: '';
  border-bottom: 1px solid var(--el-border-color);
}

.#{$cls-prefix}context-menu-item.__disabled {
  cursor: not-allowed;
  color: var(--el-disabled-text-color);
  pointer-events: none;
}

.#{$cls-prefix}context-menu-item:hover > :not(.#{$cls-prefix}context-menu) {
  background-color: var(--hover-bg);
  color: var(--hover-color);
}

.#{$cls-prefix}context-menu-item.__hasicon > .#{$cls-prefix}menu-item_content {
  padding-left: 25px;
}

.#{$cls-prefix}context-menu-item_remark {
  margin-left: 25px;
  font-size: 12px;
  color: var(--el-text-color-placeholder);
}

.#{$cls-prefix}context-menu-item_icon {
  position: absolute !important;
  left: 6px;
}

.#{$cls-prefix}context-menu-item_arrow {
  right: 0px;
}

.#{$cls-prefix}context-menu-item > .#{$cls-prefix}context-menu {
  position: absolute;
  left: 100%;
  top: -5px;
}

.#{$cls-prefix}context-menu-item:hover > .#{$cls-prefix}context-menu {
  display: inline-block;
}
</style>
