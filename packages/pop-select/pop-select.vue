<template>
  <div :class="[`${$CLS_PREFIX}-popselect`]">
    <el-input
      v-model="state.displayValue"
      :clearable="clearable"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
    >
      <template #suffix>
        <el-icon class="suffix" @click="openDialog">
          <more />
        </el-icon>
      </template>
    </el-input>
    <el-dialog
      v-model="state.dialogVisible"
      :width="(width as string)"
      :title="title"
      @close="emit('close')"
    >
      <div class="dialog-body">
        <div v-if="formConfig" class="dialog-from">
          <form-search v-bind="state.formConfig" @search="handleFormSearch" />
        </div>
        <div class="dialog-select">
          <div class="left">
            <grid
              ref="souceGridRef"
              :loading="loading"
              v-bind="gridConfig"
              :columns="state.columns"
              :data="sourceData"
              :height="gridConfig.height || GRIDHEIGHT"
              :row-id="keyField"
              :pager-config="null"
              :checkbox-config="{ checkRowKeys: state.selectedValue }"
              :radio-config="{ checkRowKey: state.selectedValue[0] }"
              @checkbox-all="sourceSelectAll"
              @checkbox-change="sourceSelectChange"
              @radio-change="radiochange"
            />
          </div>
          <div v-show="multi" class="right">
            <grid
              ref="selectGridRef"
              v-bind="gridConfig"
              :columns="state.columns"
              :data="state.selectData"
              :row-id="keyField"
              :pager-config="null"
              :height="gridConfig.height || GRIDHEIGHT"
              :checkbox-config="{ checkRowKeys: state.selectedValue }"
              @checkbox-all="selectSelectAll"
              @checkbox-change="selectSelectChange"
            />
          </div>
        </div>
        <el-pagination
          v-if="pagerConfig"
          ref="pagerRef"
          v-model:current-page="pagerInfo.currentPage"
          v-model:page-size="pagerInfo.pageSize"
          background
          :small="pagerConfig.small"
          :layout="pagerConfig.layout || 'total, prev, next, jumper'"
          :pager-count="pagerConfig.pagerCount"
          :total="total"
          @size-change="reloadData({ pageSize: $event })"
          @current-change="reloadData({ currentPage: $event })"
        />
      </div>
      <template #footer>
        <el-button type="primary" @click="handleConfrim">确认</el-button>
        <el-button @click="handleCancel">取消</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'PopSelect', inheritAttrs: false }
</script>

<script setup lang="ts">
import FormSearch from '../form-search'
import Grid from '../grid'
import { computed, nextTick, reactive, ref, toRaw, watch, unref, Ref } from 'vue'
import useDataset from '../utils/use-dataset'
import { $CLS_PREFIX } from '../utils/use-global-const'
import { More } from '@element-plus/icons-vue'

interface Props {
  modelValue: string | number | Array<any>
  title?: string
  textSplit?: string
  options?: any[]
  dataset?: Object
  readonly?: boolean
  disabled?: boolean
  multi?: boolean
  clearable?: boolean
  dialogClass?: string
  popperAppendToBody?: boolean
  beforeClose?: Function
  alwaysLoad?: boolean
  lazyLoad?: boolean
  width?: string | Number
  formConfig?: any
  gridConfig: any
  pagerConfig?: any
  placeholder?: string
  props?: { label: string; value: string }
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  title: '',
  width: '800px',
  dialogClass: '',
  multi: false,
  textSplit: '/',
  alwaysLoad: false,
  placeholder: '',
  popperAppendToBody: true,
  clearable: true,
  lazyLoad: false,
  props: () => {
    return { label: 'label', value: 'value' }
  },
  beforeClose: () => true
})

const emit = defineEmits(['update:modelValue', 'change', 'close', 'open', 'cancel', 'search'])

const GRIDHEIGHT = 360

const souceGridRef = ref()
const selectGridRef = ref()

const pagerInfo: any = reactive({
  currentPage: 1,
  pageSize: 10
})

let queryParams: Object | null = null

const initData = () => {
  state.selectedValue = ([] as any[]).concat(props.modelValue)
  state.selectData = unref(sourceData as Ref<any[]>).filter((item) =>
    state.selectedValue.includes(item[props.props.value])
  )
  syncSelectedValue()
}

