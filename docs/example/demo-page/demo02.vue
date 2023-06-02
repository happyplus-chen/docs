<template>
  <div class="wk-demo">
    <jg-form-search
      ref="formSearch"
      :data="form.model"
      :items="form.items"
      label-width="120"
      layout="grid"
      :collapse-button="false"
      :show-items-num="3"
      :span="8"
      @search="search"
      @reset="search" />
    <jg-grid ref="xGrid" v-bind="gridOptions" v-on="gridEvent"
  /></div>
</template>

<script lang="tsx" setup>
import { computed, reactive, ref, getCurrentInstance } from 'vue'
import type { VxeGridInstance } from 'vxe-table'

const instance = getCurrentInstance()
const { $request } = instance?.appContext.config.globalProperties as any
const xGrid = ref({} as VxeGridInstance)

const genarateValideRule = (queryType, useQueryField, selectParamsFn?: Function) => {
  return function ({ cellValue, row, column }) {
    const initialParams = (selectParamsFn && selectParamsFn(row)) || {}
    const realParams = {}
    for (let key in initialParams) {
      if (initialParams[key]) {
        realParams[key] = initialParams[key]
      }
    }
    const args = {
      selectNo: queryType,
      paramMap: Object.assign(
        {
          [useQueryField]: cellValue
        },
        realParams
      ),
      paramTypeMap: Object.assign(
        {
          [useQueryField]: 'EQ'
        },
        ...Object.keys(realParams).map((i) => ({ [i]: 'EQ' }))
      )
    }
    return new Promise((resolve, reject) => {
      $request.post(`/api/msp-admin/autoselect/queryAutoSelectDataByNo`, args).then(({ data }) => {
        if (data.code === '000000') {
          const { list } = data.data
          if (!list.length) {
            reject(new Error(`${cellValue}不存在或已停用！`))
          } else {
            resolve(true)
          }
        } else {
          reject(new Error('校验查询对象失败，请稍后再试'))
        }
      })
    })
  }
}

const form = reactive({
  model: {
    planMonth: '2023-03',
    factNo: 'A155'
  },
  items: [
    {
      prop: 'factNo',
      label: '工厂',
      required: true,
      attrs: {
        clearable: true,
        disabled: computed(() => !!form.model.dbtVersion as boolean),
        onInput(value: string) {
          form.model.venderNo = value
        }
      }
    },
    {
      prop: 'planMonth',
      label: '采购计划月份',
      required: true,
      component: 'el-date-picker',
      attrs: {
        valueFormat: 'YYYY-MM',
        type: 'month'
      }
    },
    {
      prop: 'dbtVersion',
      label: 'DBT版本'
    }
  ]
})

let loadColumn = false
let emptyRow = {}
const P_POWER = ref([])

// 列兼容处理
const getAppendColumns = (
  column: { [x: string]: any; headerName: any; children: any }[],
  width: string | null
) => {
  return column.map(({ headerName, children, ...col }) => {
    const item: any = { title: headerName, editRender: { name: 'input' } }
    if (width) item.width = width
    if (children?.length) {
      item.children = getAppendColumns(children, '100px')
    }
    return item
  })
}

