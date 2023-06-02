<template>
  <jg-form-search
    ref="formSearch"
    :data="form.model"
    :items="form.items"
    :form-config="{
      labelWidth: 120,
      labelPosition: 'left'
    }"
    layout="grid"
    collapse-button
    responsive
    @search="search"
    @reset="search"
  />
  <jg-grid ref="xGrid" v-bind="gridOptions" v-on="gridEvent" />
</template>

<script lang="tsx" setup>
import { reactive, ref, getCurrentInstance } from 'vue'
import type { VxeGridInstance } from 'vxe-table'

declare var JgCheckbox: any

const instance = getCurrentInstance()
const { $request } = instance?.appContext.config.globalProperties as any
const xGrid = ref({} as VxeGridInstance)
const form = reactive({
  model: {},
  items: [
    {
      prop: 'planAreaId',
      label: '计划区域',
      required: true,
      attrs: {
        clearable: true
      }
    },
    {
      prop: 'factNos',
      label: '工厂',
      required: true,
      attrs: {
        clearable: true
      },
      selectParam: { selectCode: 'SAP_T001W', selectProp: 'FACT_NO' }
    },
    {
      prop: 'versions',
      label: '版本',
      required: true
      // selectParam: { selectCode: 'SC_MATERIAL_DBT_VERSION', selectProp: 'VERSION_NO' }
    },
    {
      prop: 'whGroupNo',
      label: '仓库组'
      // selectParam: { selectCode: 'P_WAREHOUSE_GROUP', selectProp: 'WH_GROUP_NO', multiple: true }
    },
    {
      prop: 'projectNo',
      label: '项目',
      selectParam: { selectCode: 'P_PROJECT_DEFINE', selectProp: 'PROJECT_NO', multiple: true }
    },
    {
      prop: 'vbeln',
      label: '销售订单号'
      // selectParam: { selectCode: 'SAP_VBAK', selectProp: 'VBELN' }
    },
    {
      prop: 'posnr',
      label: '销售订单行项目'
    },
    {
      prop: 'replaceCode',
      label: '替代组'
      // selectParam: { selectCode: 'MRPC_GROUP_ALTERNATIVE', selectProp: 'ALTERNATIVE_GROUP_CONFIRM' }
    },
    {
      prop: 'dataStatus',
      label: '处理状态',
      component: 'Jg-select',
      attrs: {
        options: [
          { label: '待发布', value: '1' },
          { label: '待审核', value: '2' },
          { label: '待分配', value: '4' },
          { label: '已审核', value: '3' }
        ],
        clearable: true,
        placeholder: '请选择处理状态'
      }
    },
    {
      prop: 'matNo',
      label: '物料'
      // selectParam: { selectCode: 'MATERIALS_SELECT', selectProp: 'MAT_NO', multiple: true }
    },
    {
      prop: 'matkl',
      label: ' 物料组'
      // selectParam: { selectCode: 'MATERIAL_GROUP', selectProp: 'MATKL' }
    },
    {
      prop: 'mtart',
      label: '物料大类'
      // selectParam: { selectCode: 'SAP_T134', selectProp: 'MTART' }
    },
    {
      prop: 'beskz',
      label: '采购类型',
      component: 'Jg-select',
      attrs: {
        options: [
          { label: '自制', value: 'E' },
          { label: '外购', value: 'F' },
          { label: '自制又外购', value: 'X' },
          { label: '没有购买', value: '' }
        ],
        clearable: true
      }
    },
    {
      prop: 'matControllerName',
      label: '物控员'
      // selectParam: { selectCode: 'SAP_T024D', selectProp: 'DISPO' }
    },
    {
      prop: 'buyerName',
      label: '采购员'
      // selectParam: { selectCode: 'P_FACTMAT_PARAMS_PUR', selectProp: 'BUYER_NO' }
    },
    {
      prop: 'specialproertyRmk',
      label: '特殊物料标识',
      component: 'Jg-select',
      attrs: {
        options: [
          { label: '是', value: '1' },
          { label: '否', value: '2' }
        ],
        clearable: true
      }
    },
    {
      prop: 'artificialMark',
      label: '人为调整标识',
      component: 'Jg-select',
      attrs: {
        options: [
          { label: '是', value: '1' },
          { label: '否', value: '0' }
        ],
        clearable: true
      }
    },
    {
      prop: 'timeMark',
      label: '计划单展示日期',
      component: 'Jg-select',
      attrs: {
        options: [
          { label: '需求日期', value: '1' },
          { label: '到货日期', value: '2' }
        ],
        clearable: true
      }
    },
    {
      prop: 'isZore',
      label: '显示需求0的记录',
      component: 'el-switch'
    },
    {
      prop: 'deleRmk',
      label: '显示删除物料',
      component: 'el-switch'
    }
  ]
})

