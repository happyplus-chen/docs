import FormItem from './form-item'
import FormItems from './form-items'
import Form from './form'
import FormSearch from './form-search'
import FormGrid from './form-grid'
import FormDesc from './form-desc'
import Checkbox from './checkbox'
import Radio from './radio'
import Select from './select'
import Upload from './upload'
import DynamicTags from './dynamic-tags'
import Menu from './menu'
import ContextMenu from './context-menu'
import Ellipsis from './ellipsis'
import Icon from './icon'
import Table from './table'
import Grid from './grid'
import Tree from './tree'
import Transfer from './transfer'
import NumberRange from './number-range'
import SelectPop from './select-pop'
import SingleSelectPop from './single-select-pop'
import MultSelectPop from './mult-select-pop'
import Input from './input'
import PopSelect from './pop-select'

import { setupDataset, useDatasetWithout } from './utils/use-dataset'
import { setupGrid } from './grid/plugin'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import useGlobalConfig from './utils/use-global-config'

export {
  FormItem,
  FormItems,
  Form,
  FormSearch,
  FormGrid,
  FormDesc,
  Checkbox,
  Radio,
  Select,
  Upload,
  DynamicTags,
  Menu,
  ContextMenu,
  Ellipsis,
  Icon,
  Table,
  Grid,
  setupDataset,
  setupGrid,
  Tree,
  Transfer,
  NumberRange,
  useDatasetWithout,
  SelectPop,
  SingleSelectPop,
  MultSelectPop,
  Input,
  PopSelect
}

export default {
  install: function (app: any) {
    const components = [
      FormItem,
      FormItems,
      Form,
      FormSearch,
      FormGrid,
      FormDesc,
      Checkbox,
      Radio,
      Select,
      Upload,
      DynamicTags,
      Menu,
      ContextMenu,
      Ellipsis,
      Icon,
      Table,
      Grid,
      Tree,
      Transfer,
      NumberRange,
      SelectPop,
      SingleSelectPop,
      MultSelectPop,
      Input,
      PopSelect
    ]
    components.forEach((el) => {
      app.component(el.name, el)
    })
    // setupDataset(app)

    app.use(ElementPlus, useGlobalConfig().Element)

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }

    setupGrid(app)
  }
}
