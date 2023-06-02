import { MockMethod } from 'vite-plugin-mock'
import { treeData, treeData2, transferData, roles, tableData, tableCof } from './data'
import { filterConfig, selectPopDatas } from './select-pop-data'

const generateData = ({ length = 10, prefix = 'row-', columns, page }) =>
  Array.from({ length }).map((_, rowIndex) => {
    const row = {}
    const index = (page - 1) * length + rowIndex
    for (const key in columns) {
      row[columns[key]] = `${prefix}${index}-${key}`
    }
    return row
  })

export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return [
        { value: 1, text: 'a' },
        { value: 2, text: 'b' }
      ]
    }
  },
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return [
        { value: 1, text: 'a' },
        { value: 2, text: 'b' }
      ]
    }
  },
  {
    url: '/api/get1',
    method: 'get',
    response: ({ query }) => {
      return [
        { name: 'nameA', id: 1, checked: true },
        { name: 'nameB', id: 2 },
        { name: 'nameC', id: 3, disabled: true }
      ]
    }
  },
  {
    url: '/api/getmenu',
    method: 'get',
    response: ({ query }) => {
      return [
        {
          title: '1 级菜单',
          icon: 'https://element-plus.gitee.io/images/element-plus-logo-small.svg',
          index: '/home-1',
          children: [
            {
              title: '1-1 菜单',
              icon: 'Menu',
              index: '/home-1-1'
            },
            {
              title: '1-2 菜单',
              icon: 'Menu',
              index: '/home-1-2',
              disabled: true
            },
            {
              title: '1-3 菜单',
              icon: 'Menu',
              index: '/home-1-2',
              hidden: true
            }
          ]
        },
        ...Array.from({ length: 5 }).map((v, i) => {
          return {
            title: i + 2 + '级菜单',
            icon: 'Menu',
            index: '/home-' + (i + 2)
          }
        })
      ]
    }
  },
  {
    url: '/api/getpagelist',
    method: 'get',
    response: ({ query }) => {
      return {
        total: 500,
        records: generateData({
          length: query.size,
          page: query.page,
          columns: Array.from({ length: 10 }).map((_, index) => `col-${index}`)
        })
      }
    }
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve(undefined))
      })
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 200
      res.end(`hello, ${reqbody}`)
    }
  },
  {
    url: '/api/getTreeData',
    method: 'get',
    response: ({ query }) => {
      return treeData
    }
  },
  {
    url: '/api/getTreeData2',
    method: 'get',
    response: ({ query }) => {
      console.log(11111)
      return { list: treeData2 }
    }
  },
  {
    url: '/api/getTransferData',
    method: 'get',
    response: () => {
      return {
        list: transferData
      }
    }
  },
  {
    url: '/api/getRoles',
    method: 'get',
    response: ({ query }) => {
      return roles
    }
  },
  {
    url: '/api/getTableData',
    method: 'get',
    response: ({ query }) => {
      return tableData
    }
  },
  {
    url: '/api/getTableCof',
    method: 'get',
    response: ({ params }) => {
      const filterDatas = tableCof[params.selectCode] || null
      return filterDatas
    }
  },
  {
    url: '/api/getQueryObjByNo',
    method: 'get',
    response: ({ query }) => {
      console.log('query...', query.selectNo)
      return filterConfig[query.selectNo] || []
    }
  },
  {
    url: '/api/queryAutoSelectData',
    method: 'post',
    response: ({ body }) => {
      // console.log('body...', body)
      const filter = body.paramMap || {}
      const filterKeys = Object.keys(filter)
      const data = selectPopDatas[body.selectNo]?.list || []
      const filterData = data.filter((item) => {
        return filterKeys.every((key) => {
          return item[key] === undefined || item[key]?.includes(filter[key] || '')
        })
      })
      return filterData
    }
  }
] as MockMethod[]
