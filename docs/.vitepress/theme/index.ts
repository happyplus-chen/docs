// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import axios from 'axios'
import JUI, { setupDataset } from '../../../packages'
import { VPDemo } from '../vitepress'

import '../utils/mockProdServer'

const request = axios.create()

request.interceptors.request.use(
  config => {
    config.headers.Authorization = localStorage.getItem('token') || ''
    config.headers.Prog = 1367340148776960
    return config
  }
)

setupDataset(request)

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.config.globalProperties.$request = request
    app.use(JUI)
    app.component('Demo', VPDemo)
  }
}
