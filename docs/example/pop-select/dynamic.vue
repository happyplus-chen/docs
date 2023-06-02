<template>
  <div class="demo">
    <jg-pop-select
      v-model="value"
      :grid-config="gridOp"
      :dataset="dataest"
      :form-config="formOp"
      :pager-config="true"
      :props="{ value: 'id', label: 'vbeln' }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const value = ref(['D9'])
const formOp = reactive({
  data: {},
  items: []
})
const gridOp = {
  columnConfig: {
    minWidth: 120
  },
  columns: []
}
const dataest = {
  api: '/api/getAutoConfig',
  params: {},
  beforeRequest(config) {
    console.log(config)
  },
  afterRequest({ data }) {
    gridOp.columns = data.columns.map((item) => {
      const formItems = formOp.items as any[]
      formOp.items.length > 4 || formItems.unshift({ prop: item.field, label: item.title })
      return { ...item }
    })
  },
  proxyProps: {
    list: 'data.data.list',
    total: 'data.data.total'
  }
}
</script>

<style scoped></style>
