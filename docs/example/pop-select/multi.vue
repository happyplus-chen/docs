<template>
  <div class="demo">
    <jg-pop-select
      v-model="value"
      :grid-config="gridOp"
      :options="options"
      multi
      :props="{ value: 'FACT_NO', label: 'FACT_NAME' }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(['1001', '1003'])

const options = [
  {
    FACT_ADDR: '辽宁省沈阳市沈北新区沈北路20-3号-6',
    FACT_NO: '0004',
    FACT_NAME: '合肥比亚迪盛世新景汽车销售有限公司',
    WERKS: '0004'
  },
  {
    FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
    FACT_NO: '1000',
    FACT_NAME: '比亚迪股份总公司工厂',
    WERKS: '1000'
  },
  {
    FACT_ADDR: '宝龙比亚迪内：正大门直行100米',
    FACT_NO: '1001',
    FACT_NAME: '后勤比亚迪股份工厂',
    WERKS: '1001'
  },
  {
    FACT_ADDR: '宝龙比亚迪内：正大门直行100米',
    FACT_NO: '1002',
    FACT_NAME: '后勤精密制造工厂',
    WERKS: '1002'
  },
  {
    FACT_ADDR: '葵涌镇延安路1号比亚迪工业园 A-6#厂房 2楼',
    FACT_NO: '1003',
    FACT_NAME: '比亚迪半导体股份有限公司后勤微电子工厂',
    WERKS: '1003'
  },
  {
    FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
    FACT_NO: '10Z0',
    FACT_NAME: '中研院公共工厂',
    WERKS: '10Z0'
  },
  {
    FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
    FACT_NO: '10Z1',
    FACT_NAME: '中研院应用材料工厂',
    WERKS: '10Z1'
  },
  {
    FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
    FACT_NO: '10Z2',
    FACT_NAME: '中研院金属材料工厂',
    WERKS: '10Z2'
  },
  {
    FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪',
    FACT_NO: '10Z3',
    FACT_NAME: '中研院导光膜工厂',
    WERKS: '10Z3'
  },
  {
    FACT_ADDR: '深圳市龙岗区葵涌镇延安路比亚迪工业园',
    FACT_NO: '2000',
    FACT_NAME: '一部股份数字能源工厂',
    WERKS: '2000'
  }
]

const gridOp = {
  columns: [
    {
      field: 'FACT_NO',
      title: '工厂编号',
      width: 80
    },
    {
      field: 'FACT_NAME',
      title: '工厂名称'
    },
    {
      field: 'FACT_ADDR',
      title: '工厂地址'
    }
  ]
}
</script>

<style scoped></style>
