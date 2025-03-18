<script setup lang="ts">
import { ref } from 'vue'

let actived = ref(false)

const click = () => {
  console.log("click")
  actived.value = !actived.value
}
</script>

<template>
  <sp-button type="text" round :disabled="false" @click="click" :actived>test</sp-button>
</template>

<style scoped></style>
