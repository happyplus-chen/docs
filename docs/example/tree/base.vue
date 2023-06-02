<template>
    <jg-tree :props="defaultProps" @node-click="handleNodeClick" :dataset="{ api: '/api/getTreeData2', transform: {parentKey: 'pid', key: 'id', children: 'children'} }"/>
  </template>
  
  <script lang="ts" setup>
  interface Tree {
    label: string
    children?: Tree[]
  }
  
  const handleNodeClick = (data: Tree) => {
    console.log(data)
  }
  
  const defaultProps = {
    children: 'children',
    label: 'label',
  }
  </script>
  