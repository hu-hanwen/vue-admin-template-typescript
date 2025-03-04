<template>
  <svg :style="{ width, height }">
    <use :xlink:href="`#${prefix}-${name}`" :fill="color"></use>
  </svg>
</template>

<script lang="ts" setup name="SvgIcon">
defineProps({
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
  color: {
    type: String,
    default: '#333',
  },
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
})
</script>

<style scoped></style>
