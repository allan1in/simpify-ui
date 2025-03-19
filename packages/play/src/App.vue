<script setup lang="ts">
import { ref } from 'vue'

let lighted = ref(false)

const click = () => {
  console.log("click")
  lighted.value = !lighted.value
}
</script>

<template>
  <sp-button @click="click" type="outlined" shape="circle">
    1
  </sp-button>
</template>

<style scoped></style>
