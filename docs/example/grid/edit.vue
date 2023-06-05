<template>
  <jg-grid ref="xGrid" v-bind="gridOptions" />
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()
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
      field: 'vtext',
      title: '输入框',
      editRender: { name: 'Input' },
      width: 150
    },
    {
      field: 'deliQty',
      title: '数字输入',
      editRender: { name: 'InputNumber' },
      width: 150
    },
    {
      field: 'status',
      title: '选择器',
      editRender: {
        name: 'Select',
        options: [
          { value: '1', label: '未开始' },
          { value: '2', label: '进行中' },
          { value: '3', label: '完成' }
        ]
      },
      width: 150
    },
    {
      field: 'createTime',
      title: '时间选择',
      editRender: {
        name: 'TimePicker',
        attrs: {
          valueFormat: 'hh:mm:ss',
          format: 'hh:mm:ss'
        }
      },
      width: 150
    },
    {
      field: 'wadat',
      title: '日期',
      editRender: { name: 'DatePicker', attrs: { valueFormat: 'YYYYMMDD' } },
      width: 150
    },
    {
      field: 'modifyTime',
      title: '下拉时间',
      editRender: { name: 'TimeSelect' },
      width: 150
    },
    {
      field: 'supplierName',
      title: '弹出选择',
      editRender: {
        name: 'PopSelect',
        attrs: {
          props: { value: 'FACT_NAME', label: 'FACT_NAME' },
          gridConfig: {
            columns: [
              {
                field: 'FACT_NO',
                title: '工厂编号',
                width: 80
              },
              {
                field: 'FACT_NAME',
                title: '工厂名称'
              },
              {
                field: 'FACT_ADDR',
                title: '工厂地址'
              }
            ]
          },
          options: [
            {
              FACT_ADDR: '辽宁省沈阳市沈北新区沈北路20-3号-6',
              FACT_NO: '0004',
              FACT_NAME: '合肥比亚迪盛世新景汽车销售有限公司',
              WERKS: '0004'
            },
            {
              FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
              FACT_NO: '1000',
              FACT_NAME: '比亚迪股份总公司工厂',
              WERKS: '1000'
            },
            {
              FACT_ADDR: '宝龙比亚迪内：正大门直行100米',
              FACT_NO: '1001',
              FACT_NAME: '后勤比亚迪股份工厂',
              WERKS: '1001'
            },
            {
              FACT_ADDR: '宝龙比亚迪内：正大门直行100米',
              FACT_NO: '1002',
              FACT_NAME: '后勤精密制造工厂',
              WERKS: '1002'
            },
            {
              FACT_ADDR: '葵涌镇延安路1号比亚迪工业园 A-6#厂房 2楼',
              FACT_NO: '1003',
              FACT_NAME: '比亚迪半导体股份有限公司后勤微电子工厂',
              WERKS: '1003'
            },
            {
              FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
              FACT_NO: '10Z0',
              FACT_NAME: '中研院公共工厂',
              WERKS: '10Z0'
            },
            {
              FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
              FACT_NO: '10Z1',
              FACT_NAME: '中研院应用材料工厂',
              WERKS: '10Z1'
            },
            {
              FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
              FACT_NO: '10Z2',
              FACT_NAME: '中研院金属材料工厂',
              WERKS: '10Z2'
            },
            {
              FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
              FACT_NO: '10Z3',
              FACT_NAME: '中研院导光膜工厂',
              WERKS: '10Z3'
            },
            {
              FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
              FACT_NO: '2000',
              FACT_NAME: '一部股份数字能源工厂',
              WERKS: '2000'
            }
          ]
        }
      },
      width: 150
    },
    {
      field: 'deleted',
      title: '开关',
      editRender: {
        name: 'Switch',
        attrs: {
          activeValue: 'Y',
          inactiveValue: 'N'
        }
      },
      width: 150
    },
    {
      field: 'materialGroupMeaning',
      title: '自动完成',
      editRender: {
        name: 'AutoComplete',
        attrs: {
          fetchSuggestions(itemName, cb) {
            proxy.$request.get('/api/getCreateTypes', { params: { itemName } }).then(({ data }) => {
              cb(data.map((row) => ({ value: row.itemName })))
            })
          }
        }
      },
      width: 150
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
    mode: 'cell',
    showStatus: true
  }
})

onMounted(() => {})
</script>