let loadColumn = false
const selectList = ref(['1', '2', '3', '4'])
const typeOptions = [
  { label: '毛需求', value: '1' },
  { label: '净需求', value: '2' },
  { label: '计划未分配', value: '3' },
  { label: '平衡', value: '4' }
]

// 列兼容处理
const getAppendColumns = (
  column: { [x: string]: any; headerName: any; children: any }[],
  width: string | null
) => {
  return column.map(({ headerName, children, ...col }) => {
    const item: any = { ...col, title: headerName }
    if (width) item.width = width
    if (children?.length) {
      item.children = getAppendColumns(children, '100px')
    }
    return item
  })
}

const gridOptions = reactive({
  keepSource: true,
  size: 'small',
  height: 600,
  rowStyle({ row }) {
    return row.background
  },
  columnConfig: {
    minWidth: 80,
    resizable: true
  },
  rowConfig: {
    isHover: true
  },

  pagerConfig: {
    pageSize: 10,
    pageSizes: [5, 10, 15, 30, 100]
  },

  toolbarConfig: {
    buttons: [
      { code: 'insert_actived', name: '新增', status: 'primary' },
      { code: 'delete', name: '删除', status: 'info' },
      { code: 'save', name: '保存', status: 'success' }
    ],
    slots: {
      tools() {
        return [
          <div class="flex-center wk-checkbox">
            <span>显示行：</span>
            <JgCheckbox
              v-model={selectList.value}
              onChange={(value) => {
                const filter = typeOptions.map((item) => ({
                  ...item,
                  checked: value.includes(item.value)
                }))
                xGrid.value.setFilter('rowType', filter)
                xGrid.value.updateData()
              }}
              options={typeOptions}
            />
          </div>
        ]
      }
    },
    refresh: true, // 显示刷新按钮
    zoom: true, // 显示全屏按钮
    custom: true // 显示自定义列按钮
  },
  proxyConfig: {
    seq: true, // 启用动态序号代理，每一页的序号会根据当前页数变化
    sort: true, // 启用排序代理，当点击排序时会自动触发 query 行为
    filter: true, // 启用筛选代理，当点击筛选时会自动触发 query 行为
    form: true, // 启用表单代理，当点击表单提交按钮时会自动触发 reload 行为
    props: {
      // 对应响应结果 Promise<{ result: [], page: { total: 100 } }>
      result: 'list', // 配置响应结果列表字段
      total: 'total' // 配置响应结果总页数字段
    },
    // 只接收Promise，具体实现自由发挥
    ajax: {
      // 当点击工具栏查询按钮或者手动提交指令 query或reload 时会被触发
      query: ({ page, sorts, filters, form }) => {
        const queryParams: any = Object.assign({}, form)

        return $request
          .get(`/api/getdemo01`)
          .then((data: { data: { columns: any; list: any[] } }) => {
            if (!loadColumn) {
              gridOptions.columns.push(...getAppendColumns(data.data.columns, null))
              loadColumn = true
            }
            let tpid: any,
              tp = 0
            data.data.list.forEach((x: { planmId: any; background: { background: string } }) => {
              if (tpid) {
                if (tpid !== x.planmId) {
                  tp++
                  tpid = x.planmId
                }
              } else {
                tpid = x.planmId
                tp = 0
              }
              if (tp % 2 === 0) {
                x.background = { background: '#fff' }
              } else {
                x.background = { background: '#f2f2f2' }
              }
            })
            return data.data
          })
      },
      // 当点击工具栏删除按钮或者手动提交指令 delete 时会被触发
      delete: ({ body }) => {},
      // 当点击工具栏保存按钮或者手动提交指令 save 时会被触发
      save: ({ body }) => {}
    }
  },
  columns: [
    { type: 'checkbox', title: '', width: 60, fixed: 'left' },

    {
      field: 'factNo',
      title: '工厂',
      width: 130,
      fixed: 'left',
      editRender: {
        name: 'JSInput',
        attrs: {
          onChange(val) {
            console.log('val', val)
          },
          onConfirmSelect: (val, rows) => {
            console.log(111111, val, rows)
          },
          selectPopParam: {
            multiple: false,
            selectParam: { selectCode: 'SAP_T001W', selectProp: 'FACT_NO' }
          }
        }
      }
    },
    {
      field: 'whGroupNo',
      title: '仓库组',
      width: 120
    },
    {
      field: 'versionNo',
      title: '版本',
      width: 105,
      fixed: 'left'
    },
    {
      field: 'matVersion',
      title: '小版本',
      width: 80,
      fixed: 'left'
    },
    {
      field: 'matNo',
      title: '物料',
      width: 105,
      fixed: 'left'
    },
    {
      field: 'dataStatus',
      title: '行状态',
      width: 80,
      fixed: 'left',
      editRender: {
        name: 'JSelect',
        attrs: {
          options: [
            { label: '待发布', value: '1' },
            { label: '待审核', value: '2' },
            { label: '已发布', value: '3' },
            { label: '待分配', value: '4' },
            { label: '已分配', value: '4' }
          ]
        }
      }
    },
    {
      field: 'bstmi',
      title: '采购类型',
      width: 135
    },
    {
      field: 'rowType',
      title: '行类别',
      width: 120,
      fixed: 'left',
      filters: typeOptions,
      editRender: {
        name: 'JSelect',
        attrs: {
          options: typeOptions
        }
      }
    },
    {
      field: 'maktx',
      title: '物料描述',
      width: 135
    },
    {
      field: 'deleRmk',
      title: '删除标记',
      width: 135
    },
    {
      field: 'businessTrend',
      title: '业务流向',
      width: 135
    },
    {
      field: 'projectNo',
      title: '项目号',
      width: 120
    },
    {
      field: 'vbeLn',
      title: '销售订单号',
      width: 150
    },
    {
      field: 'posnr',
      title: '销售订单行项目',
      width: 180
    },
    {
      field: 'replaceCode',
      title: '替代组',
      width: 120
    },
    {
      field: 'memo',
      title: '物控备注',
      width: 135
    },
    {
      field: 'projectName',
      title: '项目名称',
      width: 135
    },
    {
      field: 'stockLow',
      title: '库存下限',
      width: 135
    },
    {
      field: 'stockUp',
      title: '库存上限',
      width: 135
    },
    {
      field: 'buyerName',
      title: '责任采购',
      width: 135
    },
    {
      field: 'matControllerName',
      title: '责任物控',
      width: 135
    },
    {
      field: 'werks',
      title: '接收工厂',
      width: 135
    },
    {
      field: 'meins',
      title: '基本单位',
      width: 135
    },
    {
      field: 'pohissumqty',
      title: 'PO历史',
      width: 135
    },
    {
      field: 'poprnotclearqty',
      title: '未清PO',
      width: 135
    },
    {
      field: 'eisbe',
      title: '安全库存',
      width: 135
    },
    {
      field: 'minDays',
      title: '下限天数',
      width: 135
    },
    {
      field: 'maxDays',
      title: '上限天数',
      width: 135
    },
    {
      field: 'purchaseCycle',
      title: '采购周期',
      width: 135
    },
    {
      field: 'transDays',
      title: '运输天数',
      width: 135
    },
    {
      field: 'testDays',
      title: '检验天数',
      width: 135
    },
    {
      field: 'specialproertyText',
      title: '特殊物料属性',
      width: 165
    },
    {
      field: 'maabc',
      title: 'ABC标识',
      width: 150
    },
    {
      field: 'replaceExecuteQuota',
      title: '替代执行配额',
      width: 165
    },
    {
      field: 'bstmi',
      title: '最小起订量',
      width: 150
    },
    {
      field: 'bstrf',
      title: '最小包装量',
      width: 150
    },
    {
      field: 'purleadTime',
      title: '审批提前期',
      width: 150
    },
    {
      field: 'resourceDeveloper',
      title: '资源开发员',
      width: 150
    },
    {
      field: 'matkl',
      title: '物料组',
      width: 120
    },
    {
      field: 'mtart',
      title: '物料大类',
      width: 135
    },
    {
      field: 'quotaStartDate',
      title: '配额开始时间',
      width: 165
    },
    {
      field: 'replaceQuota',
      title: '替代组配额',
      width: 150
    },
    {
      field: 'mekeorderqty',
      title: '工单数量',
      width: 135
    },
    {
      field: 'stockNum',
      title: '库存',
      width: 105
    }
  ],

  exportConfig: {
    modes: ['current', 'selected']
  },
  checkboxConfig: {
    labelField: 'id',
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
    trigger: 'dblclick',
    autoClear: false,
    mode: 'row',
    showStatus: true
  }
})

const gridEvent = {
  checkboxChange({ $grid, rowIndex, row, checked }) {
    const fullData = $grid.getData()
    const group: any[] = []
    for (let index = rowIndex; index > -1; index--) {
      if (fullData[index]['whGroupNo'] !== row['whGroupNo']) {
        break
      } else {
        group.push(fullData[index])
      }
    }
    for (let index = rowIndex + 1; index < fullData.length; index++) {
      if (fullData[index]['whGroupNo'] !== row['whGroupNo']) {
        break
      } else {
        group.push(fullData[index])
      }
    }
    $grid.setCheckboxRow(group, checked)
  }
}

const search = (data) => {
  console.log('form data:', data)
  xGrid.value.commitProxy('est')
}
</script>

<style lang="scss">
.theme-default-content {
  max-width: 100% !important;
}
.wk-demo {
  .el-checkbox {
    margin-right: 10px;
  }
}
</style>
