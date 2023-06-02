<template>
  <div v-loading="loading" :class="[`${$CLS_PREFIX}-table`]">
    <el-table-v2 ref="elTableRef" v-bind="$attrs" :data="dataProxy" />
    <div v-if="showPager" :class="[`${$CLS_PREFIX}-table-pagination`]">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        background
        :total="total"
        @size-change="pageSizeChange"
        @current-change="pageCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'Table', inheritAttrs: false }
</script>

<script setup lang="ts">
import { ref, unref, computed, reactive } from 'vue'
import type { ElTableV2 } from 'element-plus'
import useDataset from '../utils/use-dataset'
import type { Dataset } from '../utils/use-dataset'
import { $CLS_PREFIX } from '../utils/use-global-const'

type TableProps = InstanceType<typeof ElTableV2>['$props']

interface Props extends /* @vue-ignore */ Partial<TableProps> {
  lazyLoad?: boolean
  data?: Array<any>
  pagerConfig?: any
  dataset?: Dataset
}

type PagerInfo = {
  currentPage?: number
  pageSize?: number
  total?: number
}

const props = withDefaults(defineProps<Props>(), {
  lazyLoad: false,
  dataset: null
})

const elTableRef = ref()

const state = reactive({
  firstLoad: false,
  pager: {
    currentPage: 1,
    pageSize: 10
  }
})

const { options, loading, getOptions, pageSize, currentPage, total, setState } = useDataset({
  ...props
}) as any

const showPager = computed(() => props.pagerConfig || props.dataset?.pagerConfig)

const dataProxy = computed(() => props.data || unref(options))

const pageChange = (value: PagerInfo) => {
  // TODO before
  setState({ ...value })
  getOptions()
}

const pageSizeChange = (value: number) => {
  pageChange({ pageSize: value })
}
const pageCurrentChange = (value: number) => {
  pageChange({ currentPage: value })
}

defineExpose({
  query: getOptions
})
</script>
