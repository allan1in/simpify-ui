<script setup lang="ts">
import IconPlay from "./components/IconPlay.vue";
import { ref } from "vue";

let loading = ref(new Array(10).fill(false));
let actived = ref(new Array(10).fill(false));

const click = (index: number) => {
  console.log("click");
  loading.value[index] = true;
  setTimeout(() => {
    loading.value[index] = false;
    actived.value[index] = !actived.value[index];
  }, 1500);
};

let isLight = ref(false);
const changeMode = () => {
  isLight.value = !isLight.value;
};
</script>

<template>
  <div class="wrapper" :class="{ dark: !isLight, light: isLight }">
    <sp-button :actived="!isLight" class="change-mode-btn" @click="changeMode">{{ `${isLight ? "Dark" : "Light"} Mode`
    }}</sp-button>
    <div class="playground">
      <sp-button @click="click(0)" :actived="actived[0]" :loading="loading[0]" type="outlined" :startIcon="IconPlay">
        Outlined
      </sp-button>
      <sp-button @click="click(1)" :actived="actived[1]" :loading="loading[1]" type="contained" :startIcon="IconPlay"
        shape="round">
        Play
      </sp-button>
      <sp-button @click="click(2)" :actived="actived[2]" :loading="loading[2]" type="text" :startIcon="IconPlay">
        Install App
      </sp-button>
      <sp-icon-button @click="click(3)" interaction="scale" :loading="loading[3]" type="contained" size="extra-large"
        :icon="IconPlay"></sp-icon-button>
      <sp-icon-button @click="click(4)" interaction="shadow" :loading="loading[4]" type="plain" size="extra-large"
        :icon="IconPlay"></sp-icon-button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  transition: background-color 0.2s ease;

  &.dark {
    background-color: #121212;
  }

  &.light {
    background-color: #eeeeee;
  }

  & .change-mode-btn {
    position: absolute;
    left: 10px;
    top: 10px;
  }

  & .playground {
    min-width: inherit;
    min-height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}
</style>
