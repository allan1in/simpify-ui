<script setup lang="ts">

import type { ButtonProps, ButtonEmits } from './types';
import throttle from 'lodash-es/throttle';

defineOptions({
  name: "SpButton",
});
const emits = defineEmits<ButtonEmits>();
const slots = defineSlots();
const props = withDefaults(defineProps<ButtonProps>(), {
  size: "default",
  type: "contained",
  shape: "rectangle",
  useThrottle: true,
  throttleDuration: 500
});

const handleBtnClick = (e: MouseEvent) => emits("click", e);
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);

</script>

<template>
  <button class="sp-button" :class="{
    [`sp-button--${size}`]: size,
    [`sp-button--${type}`]: type,
    [`sp-button--${shape}`]: shape,
    'is-loading': loading,
    'is-disabled': disabled
  }" :disabled="disabled || loading ? true : void 0"
    @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)">
    <slot></slot>
  </button>
</template>

<style scoped>
@import '../../theme/button.css';
</style>