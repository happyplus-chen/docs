<template>
    <ElForm :model="form.model" label-width="auto" class="demo">
      <JgFormItems ref="formLayoutRef" :items="form.items" />
    </ElForm>
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
        required: true
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
        prop: 'type',
        label: 'Activity type',
        component: 'Jg-checkbox',
        attrs: {
          options: [
            'Online activities',
            'Promotion activities',
            'Offline activities',
            'Simple brand exposure'
          ]
        }
      },
      {
        prop: 'resources',
        label: 'Resources',
        component: 'Jg-radio',
        attrs: { options: ['Sponsor', 'Venue'] }
      },
      {
        prop: 'decs',
        label: 'Activity Form',
        attrs: { type: 'textarea' }
      },
      {
        component: 'ElButton',
        slots: () => 'Create',
        attrs: {
          type: 'primary',
          onClick: () => {
            formLayoutRef.value?.validate()
            formLayoutRef.value?.getRef('zone').focus()
          }
        }
      }
    ]
  })
  </script>
  