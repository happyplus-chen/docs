<template>
    <div class="demo">
      <p><b>普通样式</b></p>
      <JgRadio v-model="value" :options="options" :props="{ label: 'name', value: 'id' }" />
      <p><b>按钮样式</b></p>
      <JgRadio v-model="value2" :options="['optionA', 'optionB', 'optionC']" button />
      <p><b>边框样式 dataset</b></p>
      <JgRadio
        v-model="value2"
        :dataset="{ api: '/api/get1' }"
        :props="{ label: 'name', value: 'id' }"
        border
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const value = ref('')
  const value2 = ref('')
  const options = [
    { name: 'nameA', id: 1 },
    { name: 'nameB', id: 2 },
    { name: 'nameC', id: 3, disabled: true }
  ]
  </script>
  