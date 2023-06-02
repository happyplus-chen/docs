<template>
  <ElForm :model="form.model" label-width="auto" class="demo __fullwidth">
    <JgFormItems :items="form.items">
      <template #component-date>
        <el-button>自定义 slot2</el-button>
      </template>
    </JgFormItems>
  </ElForm>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'

const form = reactive({
  model: {},
  items: [
    {
      label: () => <el-tag>自定义 label</el-tag>,
      component: () => <el-button>自定义 slot1</el-button>
    },
    {
      label: '模板插槽',
      component: 'component-date'
    },
    {
      label: '组件子插槽',
      component: 'el-input',
      slots: {
        prepend: () => 'http://',
        append: () => '.com'
      }
    }
  ]
})
</script>
