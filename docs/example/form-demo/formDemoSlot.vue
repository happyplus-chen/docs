<template>
  <JgForm :data="form.model" :items="form.items">
    <template #component-date>
      <el-button>自定义 slot2</el-button>
    </template>
  </JgForm>
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
