<template>
  <vxe-grid
    ref="tableRef"
    :class="$CLS_PREFIX + '-grid'"
    v-bind="$attrs"
    :pager-config="pagerConfig"
    :proxy-config="proxyConfig"
  >
    <template #pager="{ $grid }">
      <div class="grid-pager">
        <el-pagination
          v-if="pagerConfig"
          ref="pagerRef"
          background
          :small="pagerConfig.small"
          :page-sizes="pagerConfig.pageSizes || [10, 20, 50, 100]"
          :page-size="pagerConfig.pageSize || 10"
          :layout="pagerConfig.layout || 'total, sizes, prev, pager, next, jumper'"
          :current-page="$grid.reactData.tablePage.currentPage"
          :pager-count="5"
          :total="$grid.reactData.tablePage.total"
          @size-change="pageSizeChange"
          @current-change="pageCurrentChange"
        />
      </div>
    </template>
  </vxe-grid>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'Grid', inheritAttrs: false }
</script>

<script setup lang="ts">
import { $CLS_PREFIX } from '../utils/use-global-const'
import { ElPagination } from 'element-plus'
import { ref, onMounted, useAttrs, computed, unref } from 'vue'
import { gridComponentMethodKeys } from './methods'
import type { Dataset } from '../utils/use-dataset'
import useDataset from '../utils/use-dataset'
import type { VxeGridProps } from 'vxe-table'

type PagerInfo = {
  currentPage?: number
  pageSize?: number
  total?: number
}

interface Props extends /* @vue-ignore */ Partial<VxeGridProps> {
  lazyLoad?: boolean
  pagerConfig?: any
  dataset?: Dataset
  proxyConfig?: any
}

const props = withDefaults(defineProps<Props>(), {
  lazyLoad: false,
  dataset: null
})

const attrs: VxeGridProps = useAttrs()

console.log(props, attrs)

const emit = defineEmits(['mounted', 'pageChange'])

const tableRef = ref()

const pagerRef = ref()

const proxyConfig = computed(() => {
  const { dataset, proxyConfig } = props

  if (dataset && !proxyConfig) {
    const { getOptions, total, options } = useDataset({ ...props, lazyLoad: true })
    return {
      ajax: {
        async query() {
          const { tablePage } = tableRef.value.reactData
          const { currentPage, pageSize } = tablePage
          const hasPager = props.pagerConfig
          const params = {}
          hasPager && Object.assign(params, { currentPage, pageSize })

          await getOptions({ params })

          return hasPager
            ? {
                result: unref(options),
                page: {
                  total: unref(total)
                }
              }
            : unref(options)
        }
      }
    }
  }

  return proxyConfig
})

const pageChangeEvent = (params: PagerInfo) => {
  const { tablePage } = tableRef.value.reactData

  Object.assign(tablePage, params)

  if (tableRef.value.proxyConfig) {
    tableRef.value.commitProxy('query')
  }
  emit('pageChange', { ...tablePage })
}

const pageCurrentChange = (current: number) => {
  pageChangeEvent({ currentPage: current })
}
const pageSizeChange = (size: number) => {
  pageChangeEvent({ pageSize: size })
}

const extendTableMethods = (methodKeys: any[]) => {
  const funcs: any = {}
  methodKeys.forEach((name) => {
    funcs[name] = (...args: any[]) => {
      const $vxegrid: any = tableRef.value
      if ($vxegrid && $vxegrid[name]) {
        return $vxegrid[name](...args)
      }
    }
  })

  return funcs
}

onMounted(() => {
  emit('mounted')
})

defineExpose({
  tableRef,
  pagerRef,
  ...extendTableMethods(gridComponentMethodKeys)
})
</script>

<style lang="scss" scoped>
:deep(.vxe-table) {
  td,
  th {
    border: none;
    padding: unset;
  }

  table {
    margin: unset;
    display: table;
    overflow-x: unset;
    transition: unset;
  }
}

:deep(.vxe-button.type--button) {
  border-radius: var(--el-border-radius-base);
  font-size: var(--el-font-size-base);
  &.theme--success {
    &:not(.is--disabled) {
      &:hover {
        background-color: var(--el-color-success-light-3);
        border-color: var(--el-color-success-light-3);
      }

      &:active {
        background-color: var(--el-color-success-dark-2);
        border-color: var(--el-color-success-dark-2);
      }

      background-color: var(--el-color-success);
      border-color: var(--el-color-success);
      color: var(--el-color-white);
    }
  }
}

.grid-pager {
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  background: #fff;
}
</style>
