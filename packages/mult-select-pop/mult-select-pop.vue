<template>
  <el-dialog
    ref="elDialogRef"
    v-model="dialogVisible"
    :title="dialogTitle"
    :width="dialogWidth"
    draggable
    append-to-body
    :close-on-click-modal="false"
    align-center
    destroy-on-close
  >
    <div v-loading="dialogLoading || tableLoading" class="dialog-content">
      <div class="dialog-search">
        <form-search
          :data="formData"
          :items="formItems"
          label-width="auto"
          class="search-form"
          layout="grid"
          :span="12"
          :collapse-button="false"
          @search="search"
        >
          <template #append-btn>
            <el-button type="primary" plain icon="Select" @click="select">{{
              locale.confirm
            }}</el-button>
            <el-button v-if="false" icon="Delete" @click="deleteRightData">{{
              locale.delete
            }}</el-button>
          </template>
        </form-search>
      </div>
      <div class="dialog-table-container" :style="{ height: tableHeight }">
        <grid
          ref="tableLeft"
          :loading="loading"
          :columns="tableColumns"
          :data="proxyTableData"
          height="100%"
          :style="{ width: '70%' }"
          :column-config="{
            minWidth: '88px'
          }"
          @cell-dblclick="handleRowDbClick"
        />
        <grid
          ref="tableRight"
          :columns="tableColumnsRight"
          :data="proxyTableDataRight"
          height="100%"
          :style="{ width: '25%' }"
          @cell-dblclick="rightHandleRowDbClick"
        />
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'MultSelectPop', inheritAttrs: false }
</script>

<script setup lang="ts">
import FormSearch from '../form-search'
import Grid from '../grid'
import { ref, computed, watchEffect } from 'vue'
import useLocale from '../utils/use-locale'
import useDataset from '../utils/use-dataset'
import type { Dataset } from '../utils/use-dataset'
import { unique } from '../utils/utils'

interface Props {
  modelValue: boolean
  dialogLoading?: boolean
  value?: string
  dialogTitle: string
  dialogWidth?: string
  tableHeight?: string
  formData: Record<string, any>
  dataset?: Dataset
  formItems: Record<string, any> | any
  tableColumns: Record<string, any>[]
  selectProp: string
  tableData?: any[]
  tableLoading?: boolean
  querySearch?: (data: any) => void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  dialogLoading: false,
  dialogWidth: '50%',
  tableHeight: '300px',
  formData: () => ({}),
  formItems: () => ({})
})

const locale = useLocale({
  'zh-cn': {
    confirm: '确认',
    delete: '删除选中'
  },
  en: {
    confirm: 'confirm',
    delete: 'delete'
  }
})

const emit = defineEmits(['update:modelValue', 'select'])

const elDialogRef = ref()

const dialogVisible = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const { options, loading, getOptions } = useDataset({ ...props, lazyLoad: true }) as any

const proxyTableData = ref<any[]>([])
const proxyTableDataRight = ref<object[]>([])

watchEffect(() => {
  if (props.value) {
    proxyTableDataRight.value = props.value.split(',').map((item) => {
      const obj = {}
      obj[props.selectProp] = item
      return obj
    })
  } else {
    proxyTableDataRight.value = []
  }
})

watchEffect(() => {
  proxyTableData.value = options.value
})

watchEffect(() => {
  proxyTableData.value = props.tableData as any[]
})

function search(data: any) {
  if (props.querySearch) {
    props.querySearch(data)
  } else {
    getOptions({ params: data })
  }
}

function handleRowDbClick({ row }) {
  proxyTableDataRight.value.push(row)
  proxyTableDataRight.value = unique(proxyTableDataRight.value, `${props.selectProp}`)
}

function rightHandleRowDbClick({ rowIndex }) {
  proxyTableDataRight.value.splice(rowIndex, 1)
}

function clearTableData() {
  proxyTableData.value = []
  proxyTableDataRight.value = []
}

// 右则表格
const tableColumnsRight: any = computed(() => {
  return [
    { type: 'seq', width: 50 },
    { field: `${props.selectProp}`, title: '选中值' }
  ]
})

function deleteRightData() {
  proxyTableDataRight.value = []
}

function select() {
  dialogVisible.value = false
  emit('select', proxyTableDataRight.value)
}

defineExpose({ clearTableData })
</script>
<style scoped lang="scss">
.dialog-content {
  :deep(.btn-group) {
    .el-form-item__content {
      flex-wrap: nowrap;
    }
  }
  .dialog-table-container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
