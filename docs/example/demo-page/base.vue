<template>
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
      @reset="search"
    />
    <jg-grid ref="xGrid" v-bind="gridOptions" v-on="gridEvent" />
  </template>
  
  <script lang="tsx" setup>
  import { computed, reactive, ref } from 'vue'
  import type { VxeGridInstance } from 'vxe-table'
  import { useDatasetWithout } from 'JUI'
  console.log(useDatasetWithout, 123123)
  const serveApiUrl = 'https://api.vxetable.cn/demo'
  const xGrid = ref({} as VxeGridInstance)
  const { options: globalOptions } = useDatasetWithout({ api: '/api/getRoles' })
  const form = reactive({
    model: {
      planMonth: '2023-03',
      factNo: 'A155'
    },
    //搜索组件
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
      },
      {
        prop: 'venderNo',
        label: '供应商'
      },
      {
        prop: 'matNo',
        label: '物料'
      },
      {
        prop: 'matGroupNo',
        label: '物料组'
      },
      {
        prop: 'typeNo',
        label: '物料大类',
        component: 'Jg-select',
        attrs: {
          options: [
            { label: 'Zone one', value: 'shanghai' },
            { label: 'Zone two', value: 'beijing' }
          ],
          clearable: true,
          placeholder: '请选择物料大类'
        }
      },
      {
        prop: 'buyerNo',
        label: '采购员'
      },
      {
        prop: 'mcNo',
        label: '物控员'
      },
      {
        prop: 'whGroupNo',
        label: '仓库组'
      },
      {
        prop: 'orderDate',
        label: '建议下单日期',
        component: 'el-date-picker',
        attrs: {
          valueFormat: 'YYYY-MM-DD HH:mm:ss',
          type: 'datetimerange'
        }
      },
      {
        prop: 'arrivalDate',
        label: '到货日期'
      },
      {
        prop: 'purTimeStart',
        label: '采购周期范围',
        component: 'Jg-number-range'
      },
      {
        prop: 'compressDayStart',
        label: '交期压缩天数'
      }
    ]
  })
  const girlfriendsArr = [
    { label: 'Angelababy', value: 1 },
    { label: '林允儿', value: 2 },
    { label: '迪丽热巴', value: 3 },
    { label: '欧阳娜娜', value: 4 },
    { label: '小沈阳', value: 5 },
    { label: '潘长江', value: 6 }
  ]
  //按钮配置
  // const buttonsConfig = [
  //   {
  //     label: '点击获取',
  //     type: 'success',
  //     onClick: () => {
  //       ElMessage.success('内网通到账100w元子')
  //     }
  //   },
  //   {
  //     label: '点击获取',
  //     type: 'warning',
  //     onClick: () => {
  //       ElMessage.warning('你太贪心了')
  //     }
  //   },
  //   {
  //     label: '点击获取',
  //     type: 'danger',
  //     onClick: () => {
  //       ElMessage.error('你妈喊你回家吃饭')
  //     }
  //   }
  // ]
  const gridOptions = reactive({
    keepSource: true,
    height: 600,
    rowConfig: {
      isHover: true
    },
    columnConfig: {
      minWidth: 120
    },
    pagerConfig: {
      pageSize: 10,
      pageSizes: [5, 10, 15, 30, 100]
    },
  
    toolbarConfig: {
      buttons: [
        { code: 'insert_actived', name: '新增', status: 'primary' },
        { code: 'delete', name: '直接删除', status: 'info' },
        { code: 'mark_cancel', name: '删除/取消', status: 'danger' },
        { code: 'save', name: '保存', status: 'success' },
        { code: 'test', name: '测试', status: 'primary' }
      ],
      refresh: true, // 显示刷新按钮
      export: true, // 显示导出按钮
      print: true, // 显示打印按钮
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
        result: 'result', // 配置响应结果列表字段
        total: 'page.total' // 配置响应结果总页数字段
      },
      // 只接收Promise，具体实现自由发挥
      ajax: {
        // 当点击工具栏查询按钮或者手动提交指令 query或reload 时会被触发
        query: ({ page, sorts, filters, form }) => {
          const queryParams: any = Object.assign({}, form)
          // 处理排序条件
          const firstSort = sorts[0]
          if (firstSort) {
            queryParams.sort = firstSort.field
            queryParams.order = firstSort.order
          }
          // 处理筛选条件
          filters.forEach(({ field, values }) => {
            queryParams[field] = values.join(',')
          })
          return fetch(`${serveApiUrl}/api/pub/page/list/${page.pageSize}/${page.currentPage}`).then(
            (response) => response.json()
          )
        },
        // 当点击工具栏删除按钮或者手动提交指令 delete 时会被触发
        delete: ({ body }) => {
          return fetch(`${serveApiUrl}/api/pub/save`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          }).then((response) => response.json())
        },
        // 当点击工具栏保存按钮或者手动提交指令 save 时会被触发
        save: ({ body }) => {
          return fetch(`${serveApiUrl}/api/pub/save`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          }).then((response) => response.json())
        }
      }
    },
    columns: [
      { type: 'checkbox', title: 'ID', width: 120 },
      {
        field: 'name',
        title: 'Name',
        sortable: true,
        editRender: { name: 'input', attrs: { placeholder: '请输入名称' } }
      },
      {
        field: 'age',
        title: 'Age',
        visible: true,
        sortable: true,
        editRender: { name: 'JInput', attrs: { type: 'number', min: 1, max: 120 } }
      },
      {
        field: 'birthday ',
        title: '破壳日',
        width: 120,
        visible: true,
        sortable: true,
        formatter: 'formatDate',
        editRender: {
          name: 'JDatePicker',
          attrs: {
            type: 'date',
            placeholder: 'Pick a day',
            format: 'YYYY-MM-DD',
            valueFormat: 'YYYY-MM-DD'
          }
        }
      },
      {
        field: 'switch',
        title: 'Switch',
        sortable: true,
        editRender: {
          name: 'JSwitch'
        }
      },
      // {
      //   field: 'bwh',
      //   title: 'B.W.H',
      //   editRender: {
      //     name: 'JselectPop',
      //     attrs: {
      //       dialogTitle: '选择你的三围',
      //       dataset: { api: '/api/getTableData', params: { pageSize: 11 } },
      //       formData: {
      //         name: 'test',
      //         age: ''
      //       },
      //       formItems: [
      //         { prop: 'name', label: '姓名' },
      //         { prop: 'age', label: 'age' }
      //       ],
      //       tableColumns: [
      //         { type: 'seq', width: 50 },
      //         { field: 'no', title: '臀' },
      //         { field: 'name', title: '🐻' },
      //         { field: 'age', title: '腰' }
      //       ],
      //       onSelect(row) {
      //         ElMessage.success(row)
      //       }
      //     }
      //   }
      // },
      {
        field: 'role',
        title: 'Role',
        sortable: true,
        filters: globalOptions,
        filterMultiple: false,
        editRender: {
          name: 'JSelect',
          attrs: {
            placeholder: '请输入角色',
            // dataset: {
            //   api: '/api/getRoles'
            // }
            options: globalOptions
          }
        }
      },
      {
        field: 'email',
        title: 'Email',
        width: 160,
        editRender: { name: 'input', props: { placeholder: '请输入邮件' } }
      },
      {
        field: 'girlfriends',
        title: 'Girlfriends',
        filters: girlfriendsArr,
        editRender: {
          name: 'JSelect',
          attrs: { placeholder: '请选择', multiple: true },
          options: girlfriendsArr
        }
      },
      {
        field: 'sex',
        title: 'Sex',
        filters: [
          { label: '男', value: '1' },
          { label: '女', value: '0' }
        ],
        editRender: {
          name: 'JSelect',
          attrs: {
            options: [
              { label: '男', value: '1' },
              { label: '女', value: '0' }
            ],
            onVisibleChange(visible: boolean) {
              console.log('visible-change', visible)
            },
            onChange() {
              console.log(xGrid.value.getCurrentRecord())
              console.log(xGrid.value.getCurrentColumn())
            }
          }
        }
      },
      {
        field: 'length',
        title: 'Length(cm)',
        editRender: { name: 'JNumberRange', attrs: { defaultText: '-' } }
      },
      {
        field: 'myLength',
        title: 'MyLength(cm)',
        width: 150,
        editRender: { name: 'Jnumber', attrs: { min: 1, max: 5 } }
      },
  
      {
        field: 'amount',
        title: 'Amount',
        width: 200,
        editRender: {
          name: 'JRate',
          attrs: {
            clearable: true,
            onChange(value: any) {
              console.log('cell change', value)
            },
            onInput(value: string) {
              console.log('cell input', value)
              console.log(xGrid.value.getCurrentRecord())
              console.log(xGrid.value.getCurrentColumn())
            }
          }
        },
        cellRender: {
          name: 'JRate'
        }
      },
      //单按钮配置
      // {
      //   field: '$1',
      //   title: '点我获取十个老婆',
      //   editRender: {
      //     name: 'Jbutton',
      //     attrs: {
      //       label: '我要十个老婆',
      //       type: 'info',
      //       plain: true,
      //       onClick: () => {
      //         ElMessage.success('十个老婆获取成功')
      //       }
      //     }
      //   }
      // },
      //多按钮配置实例,改为插槽自己写
      // {
      //   field: '$2',
      //   title: '点我获取一百万',
      //   editRender: {
      //     name: 'Jbutton',
      //     attrs: {
      //       multiple: true, //开启多按钮
      //       //多按钮配置,数组给我就行
      //       config: buttonsConfig
      //     }
      //   }
      // },
      {
        field: 'updateDate',
        title: 'Update Date',
        width: 160,
        visible: false,
        sortable: true
      },
      {
        field: 'createDate',
        title: 'Create Date',
        width: 160,
        visible: false,
        sortable: true
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
        { min: 2, max: 50, message: '名称长度在 2 到 50 个字符' }
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
  
  const search = () => {
    xGrid.value.commitProxy('est')
  }
  </script>
  
  <style>
  .theme-default-content {
    max-width: 100% !important;
  }
  </style>
  