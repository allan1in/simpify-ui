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
  shape: "rectangle",
  type: "contained",
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
    [`sp-button--${interaction}`]: interaction,
    'is-loading': loading,
    'is-disabled': disabled,
    'is-actived': actived
  }" :disabled="disabled || loading ? true : void 0"
    @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)">
    <component class="sp-button-icon sp-button-icon--start" :is="startIcon"></component>
    <slot></slot>
    <component class="sp-button-icon sp-button-icon--end" :is="endIcon"></component>
  </button>
</template>

<style scoped>
@import '../../theme/components/button.css';
</style>