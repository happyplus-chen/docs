<template>
    <jg-transfer v-model="value" filterable :dataset="{ api: '/api/getTransferData' }">
      <template #default="{ option }">
        <span>{{ option.key }} - {{ option.label }}</span>
      </template>
      <template #left-footer>
        <el-button class="transfer-footer" size="small">Operation</el-button>
      </template>
      <template #right-footer>
        <el-button class="transfer-footer" size="small">Operation</el-button>
      </template>
    </jg-transfer>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  interface Option {
    key: number
    label: string
    disabled: boolean
  }
  
  const generateData = () => {
    const data: Option[] = []
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `c-Option ${i}`,
        disabled: i % 4 === 0,
      })
    }
    return data
  }
  
  const data = ref<Option[]>(generateData())
  const value = ref([])
  </script>