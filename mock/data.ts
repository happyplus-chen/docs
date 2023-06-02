export const treeData = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1'
          }
        ]
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  }
]

export const treeData2 = {
  list:[
    {
      label: 'Level one 1',
      id: '1'
    },
    {
      label: 'Level one 1-1',
      id: '2',
      pid: '1'
    },
    {
      label: 'Level one 1-2',
      id: '3',
      pid: '1'
    },
    {
      label: 'Level one 2',
      id: '22'
    }
  ]
}

const generateData = () => {
  const data: any[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0
    })
  }
  return data
}

export const transferData = generateData()

export const roles = [
  { label: '前端开发', value: '前端' },
  { label: '后端开发', value: '后端' },
  { label: '测试MM', value: '测试' },
  { label: '程序员鼓励师', value: '鼓励师' }
]

export const tableData = [
  { id: '0001', no: '0011', name: 'test1', age: 22, fav: 'wind' },
  { id: '0002', no: '0012', name: 'test2', age: 22, fav: 'wind2' },
  { id: '0003', no: '0013', name: 'test3', age: 22, fav: 'wind3' },
  { id: '0004', no: '0014', name: 'test4', age: 25, fav: 'wind4' },
  { id: '0005', no: '0015', name: 'test5', age: 28, fav: 'wind5' },
  { id: '0006', no: '0016', name: 'test6', age: 32, fav: 'wind6' }
]
export const tableCof = {
  USER: {
    dialogTitle: '用户选择',
    formItems: [
      { prop: 'name', label: '姓名', attrs: { clearable: true } },
      { prop: 'age', label: 'age', attrs: { clearable: true } }
    ],
    tableCols: [
      { type: 'seq', width: 50 },
      { field: 'no', title: '工号' },
      { field: 'name', title: '姓名' },
      { field: 'age', title: 'age' }
    ]
  },
  USER1: {
    dialogTitle: '用户选择2',
    formItems: [
      { prop: 'name', label: '姓名1', attrs: { clearable: true } },
      { prop: 'age', label: 'age1', attrs: { clearable: true } }
    ],
    tableCols: [
      { type: 'seq', width: 50 },
      { field: 'no', title: '工号1' },
      { field: 'name', title: '姓名1' },
      { field: 'age', title: 'age1' }
    ]
  },
  FAV: {
    dialogTitle: '爱好',
    formItems: [
      { prop: 'name', label: '姓名', attrs: { clearable: true } },
      { prop: 'age', label: '爱好', attrs: { clearable: true } }
    ],
    tableCols: [
      { type: 'seq', width: 50 },
      { field: 'no', title: '工号' },
      { field: 'name', title: '姓名' },
      { field: 'fav', title: '爱好' }
    ]
  }
}
