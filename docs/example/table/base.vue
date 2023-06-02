<template>
  <div>
    <jg-table
      ref="jgtable"
      :columns="columns"
      :dataset="{
        api: '/api/getpagelist',
        proxyProps: { list: 'data.records', total: 'data.total' },
        pagerConfig: true
      }"
      :width="700"
      :height="400"
      fixed
    />
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { ElInput } from 'element-plus'

import type { FunctionalComponent } from 'vue'
import type { Column, InputInstance } from 'element-plus'

type SelectionCellProps = {
  value: string
  intermediate?: boolean
  onChange: (value: string) => void
  forwardRef: (el: InputInstance) => void
}

const InputCell: FunctionalComponent<SelectionCellProps> = ({ value, onChange, forwardRef }) => {
  return <ElInput ref={forwardRef as any} onInput={onChange} modelValue={value} />
}

const columns: Column<any>[] = [
  {
    key: 'col-0',
    dataKey: 'col-0',
    title: 'Editable Column',
    width: 150
  },
  { key: 'col-1', dataKey: 'col-1', title: 'Column 1', width: 150 },
  { key: 'col-2', dataKey: 'col-2', title: 'Column 2', width: 150 },
  { key: 'col-3', dataKey: 'col-3', title: 'Column 3', width: 150 },
  { key: 'col-4', dataKey: 'col-4', title: 'Column 4', width: 150 },
  { key: 'col-5', dataKey: 'col-5', title: 'Column 5', width: 150 }
]
columns[0] = {
  ...columns[0],
  title: 'Editable Column',
  cellRenderer: ({ rowData, column }) => {
    const onChange = (value: string) => {
      rowData[column.dataKey!] = value
    }
    const onEnterEditMode = () => {
      rowData.editing = true
    }

    const onExitEditMode = () => (rowData.editing = false)
    const input = ref()
    const setRef = (el) => {
      input.value = el
      if (el) {
        el.focus?.()
      }
    }

    return rowData.editing ? (
      <InputCell
        forwardRef={setRef}
        value={rowData[column.dataKey!]}
        onChange={onChange}
        onBlur={onExitEditMode}
        onKeydownEnter={onExitEditMode}
      />
    ) : (
      <div class="table-v2-inline-editing-trigger" onClick={onEnterEditMode}>
        {rowData[column.dataKey!]}
      </div>
    )
  }
}
</script>

<style>
.table-v2-inline-editing-trigger {
  border: 1px transparent dotted;
  padding: 4px;
}

.table-v2-inline-editing-trigger:hover {
  border-color: var(--el-color-primary);
}
</style>
