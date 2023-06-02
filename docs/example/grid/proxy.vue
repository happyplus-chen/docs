<template>
  <jg-grid ref="xGrid" v-bind="gridOptions" />
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'

const xGrid = ref()

const gridOptions = reactive({
  pagerConfig: {
    pageSize: 10,
    pageSizes: [5, 10, 15, 30, 100]
  },
  toolbarConfig: {
    buttons: [
      { code: 'insert_actived', name: '新增', status: 'primary' },
      { code: 'delete', name: '直接删除', status: 'info' },
      { code: 'mark_cancel', name: '删除/取消', status: 'danger' },
      { code: 'save', name: '保存', status: 'success' }
    ],
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
      title: '送货单号',
      editRender: { name: 'JInput' }
    },

    {
      field: 'ebeln',
      title: '采购单号',
      editRender: { name: 'JInput' }
    },
    {
      field: 'matnr',
      title: '物料号',
      editRender: { name: 'JInput' }
    },
    {
      field: 'txz01',
      title: '物料描述',
      editRender: { name: 'JInput' }
    }
  ],

  editRules: {
    name: [
      { required: true, message: '名称必填' },
      { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }
    ],
    email: [{ required: true, message: '邮件必须填写' }],
    role: [{ required: true, message: '角色必须填写' }]
  },
  editConfig: {
    trigger: 'click',
    mode: 'row',
    showStatus: true
  }
})

onMounted(() => {})
</script>
