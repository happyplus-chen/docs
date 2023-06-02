<template>
  <ElForm label-width="auto" :model="model" class="demo" inline>
    <JgFormItems
      v-for="(rowData, rowIndex) in model.domains"
      :key="rowIndex"
      :items="domainsItems"
      :model-prop="'domains.' + rowIndex"
      :scope="{ rowData, rowIndex }"
    />

    <ElFormItem>
      <ElButton
        type="primary"
        @click="model.domains.push({ phone: String(model.domains.length + 1) })"
        >添加</ElButton
      >
    </ElFormItem>
  </ElForm>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'

const model = reactive({
  domains: [{ phone: '1' }, { phone: '2' }]
})

const domainsItems = [
  { component: ({ rowIndex }: any) => <b>动态表单{rowIndex + 1}</b>, class: 'w100' },
  { prop: 'phone', label: '联系手机' },
  { prop: 'email', label: '联系邮件' },
  {
    span: 4,
    labelWidth: 0,
    component: ({ rowIndex }: any) => {
      return <el-button onClick={() => model.domains.splice(rowIndex, 1)}>删除</el-button>
    }
  }
]
</script>
