<template>
  <jg-grid ref="xGrid" v-bind="gridOptions" />
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'

const xGrid = ref()

const gridOptions = reactive({
  pagerConfig: {
    pageSize: 15,
    pageSizes: [15, 30, 50]
  },
  toolbarConfig: {
    refresh: true, // 显示刷新按钮
    import: true, // 显示导入按钮
    export: true, // 显示导出按钮
    print: true, // 显示打印按钮
    zoom: true, // 显示全屏按钮
    custom: true // 显示自定义列按钮
  },
  dataset: {
    api: '/api/getList'
  },
  columns: [
    {
      type: 'checkbox',
      width: '50'
    },
    {
      field: 'vbeln',
      title: '送货单号'
    },

    {
      field: 'ebeln',
      title: '采购单号'
    },
    {
      field: 'matnr',
      title: '物料号'
    },
    {
      field: 'txz01',
      title: '物料描述'
    }
  ]
})

onMounted(() => {})
</script>
