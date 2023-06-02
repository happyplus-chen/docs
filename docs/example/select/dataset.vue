<template>
  <jg-select
    v-model="value"
    placeholder="Select"
    :dataset="{ api: '/api/getCreateTypes', proxyProps: { list: 'data' } }"
    :props="{ label: 'itemName', value: 'itemValue' }"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
