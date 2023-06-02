<template>
  <jg-grid ref="xGrid" v-bind="gridOptions" v-on="gridEvent" />
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const xGrid = ref()

const gridOptions = reactive({
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
  ],
  data: Array.from({ length: 15 }, (_, j) => {
    const genIndex = String(j).padStart(2, '0')
    return {
      id: 1380278185400576 + j,
      vbeln: 'N2305000000001' + genIndex,
      ebeln: '59058094' + genIndex,
      matnr: '10029353-' + genIndex,
      txz01: 'IB5-1001400_动力总成后悬置安装支架_M0000' + j
    }
  }),

  checkboxConfig: {
    reserve: true,
    highlight: true,
    range: true
  },
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

const gridEvent = {
  proxyQuery() {
    console.log('数据代理查询事件')
  },
  proxyDelete() {
    console.log('数据代理删除事件')
  },
  proxySave() {
    console.log('数据代理保存事件')
  },
  toolbarButtonClick({ code, $event }: any) {
    if (code === 'test') {
      console.log($event)
      console.log(xGrid.value)
    }
  }
}
</script>
