<template>
  <jg-select v-model="value"  placeholder="Select" :options="options"></jg-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    label: '选项A',
    value: 'A',
    options: [
      { label: '选项A-1', value: 'A1' },
      { label: '选项A-2', value: 'A2' }
    ]
  },
  {
    label: '选项B',
    value: 'B',
    options: [
      { label: '选项B-1', value: 'D1' },
      { label: '选项B-2', value: 'D2', disabled: true }
    ]
  }
]
</script>
