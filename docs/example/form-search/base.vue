<template>
    <jgFormSearch
      :data="form.model"
      :items="form.items"
      label-width="auto"
      class="demo"
      collapse-button
      :show-items-num="1"
      @search="search"
    >
      <template #append-btn>
        <el-button type="primary" icon="Select">确认</el-button>
      </template>
    </jgFormSearch>
  </template>
  
  <script lang="tsx" setup>
  import { reactive, ref } from 'vue'
  
  const formLayoutRef = ref()
  const form = reactive({
    model: {},
    items: [
      {
        prop: 'name',
        label: 'Activity name',
        required: true,
        attrs: {
          onInput(val) {
            console.log('val...', val)
          }
        }
      },
      {
        prop: 'zone',
        label: 'Activity zone',
        component: 'Jg-select',
        attrs: {
          options: [
            { label: 'Zone one', value: 'shanghai' },
            { label: 'Zone two', value: 'beijing' }
          ]
        }
      },
      {
        prop: 'date',
        label: 'Activity date',
        component: 'el-date-picker'
      },
      {
        prop: 'delivery',
        label: 'Instant delivery',
        component: 'el-switch'
      },
      {
        prop: 'resources',
        label: 'Resources',
        component: 'Jg-radio',
        attrs: { options: ['Sponsor', 'Venue'] }
      }
    ]
  })
  function search(data: any) {
    console.log(123, data)
  }
  </script>
  