<script setup lang="ts">
import IconPlay from './components/IconPlay.vue'
import { ref } from 'vue'

let loading = ref(new Array(3).fill(false))
let actived = ref(new Array(3).fill(false))

const click = (index: number) => {
  console.log("click")
  loading.value[index] = true
  setTimeout(() => {
    loading.value[index] = false
    actived.value[index] = !actived.value[index]
  }, 1500)
}
</script>

<template>
  <div class="wrapper">
    <sp-button @click="click(0)" :actived="actived[0]" :loading="loading[0]" type="outlined" shape="round"
      interaction="scale">
      Follow
    </sp-button>
    <sp-button @click="click(1)" :actived="actived[1]" :loading="loading[1]" type="contained" shape="round"
      :startIcon="IconPlay">
      Play
    </sp-button>
    <sp-button @click="click(2)" :actived="actived[2]" :loading="loading[2]" type="text" interaction="scale">
      Install App
    </sp-button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