const gridOptions = reactive({
  keepSource: true,
  autoLoad: false,
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
      { code: 'insertDefault', name: '新增', status: 'primary' },
      { code: 'delete', name: '直接删除', status: 'info' },
      { code: 'mark_cancel', name: '删除/取消', status: 'danger' },
      { code: 'valide', name: '保存', status: 'success' },
      { code: 'test', name: '测试', status: 'primary' }
    ],

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

        return (
          $request
            .post(`/api/byd-center-plan/materialNeedPlanCreate/create`, {
              pageNum: 1,
              pageSize: 50,
              depNo: 'D07',
              version: '20230524',
              planAreaNo: 'D0701',
              days: '3',
              weeks: '',
              months: '',
              demandType: 'D'
            })
            // return $request.get(`/api/getdemo02/data`)
            .then((data: any) => {
              if (!loadColumn) {
                gridOptions.columns.push(...getAppendColumns(data.data.data.columns, null))
                loadColumn = true
              }
              emptyRow = JSON.parse(JSON.stringify(data.data?.data?.list?.[0] || {}))
              return data.data.data
            })
        )
      },
      delete: ({ body }) => {},
      save: ({ body }) => {}
    }
  },
  columns: [
    { type: 'checkbox', title: '', width: 50, fixed: 'left' },
    {
      title: '',
      children: [
        {
          field: 'depNo',
          title: '事业部',
          width: '100px'
        },
        {
          field: 'planAreaNo',
          title: '计划区域',
          width: '100px'
        },
        {
          field: 'version',
          title: '版本',
          width: '100px'
        },
        {
          field: 'modifyVersion',
          title: '修改版本',
          width: '100px'
        },
        {
          field: 'demandType',
          title: '需求类型',
          cellRender: {
            name: 'JSelect',
            attrs: {
              options: [
                { value: 'M', label: '中长期' },
                { value: 'D', label: '短期' }
              ]
            }
          },
          width: '100px'
        },
        {
          field: 'supplyFact',
          title: '供货工厂',
          width: 120,
          editRender: {
            name: 'JSInput',
            events: {
              confirmSelect({ row }, val, rows) {
                const data = rows[0]
                Object.assign(row, {
                  demandFactNo: data.R_FACT_NO,
                  carSeries: data.CHEXI,
                  carType: data.CHEXING,
                  platformNo: data.PLATFORM_NO,
                  supplyFact: data.FACT_NO_O,
                  prodFact: data.S_WERKS,
                  matNo: data.MAT_NO,
                  supplyBase: data.P_BASE_NO, // 供货基地
                  supplyBaseDesc: data.P_BASE_NAME,
                  demandBase: data.R_BASE_NO,
                  prodBase: data.K_BASE_NO,
                  prodBaseDesc: data.K_BASE_NAME,
                  matDesc: data.MAT_DESC,
                  demandBaseName: data.R_BASE_NAME
                })
              }
            },
            attrs: {
              selectPopParam: {
                multiple: false,
                selectParam: { selectCode: 'R_FACT_NO', selectProp: 'FACT_NO_O' }
              }
            }
          }
        },
        {
          field: 'supplyBase',
          title: '供货基地',
          width: '100px'
        },
        {
          field: 'supplyBaseDesc',
          title: '供货基地名称',
          width: '100px'
        },
        {
          field: 'demandFactNo',
          title: '需求工厂',
          editRender: {
            name: 'JSInput',
            attrs: {
              selectPopParam: {
                multiple: false,
                selectParam: { selectCode: 'R_FACT_NO', selectProp: 'R_FACT_NO' }
              }
            }
          },
          width: 120
        },
        {
          field: 'demandBase',
          title: '需求基地代码',
          width: '100px'
        },
        {
          field: 'demandBaseName',
          title: '需求基地名称',
          width: '100px'
        },
        {
          field: 'carSeries',
          title: '车系',
          editRender: {
            name: 'JSInput',
            attrs: {
              selectPopParam: {
                multiple: false,
                selectParam: { selectCode: 'R_FACT_NO', selectProp: 'CHEXI' }
              }
            }
          },
          width: '100px'
        },
        {
          field: 'carType',
          title: '车型',
          editRender: {
            name: 'JSInput',
            events: {
              change(params, args) {
                console.log('carTypeChange', params, args)
              }
            },
            attrs: {
              onChange(params, args) {
                console.log(params, args)
              },
              selectPopParam: {
                multiple: false,
                selectParam: { selectCode: 'R_FACT_NO', selectProp: 'CHEXING' }
              }
            }
          },
          width: '100px'
        },
        {
          field: 'powerType',
          title: '动力类型',
          editRender: {
            name: 'JSelect',
            attrs: {
              options: P_POWER
            }
          },
          width: '120px'
        },
        {
          field: 'prodFact',
          title: '生产工厂',
          editRender: {
            name: 'JSInput',
            attrs: {
              selectPopParam: {
                multiple: false,
                selectParam: { selectCode: 'R_FACT_NO', selectProp: 'S_WERKS' }
              }
            }
          },
          width: '120px'
        },
        {
          field: 'prodBase',
          title: '生产基地代码',
          width: '100px'
        },
        {
          field: 'prodBaseDesc',
          title: '生产基地名称',
          width: '100px'
        },
        {
          field: 'customerNo',
          title: '客户',
          editRender: {
            name: 'JSInput',
            attrs: {
              selectPopParam: {
                multiple: false,
                selectParam: { selectCode: 'SAP_KNA1', selectProp: 'CUST_NO' }
              }
            }
          },
          width: '100px'
        },
        {
          field: 'customerName',
          title: '客户名称',
          width: '100px'
        },
        {
          field: 'matNo',
          title: '物料',
          editRender: {
            name: 'JSInput',
            attrs: {
              selectPopParam: {
                multiple: false,
                selectParam: { selectCode: 'R_FACT_NO', selectProp: 'MAT_NO' }
              }
            }
          },
          width: '100px'
        },
        {
          field: 'matDesc',
          title: '物料描述',
          width: '100px'
        },
        {
          field: 'prodVersion',
          title: '生产版本',
          editRender: {
            name: 'JSInput',
            attrs: {
              selectPopParam: {
                multiple: false,
                selectParam: { selectCode: 'PROD_VERSION', selectProp: 'VERID' }
              }
            }
          },
          width: '120px'
        },
        {
          field: 'bomSelectNo',
          title: 'BOM可选号',
          width: '100px'
        },
        {
          field: 'projectNo',
          title: '项目',
          editRender: {
            name: 'input'
          },
          width: '100px'
        },
        {
          field: 'projectName',
          title: '项目名称',
          width: '100px'
        },
        {
          field: 'wareHouseNo',
          title: '仓库组',
          editRender: {
            name: 'JSInput',
            attrs: {
              selectPopParam: {
                multiple: false,
                selectParam: { selectCode: 'P_WAREHOUSE_GROUP', selectProp: 'WH_GROUP_NO' }
              }
            }
          },
          width: '100px'
        },
        {
          field: 'wareHouseName',
          title: '仓库组名称',
          width: '100px'
        },
        {
          field: 'status',
          title: '状态',
          formatter({ value }) {
            return value || '--'
          },
          width: '100px'
        },
        {
          field: 'modifyUser',
          title: '修改人',
          width: '100px'
        },
        {
          field: 'modifyDate',
          title: '修改时间',
          width: '100px'
        }
      ]
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
    supplyFact: [
      {
        required: true,
        message: '不能为空'
      },
      {
        validator: genarateValideRule('R_FACT_NO', 'R_FACT_NO', (row) => {
          return {
            DIV_NO: row.depNo, // 事业部
            // R_FACT_NO: params.data.demandFactNo, // 需求工厂
            CHEXI: row.carSeries, // 车系
            CHEXING: row.carType, // 车型
            FACT_NO_O: row.supplyFact, // 供货工厂
            S_WERKS: row.prodFact, // 生产工厂
            PLATFORM_NO: row.platformNo, // 平台
            MAT_NO: row.matNo, // 物料
            PLAN_AREA_ID: row.planAreaNo // 计划区域ID}
          }
        })
      }
    ],
    demandFactNo: [
      {
        required: true,
        message: '不能为空'
      }
    ],
    carSeries: [
      {
        required: true,
        message: '不能为空'
      }
    ],
    carType: [
      {
        required: true,
        message: '不能为空'
      }
    ],
    powerType: [
      {
        required: true,
        message: '不能为空'
      }
    ],
    prodFact: [
      {
        required: true,
        message: '不能为空'
      }
    ],
    customerNo: [
      {
        required: true,
        message: '不能为空'
      }
    ],
    matNo: [
      {
        required: true,
        message: '不能为空'
      }
    ],
    prodVersion: [
      {
        required: true,
        message: '不能为空'
      }
    ],
    projectNo: [
      {
        required: true,
        message: '不能为空'
      }
    ],
    wareHouseNo: [
      {
        required: true,
        message: '不能为空'
      }
    ]
  },
  editConfig: {
    trigger: 'click',
    mode: 'row',
    showStatus: true
  }
})

const gridEvent = {
  checkboxChange({ $grid, rowIndex, row, checked }) {},
  async toolbarButtonClick({ code, $event }: any) {
    const $table = xGrid.value
    if (code === 'test') {
      console.log(xGrid.value)
    }
    if (code === 'insertDefault') {
      if ($table) {
        const { row: newRow } = await $table.insert(emptyRow)
        await $table.setEditCell(newRow, 'supplyFact')
      }
    }
    if (code === 'valide') {
      const errMap = await $table.fullValidate()
      console.log(errMap)
    }
  }
}

const initDict = () => {
  $request
    .get(`/api/msp-admin/colm/queryMxMapByColNos?colNos=PS_DEP_STATUS,P_POWER`)
    .then((data: any) => {
      P_POWER.value = data.data.data.P_POWER.map(({ itemName, itemValue }) => ({
        value: itemValue,
        label: itemName
      }))
    })
}

initDict()

const search = () => {
  // initTable()
}
</script>

<style lang="scss" scoped>
.wk-demo {
  .el-checkbox {
    margin-right: 5px !important;
  }
}
</style>
