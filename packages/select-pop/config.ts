import type { Dataset } from '../utils/use-dataset'

export const tableDataset: Dataset = {
  api: '/api/queryAutoSelectData',
  method: 'post',
  dataHandler(data) {
    return {
      data: data?.data || []
    }
  },
  proxyProps: {
    list: 'data',
    total: 'data.total',
    // 分页参数生成
    currentPage: 'currentPage',
    pageSize: 'pageSize'
  }
}

export const configDataset: Dataset = {
  api: '/api/getQueryObjByNo',
  proxyProps: {
    list: 'data',
    total: 'data.total',
    // 分页参数生成
    currentPage: 'currentPage',
    pageSize: 'pageSize'
  },
  dataHandler(data) {
    const datas = data?.data || {}
    const formItems = datas.formItems?.map((item) => {
      return {
        label: item.filterName,
        prop: item.sqlValueNo
      }
    })
    const tableColumns = datas.tableColumns?.map((item) => {
      return {
        title: item.columnName,
        field: item.columnNo
      }
    })
    return {
      data: {
        dialogTitle: datas.dialogTitle,
        formItems: formItems,
        tableColumns: tableColumns
      }
    }
  }
}

/**
 *
 * @param data 表单数据
 * @param code 唯一code
 * @param otherParams 其他参数，取请求配置返回的数据
 * @returns
 */
export function getQueryDataParams(data, code, otherParams) {
  return {
    pageNum: 1,
    pageSize: 100,
    paramMap: data,
    selectNo: code,
    ...otherParams
  }
}

export function getConfigDataParams(code) {
  return {
    selectNo: code
  }
}