const {
  options: sourceData,
  loading,
  getOptions,
  total
} = useDataset({ ...props, onBindData: initData })

const state: any = reactive({
  souceGridRef,
  selectGridRef,
  displayValue: '',
  selectData: [],
  selectedValue: [],
  dialogVisible: false,
  columns: computed(() => {
    return [{ type: props.multi ? 'checkbox' : 'radio', width: 50 }].concat(
      props.gridConfig.columns
    )
  }),
  formConfig: computed(() => {
    return {
      labelWidth: 'auto',
      collapseButton: true,
      showItemsNum: 1,
      layout: 'grid',
      span: 12,
      ...props.formConfig
    }
  })
})

const keyField = computed(() => props.props.value)

const syncCheckStatus = () => {
  nextTick(() => {
    selectGridRef.value?.setAllCheckboxRow(true)
    souceGridRef.value?.getData().forEach((item) => {
      !state.selectedValue.includes(item[props.props.value]) &&
        souceGridRef.value?.setCheckboxRow(item)
    })
  })
}

const syncSelectedValue = () => {
  const values: any[] = []
  const texts: any[] = []
  state.selectData.map((row) => {
    values.push(row[props.props.value])
    texts.push(row[props.props.label])
  })
  state.selectedValue = values
  state.displayValue = texts.join(props.textSplit)
  syncCheckStatus()
}

const sourceSelectAll = (params) => {
  const { value } = props.props
  const { checked, records } = params

  if (checked) {
    state.selectData.push(...records)
  } else {
    const sourceData = state.souceGridRef.getData()
    state.selectData = state.selectData.filter(
      (item) => !sourceData.map((row) => row[value]).includes(item[value])
    )
  }
  syncSelectedValue()
}

const sourceSelectChange = (params) => {
  const { checked, row } = params
  const { value } = props.props

  if (checked) {
    state.selectData.push(toRaw(row))
  } else {
    state.selectData = state.selectData.filter((item) => item[value] !== row[value])
  }

  syncSelectedValue()
}

const selectSelectChange = ({ row, checked }) => {
  if (!checked) {
    const { value } = props.props
    state.selectData = state.selectData = state.selectData.filter(
      (item) => item[value] !== row[value]
    )
  }
  syncSelectedValue()
}

const selectSelectAll = ({ checked }) => {
  if (!checked) {
    state.selectData = []
    souceGridRef.value.setAllCheckboxRow(false)
  }
  syncSelectedValue()
}

const radiochange = ({ row }) => {
  state.selectData = [toRaw(row)]
  syncSelectedValue()
}

const handleFormSearch = async (params) => {
  queryParams = JSON.parse(JSON.stringify(params))
  const { currentPage, pageSize } = pagerInfo

  if (props.pagerConfig) {
    Object.assign(params, { currentPage, pageSize })
  }

  const data = await getOptions({ params })
  souceGridRef.value?.reloadData(data)
  selectGridRef.value && selectGridRef.value.reloadData([...selectGridRef.value.getData()])
  emit('search', params, data)
}

const reloadData = async (pager) => {
  await handleFormSearch({ ...queryParams, ...pager })
}

const handleConfrim = () => {
  const value = props.multi ? state.selectedValue : state.selectedValue[0] || null
  emit('update:modelValue', value)
  emit('change', value)
  state.dialogVisible = false
}

const openDialog = async () => {
  if (props.readonly || props.disabled) {
    return
  }

  if (props.alwaysLoad) {
    pagerInfo.currentPage = 1
    await reloadData({})
  }

  state.dialogVisible = true
  emit('open')

  nextTick(() => {
    souceGridRef.value.reloadData(toRaw(unref(sourceData)))
  })
}

const handleCancel = () => {
  state.dialogVisible = false
  state.selectedValue = ([] as any[]).concat(props.modelValue)
  initData()
  emit('cancel')
}

watch(() => props.modelValue, initData, { immediate: true })
</script>

<style lang="scss" scoped>
@use '../theme/vars.scss' as *;
.#{$cls-prefix}popselect {
  .dialog-body {
    .dialog-from {
      padding: 0 10px;
    }
    .dialog-select {
      display: flex;

      & > div {
        overflow: hidden;
        flex: 1;
        padding: 0 10px;
      }
    }
  }

  .suffix {
    cursor: pointer;
  }
}
</style>
