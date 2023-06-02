<template>
  <img v-if="isImg" :src="(icon as string)" class="el-icon" v-bind="$attrs" />
  <el-icon v-else v-bind="$attrs">
    <component :is="icon" />
  </el-icon>
</template>

<script lang="ts">
import { $PREFIX } from '../utils/use-global-const'
export default { name: $PREFIX + 'Icon' }
</script>

<script setup lang="ts">
import { computed, type Component } from 'vue'
import { getFileTypeByUrl } from '../utils/utils'

const props = defineProps<{ icon: string | Component }>()

const isImg = computed(() => typeof props.icon == 'string' && getFileTypeByUrl(props.icon) == 'img')
</script>
