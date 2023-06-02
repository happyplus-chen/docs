import { createApp } from 'vue'
import App from './App.vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(VXETable).use(ElementPlus).mount('#app')
