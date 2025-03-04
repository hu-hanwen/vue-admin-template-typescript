<template>
  <h2>App组件</h2>
  <el-button type="danger" :icon="Delete"></el-button>
  <SvgIcon name="full-screen"></SvgIcon>
</template>

<script lang="ts" setup name="App">
import { Delete } from '@element-plus/icons-vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style scoped></style>
