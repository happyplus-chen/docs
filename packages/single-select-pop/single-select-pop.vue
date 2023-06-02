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
          :span="8"
          :collapse-button="false"
          @search="search"
        />
      </div>
      <div class="dialog-table-container" :style="{ height: tableHeight }">
        <grid
          :loading="loading"
          :columns="tableColumns"
          :data="proxyTableData"
          height="100%"
          width="100%"
          :column-config="{
            minWidth: '88px'
          }"
          @cell-dblclick="handleRowDbClick"
        />
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'SingleSelectPop', inheritAttrs: false }
</script>

<script setup lang="ts">
import FormSearch from '../form-search'
import Grid from '../grid'
import { ref, computed, watchEffect } from 'vue'
import useDataset from '../utils/use-dataset'
import type { Dataset } from '../utils/use-dataset'

interface Props {
  modelValue: boolean
  dialogLoading?: boolean
  dialogTitle: string
  dialogWidth?: string
  tableHeight?: string
  formData: Record<string, any>
  dataset?: Dataset
  formItems: Record<string, any> | any
  tableColumns: Record<string, any>[]
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
watchEffect(() => {
  proxyTableData.value = options.value as any[]
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

function handleRowDbClick({ row, rowIndex }) {
  dialogVisible.value = false
  emit('select', { row, rowIndex })
}

function clearTableData() {
  proxyTableData.value = []
}

defineExpose({ clearTableData })
</script>
