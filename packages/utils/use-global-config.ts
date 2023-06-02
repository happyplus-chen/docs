import { useLocale } from 'element-plus'
import { ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const globalConfig = {
  I18n: (value) => useLocale(ref(zhCn)).t(value),
  Grid: {
    size: 'mini',
    table: {
      border: true,
      showOverflow: 'tooltip',
      showHeaderOverflow: 'tooltip',
      rowConfig: {
        isHover: true,
        isCurrent: true
      },
      columnConfig: {
        resizable: true
      }
    }
  },
  Dataset: {
    service: null,
    errorHandler: (error) => error,
    dataHandler: (data) => data,
    proxyProps: {
      list: 'data',
      total: 'data.page.total',
      currentPage: 'page',
      pageSize: 'size'
    }
  },
  Element: {
    locale: zhCn
  },
  FormItem: {}
}

export function useGlobalConfig() {
  return globalConfig
}

export default useGlobalConfig
