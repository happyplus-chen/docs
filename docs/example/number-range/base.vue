<template>
    <div class="demo">
      <p><b>基础用法</b></p>
      <div class="number-range">
        <JgNumberRange v-model="value" />
      </div>
      <p><b>禁用</b></p>
      <div class="number-range">
        <JgNumberRange v-model="value" :disabled="true" />
      </div>
      <p><b>输入数值精度</b></p>
      <div class="number-range">
        <JgNumberRange v-model="value2" :precision="3" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const value = ref([])
  const value2 = ref([])
  </script>
  <style scoped lang="scss">
  .number-range {
    width: 240px;
  }
  </style>
  