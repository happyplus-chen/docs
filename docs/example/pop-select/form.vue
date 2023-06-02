<template>
  <div class="demo">
    <jg-pop-select
      v-model="value"
      :dataset="dataset"
      :grid-config="gridOp"
      :form-config="formOp"
      :props="{ value: 'vbeln', label: 'vbeln' }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const value = ref(['1001'])

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
      field: 'ebeln',
      title: '采购单号'
    },
    {
      field: 'txz01',
      title: '物料描述'
    }
  ]
}
</script>

<style scoped></style>
