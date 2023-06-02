<template>
  <el-form
    ref="elFormRef"
    :class="{ 'form-one-line': isCollapse }"
    :model="props.data"
    v-bind="formConfig"
  >
    <form-grid
      v-if="props.layout === 'grid'"
      ref="formItemsRef"
      :items="showItems"
      :model-prop="props.modelProp"
      :view-model="props.viewModel"
      :scope="props.scope"
      :gutter="props.gutter"
      :span="props.span"
      :responsive="props.responsive"
      :responsive-method="props.responsiveMethod"
    >
      <!--实现插槽透传 -->
      <template v-for="(_item, key, index) in formSlots" :key="index" #[key]>
        <slot :name="key"></slot>
      </template>
      <template #append="att">
        <el-col :span="responsive ? att.span : props.span" class="col-btns">
          <btn-group
            v-model:isCollapse="isCollapse"
            :collapse-button="props.collapseButton"
            @search="handleSearch"
            @reset="handleReset"
          >
            <template #append-btn><slot name="append-btn"></slot></template>
          </btn-group>
        </el-col>
      </template>
    </form-grid>
    <form-items
      v-else
      ref="formItemsRef"
      :items="showItems"
      :model-prop="props.modelProp"
      :view-model="props.viewModel"
      :scope="props.scope"
    >
      <!--实现插槽透传 -->
      <template v-for="(_item, key, index) in formSlots" :key="index" #[key]>
        <slot :name="key"></slot>
      </template>
    </form-items>
    <btn-group
      v-if="props.layout !== 'grid'"
      v-model:isCollapse="isCollapse"
      :collapse-button="props.collapseButton"
      @search="handleSearch"
      @reset="handleReset"
    >
      <template #append-btn><slot name="append-btn"></slot></template>
    </btn-group>
  </el-form>
  <select-pop
    v-model="selectPopShow"
    :select-param="selectParam"
    :multiple="selectParam.multiple"
    :form-data="selectParam.formData"
    @select="confimSelect"
  />
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'FormSearch', inheritAttrs: false }
</script>

<script setup lang="ts">
import FormItems from '../form-items'
import FormGrid from '../form-grid'
import SelectPop from '../select-pop'
import { ref, useSlots, watchEffect, h } from 'vue'
import type { FormItemProps } from '../form-item'
import type { FormLayoutContext } from '../utils/use-form-items'
import useSelectPop from './use-select-pop'
import BtnGroup from './btn-group.vue'
import { ElButton } from 'element-plus'

import { useForm } from '../form/use-form'
import useFormGrid from '../utils/use-form-grid'

interface Props {
  layout?: string
  data: Record<string, any>
  formConfig?: Record<string, any>
  showItemsNum?: number
  collapseButton?: boolean
  items: FormItemProps[]
  modelProp?: string
  viewModel?: boolean
  scope?: Record<string, any>
  gutter?: number
  span?: number
  responsive?: boolean
  responsiveMethod?: (width: number) => number
}

const props = withDefaults(defineProps<Props>(), { showItemsNum: 3, layout: 'default' })

const formSlots: FormLayoutContext['slots'] = useSlots()

// 自适应宽度
const elFormRef = ref()
const { resizeSpan } = useFormGrid(props, elFormRef)

// 按钮功能
const emit = defineEmits(['collapse', 'search', 'reset'])
let isCollapse = ref(false)
const showItems = ref([])

watchEffect(() => {
  const arr = props.items.map((item, index) => {
    let slots = { ...item.slots }
    const selectParam = item.selectParam as Record<string, any>
    if (selectParam) {
      const _slots = {
        append: () => {
          return h(
            ElButton,
            {
              icon: selectParam.multiple ? '' : 'Search',
              onClick: () => {
                handleSearchClick(item, selectParam)
              }
            },
            { default: () => (selectParam.multiple ? '多选' : '') }
          )
        }
      }
      slots = { ...slots, ..._slots }
    }
    // 给input输入框添加默认属性，如{clearable: true}
    let attrs = item.attrs as Record<string, any>
    if (
      !item.component ||
      (typeof item.component === 'string' && item.component?.includes('-input'))
    ) {
      attrs = { clearable: true, ...attrs }
    }
    let autoShowItemsNum = 24 / resizeSpan.value - 1
    autoShowItemsNum = autoShowItemsNum === 0 ? 1 : autoShowItemsNum
    const showItemsNum = props.responsive ? autoShowItemsNum : props.showItemsNum
    if ((isCollapse.value && index < showItemsNum) || !isCollapse.value) {
      return { ...item, attrs, hide: false, slots }
    } else {
      return { ...item, attrs, hide: true, slots }
    }
  })
  showItems.value = arr as any
})

function handleSearch() {
  formItemsRef.value?.validate((flag: boolean) => {
    flag && emit('search', JSON.parse(JSON.stringify(props.data)))
  })
}

function handleReset() {
  formItemsRef.value?.resetFields([])
  emit('reset')
}

// 外置方法
const formItemsRef = ref()

// 选择弹窗
const { selectPopShow, selectParam, confimSelect, handleSearchClick } = useSelectPop(props.data)

const methodKeys = ['validate', 'validateField', 'resetFields', 'scrollToField', 'clearValidate']
const funs = useForm(formItemsRef, methodKeys)

defineExpose(funs)
</script>
<style scoped lang="scss">
.form-one-line {
  // display: flex;
  :deep(.el-row) {
    flex-wrap: nowrap;
    .el-col {
      flex-shrink: 1;
    }
    .col-btns {
      max-width: inherit;
    }
  }
}
.el-form {
  :deep(.col-btns) {
    max-width: inherit;
  }
}
</style>
