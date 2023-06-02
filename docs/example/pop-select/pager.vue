<template>
  <div class="demo">
    <jg-pop-select
      v-model="value"
      :form-config="formOp"
      :grid-config="gridOp"
      :dataset="dataset"
      :pager-config="true"
      :props="{ value: 'id', label: 'vbeln' }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const value = ref([1379997612992768])

const formOp = reactive({
  data: {},
  items: [
    { prop: 'vbeln', label: '送货单号' },
    { prop: 'ebeln', label: '采购单号' },
    { prop: 'txz01', label: '物料描述' },
    { prop: 'pageSize', label: '记录行数' }
  ]
})

const dataset = {
  api: '/api/getList',
  proxyProps: {
    list: 'data.list',
    total: 'data.total'
  }
}

const gridOp = {
  columns: [
    {
      field: 'vbeln',
      title: '送货单号'
    },
    {
      field: 'matnr',
      title: '物料号'
    },
    {
      field: 'txz01',
      title: '物料描述'
    },
    {
      field: 'dtatus',
      title: '送货单状态'
    }
  ]
}
</script>

<style scoped></style>
