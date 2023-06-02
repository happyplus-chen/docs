<template>
  <single-select-pop
    v-if="!multiple"
    ref="singleSelectPopRef"
    v-model="dialogVisible"
    :dialog-loading="loading"
    :dialog-title="compDialogTitle"
    :form-data="copyFormData"
    :form-items="formItems"
    :table-columns="tableColumns"
    :query-search="querySearch"
    :table-loading="tableLoading"
    :table-data="tableData"
    @select="select"
  />

  <mult-select-pop
    v-else
    ref="multSelectPopRef"
    v-model="dialogVisible"
    :value="value"
    :dialog-loading="loading"
    :select-prop="selectParam.selectProp"
    :dialog-title="compDialogTitle"
    :form-data="copyFormData"
    :form-items="formItems"
    :table-columns="tableColumns"
    :query-search="querySearch"
    :table-loading="tableLoading"
    :table-data="tableData"
    @select="selectMult"
  />
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'SelectPop', inheritAttrs: false }
</script>

<script setup lang="ts">
import singleSelectPop from '../single-select-pop'
import multSelectPop from '../mult-select-pop'
import { ref, computed, watch, watchEffect } from 'vue'
import useDataset from '../utils/use-dataset'
import { configDataset, tableDataset, getQueryDataParams, getConfigDataParams } from './config'

interface SelectParam {
  selectCode: string // 根据code去查找对应的搜索表单配置和表格列配置
  selectProp: string // 选中时返回行对应的列字段
  dialogTitle?: string
}

interface Props {
  modelValue: boolean
  value?: string
  multiple?: boolean
  formData?: Record<string, any>
  selectParam: SelectParam
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  formData: () => ({})
})
const emit = defineEmits(['update:modelValue', 'select'])

const dialogVisible = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const copyFormData = ref({})
watchEffect(() => {
  copyFormData.value = JSON.parse(JSON.stringify(props.formData))
})

// ---------- 配置数据请求-----------
const { options, loading, getOptions } = useDataset({
  dataset: configDataset,
  lazyLoad: true
}) as any

const compDialogTitle = computed(() => {
  return props.selectParam.dialogTitle || options.value?.dialogTitle || ''
})

const formItems = computed(() => {
  return options.value?.formItems || []
})

const tableColumns = computed(() => {
  return options.value?.tableColumns || []
})
// ---------- 表格数据请求-----------
const {
  options: tableOptions,
  loading: tableLoading,
  getOptions: tableGetOptions
} = useDataset({ dataset: tableDataset, lazyLoad: true }) as any

function querySearch(data) {
  const params = getQueryDataParams(data, props.selectParam.selectCode, options.value)
  tableGetOptions({ params })
}

const tableData = computed(() => {
  return tableOptions.value || []
})

// 清空表格数据
function resetData() {
  copyFormData.value = JSON.parse(JSON.stringify(props.formData))
  tableOptions.value = []
}

watch(
  () => props.selectParam.selectCode,
  (val) => {
    getTableData(val)
  },
  { immediate: true }
)

function getTableData(val) {
  const params = getConfigDataParams(val)
  if (val) {
    // 请求之前清空数据
    resetData()
    getOptions({ params })
  }
}

function select({ row }) {
  emit('select', row[props.selectParam.selectProp] || '', [row])
}
function selectMult(rows) {
  const val = rows.map((item) => item[props.selectParam.selectProp]).join(',')
  emit('select', val || '', rows)
}
</script>
