<template>
  <JgSelect
    v-model="value"
    filterable
    remote
    :lazy-load="true"
    :dataset="{ api: '/api/getCreateTypes', queryKey: 'itemName', proxyProps: { list: 'data' } }"
    :props="{ label: 'itemName', value: 'itemValue' }"
    @visible-change="visibleChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const visibleChange = (v: boolean) => {
  console.log('visibleChange', v)
}
</script>
