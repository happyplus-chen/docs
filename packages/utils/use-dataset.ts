import { reactive, toRefs } from 'vue'
import { getNsObj } from '../utils/utils'

type Transform = {
  parentKey: string
  key: string
  children: string
}

type ProxyProps = {
  list: string
  total: string
  currentPage: string
  pageSize: string
}

export type Dataset = {
  request?: Function
  method?: 'get' | 'post'
  api?: string | Function
  params?: object
  data?: Array<any> | undefined
  beforeRequest?: Function
  afterRequest?: Function
  onBindData?: Function
  transform?: Transform
  errorHandler?: Function
  dataHandler?: Function
  queryKey?: string
  pagerConfig?: PagerInfo | undefined
  proxyProps?: ProxyProps
} | null

type DatasetState = {
  options?: any[]
  total?: number
  currentPage?: number
  pageSize?: number
  loading?: boolean
  onBindData?: Function
}

interface QueryParams {
  query?: string
  page?: boolean
  params?: any
}

export type PagerInfo = {
  currentPage?: number
  pageSize?: number
  total?: number
}

const _dataset = {
  service: null,
  errorHandler: (error: any) => error,
  dataHandler: (data: any) => data,
  proxyProps: {
    // 数据返回映射
    list: 'data.list',
    total: 'data.total',
    // 分页参数生成
    currentPage: 'currentPage',
    pageSize: 'pageSize'
  } as ProxyProps
}

export const setupDataset = (service: any) => {
  _dataset.service = service
}

const transFormToTree = (data: Array<any>, config: Transform): Array<any> => {
  const map: Record<string, any> = {}
  const val: Array<any> = []
  const { parentKey = 'pid', key = 'id', children = 'children' } = config
  data.forEach((item) => {
    map[item[key]] = item
  })
  data.forEach((item) => {
    const parent = map[item[parentKey]]
    if (parent) {
      ;(parent[children] || (parent[children] = [])).push(item)
    } else {
      val.push(item)
    }
  })
  return val
}

const transForm = (data: Array<any>, config: Transform): Array<any> => {
  return config?.key && config?.parentKey ? transFormToTree(data, config) : data
}

export const useDataset = function ({
  dataset,
  options,
  lazyLoad,
  onBindData,
  pagerConfig
}: {
  dataset?: Dataset
  options?: Array<any>
  lazyLoad?: boolean
  onBindData?: Function
  pagerConfig?: boolean
}) {
  const state = reactive({
    options: [],
    total: 100,
    currentPage: 1,
    pageSize: 10,
    loading: false,
    onBindData
  } as DatasetState)

  const {
    data,
    api,
    transform,
    request,
    params: dataSetParam = {},
    method = 'get',
    beforeRequest,
    afterRequest,
    dataHandler,
    errorHandler,
    queryKey = 'query',
    pagerConfig: page,
    proxyProps
  } = dataset || {}
  const $request = request || _dataset.service
  const $dataHandler = dataHandler || _dataset.dataHandler
  const $errorHandler = errorHandler || _dataset.errorHandler

  const pageInfo = (page || pagerConfig) as PagerInfo

  if (pageInfo) {
    state.currentPage = pageInfo.currentPage || 1
    state.pageSize = pageInfo.pageSize || 10
    state.total = pageInfo.total || 0
  }

  const $proxyProps = { ..._dataset.proxyProps, ...proxyProps }

  const getOptions = ({ query, params = {} }: QueryParams = {}) => {
    return new Promise((resolve) => {
      const pageParams: any = {}
      // 主动调用getOptions并且传入page参数，更新分页
      if (params[$proxyProps.currentPage]) {
        state.currentPage = params[$proxyProps.currentPage]
      }

      if (params[$proxyProps.pageSize]) {
        state.pageSize = params[$proxyProps.pageSize]
      }

      if (pageInfo) {
        pageParams[$proxyProps.currentPage] = state.currentPage
        pageParams[$proxyProps.pageSize] = state.pageSize
      }

      const requestParams: any = { ...dataSetParam, ...pageParams, ...params }

      query && (requestParams[queryKey] = query)

      if (api && typeof api === 'function') {
        state.loading = true
        api(requestParams)
          .then((data: any) => {
            state.options = transForm(data, transform as Transform)
          })
          .catch((error: any) => {
            state.options = []
            $errorHandler(error)
          })
          .finally(() => {
            state.loading = false
            resolve(state.options)
          })
      } else if (typeof api === 'string' && $request) {
        const config = {} as any
        config.url = api
        config.method = method

        if (method === 'post') {
          config.data = requestParams
        } else {
          config.params = requestParams
        }

        beforeRequest && beforeRequest(config)
        state.loading = true
        $request(config)
          .then((data: any) => {
            afterRequest && afterRequest(data, state)

            const afterData = $dataHandler(data)
            state.options = transForm(
              getNsObj(afterData, $proxyProps.list) as Array<any>,
              transform as Transform
            )
            state.total = getNsObj(afterData, $proxyProps.total)
            onBindData?.(state)
          })
          .catch((error: any) => {
            state.options = []
            $errorHandler(error)
          })
          .finally(() => {
            state.loading = false
            resolve(state.options)
          })
      } else {
        state.options = []
        resolve(state.options)
      }
    })
  }

  const setState = (data: any) => {
    Object.assign(state, data)
  }

  if (!dataset && Array.isArray(options)) {
    state.options = options
  } else if (Array.isArray(data)) {
    state.options = transForm(data, transform as Transform)
  } else {
    lazyLoad || getOptions({})
  }

  return { ...toRefs(state), getOptions, setState }
}

export const useDatasetWithout = (dataset) => {
  return useDataset({ dataset })
}

export default useDataset
