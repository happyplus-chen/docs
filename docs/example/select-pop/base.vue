<template>
    <div>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            v-model="formData.FACT_NO"
            placeholder="Please input"
            class="input-with-select"
            clearable
          >
            <template #append>
              <el-button icon="Search" @click="handleClick1" />
            </template>
          </el-input>
        </el-col>
        <el-col :span="8">
          <el-input
            v-model="formData.PROJECT_NO"
            placeholder="Please input"
            class="input-with-select"
            clearable
          >
            <template #append>
              <el-button @click="handleClick2">多选</el-button>
            </template>
          </el-input>
        </el-col>
      </el-row>
      <br />
      <el-row :gutter="20">
        <el-col :span="8">
          <jg-input
            ref="jgInputRef"
            v-model="formData.text"
            placeholder="Please input text"
            class="input-with-select"
            :select-pop-param="selectPopParam"
            clearable
            @change="handleChange"
            @confirm-select="confirmSelect"
          />
        </el-col>
      </el-row>
  
      <jg-select-pop
        v-model="show"
        :value="formData[selectParam.selectProp]"
        :select-param="selectParam"
        :multiple="multiple"
        @select="select"
      />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, reactive } from 'vue'
  
  let show = ref(false)
  const formData = reactive({
    FACT_NO: '',
    PROJECT_NO: '',
    text: ''
  })
  
  const selectParam = ref({
    selectCode: '',
    selectProp: ''
  })
  
  function select(val) {
    console.log('val data...', val)
    formData[selectParam.value.selectProp] = val
  }
  
  const selectParam1 = reactive({
    selectCode: 'SAP_T001W',
    selectProp: 'FACT_NO'
  })
  
  const selectParam2 = reactive({
    selectCode: 'P_PROJECT_DEFINE',
    selectProp: 'PROJECT_NO'
  })
  
  const multiple = ref(false)
  function handleClick1() {
    show.value = true
    multiple.value = false
    selectParam.value = selectParam1
  }
  
  function handleClick2() {
    show.value = true
    multiple.value = true
    selectParam.value = selectParam2
  }
  
  const selectPopParam = reactive({
    multiple: true,
    selectParam: { selectCode: 'P_PROJECT_DEFINE', selectProp: 'PROJECT_NO' }
  })
  
  function handleChange(val) {
    console.log('change data...', val)
  }
  
  function confirmSelect(val, rows) {
    console.log('change data...', val, rows)
  }
  
  const jgInputRef = ref()
  console.log(jgInputRef)
  </script>
  