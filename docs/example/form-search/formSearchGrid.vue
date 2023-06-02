<template>
  <jgFormSearch
    :data="form.model"
    :items="form.items"
    label-width="auto"
    class="demo"
    collapse-button
    responsive
    layout="grid"
    :span="8"
    @search="search"
  />
</template>

<script lang="tsx" setup>
import { reactive, ref } from 'vue'

const formLayoutRef = ref()
const form = reactive({
  model: {},
  items: [
    {
      prop: 'name',
      label: '姓名',
      selectParam: { selectCode: 'P_FACTMAT_MC_USER', selectProp: 'USER_NO' },
      attrs: {
        onChange: (val) => {
          console.log('change...', val)
        }
      }
    },
    { prop: 'sex', label: '性别', component: 'Jg-select', attrs: { options: ['男', '女'] } },
    { prop: 'intor', label: '介绍' },
    { prop: 'address', label: '地址', span: 24 }
  ]
})
function search(data: any) {
  console.log(123, data)
}
</script>
