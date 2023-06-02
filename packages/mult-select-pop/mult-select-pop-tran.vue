<template>
  <el-dialog
    ref="elDialogRef"
    v-model="dialogVisible"
    :title="dialogTitle"
    :width="dialogWidth"
    draggable
    append-to-body
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
            <el-button type="primary" icon="Select" @click="select">{{ locale.confirm }}</el-button>
            <el-button type="primary" icon="Delete" @click="deleteRightData">{{
              locale.delete
            }}</el-button>
          </template>
        </form-search>
      </div>
      <div class="dialog-table-container" :style="{ height: tableHeight }">
        <grid
          ref="tableLeft"
          :loading="loading"
          :columns="tableColumnsLeft"
          :data="proxyTableData"
          height="100%"
          :style="{ width: '70%' }"
          @cellDblclick="handleRowDbClick"
        />
        <div class="btn-grou">
          <el-button type="primary" icon="ArrowRight" @click="toRight" />
          <el-button type="primary" icon="ArrowLeft" @click="toLeft" />
        </div>
        <grid
          ref="tableRight"
          :columns="tableColumnsRight"
          :data="proxyTableDataRight"
          height="100%"
          :style="{ width: '25%' }"
          @cellDblclick="rightHandleRowDbClick"
        />
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
export default { name: 'MultSelectPop', inheritAttrs: false }
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
  formItems: Record<string, any>
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
    delete: '删除'
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

const selectKey = computed(() => {
  return props.selectProp
})

const tableColumnsLeft = computed(() => {
  return [{ type: 'checkbox', width: 38 }, ...props.tableColumns]
})

const { options, loading, getOptions } = useDataset({ ...props, lazyLoad: true }) as any

const proxyTableData = ref<any[]>([])
const proxyTableDataRight = ref<object[]>([])

watchEffect(() => {
  if (props.value) {
    proxyTableDataRight.value = props.value.split(',').map((item) => {
      const obj = {}
      obj[selectKey.value] = item
      return obj
    })
  } else {
    proxyTableDataRight.value = []
  }
})

watchEffect(() => {
  const newArr = options.value
  if (newArr) {
    proxyTableData.value = newArr.filter((item) => {
      return !proxyTableDataRight.value.find((row) => {
        return row[selectKey.value] === item[selectKey.value]
      })
    })
  } else {
    proxyTableData.value = []
  }
})

watchEffect(() => {
  const newArr = props.tableData as any[]
  if (newArr) {
    proxyTableData.value = newArr.filter((item) => {
      return !proxyTableDataRight.value.find((row) => {
        return row[selectKey.value] === item[selectKey.value]
      })
    })
  } else {
    proxyTableData.value = []
  }
})

function search(data: any) {
  if (props.querySearch) {
    props.querySearch(data)
  } else {
    getOptions({ params: data })
  }
}

function leftToRgith(rows: any[]) {
  proxyTableDataRight.value.push(...rows)
  proxyTableDataRight.value = unique(proxyTableDataRight.value, `${selectKey.value}`)
  rows.forEach((row) => {
    const index = proxyTableData.value.findIndex((item) => {
      return row[selectKey.value] === item[selectKey.value]
    })
    proxyTableData.value.splice(index, 1)
  })
}

function rightToLeft(rows: any[]) {
  proxyTableData.value.push(...rows)
  proxyTableData.value = unique(proxyTableData.value, `${selectKey.value}`)
  rows.forEach((row) => {
    const index = proxyTableDataRight.value.findIndex((item) => {
      return row[selectKey.value] === item[selectKey.value]
    })
    proxyTableDataRight.value.splice(index, 1)
  })
}

function handleRowDbClick({ row }) {
  leftToRgith([row])
}

function rightHandleRowDbClick({ row }) {
  rightToLeft([row])
}

function clearTableData() {
  proxyTableData.value = []
  proxyTableDataRight.value = []
}

const tableLeft = ref()
const tableRight = ref()
function toRight() {
  const $table = tableLeft.value
  const selectRecords = $table.getCheckboxRecords()
  leftToRgith(selectRecords)
}

function toLeft() {
  const $table = tableRight.value
  const selectRecords = $table.getCheckboxRecords()
  rightToLeft(selectRecords)
}

// 右则表格
const tableColumnsRight = computed(() => {
  return [
    { type: 'checkbox', width: 38 },
    { field: `${selectKey.value}`, title: '选中值' }
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
  .btn-grou {
    display: flex;
    align-items: center;
    margin: 12px;
  }
}
</style>
