<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
import throttle from 'lodash-es/throttle';

defineOptions({
  name: "SpButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  size: "small",
  useThrottle: true,
  throttleDuration: 500
});

const emits = defineEmits<ButtonEmits>();
const slots = defineSlots();
const _ref = ref<HTMLButtonElement>();

const handleBtnClick = (e: MouseEvent) => emits("click", e);
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);

defineExpose<ButtonInstance>({
  ref: _ref
});

</script>

<template>
  <component ref="_ref" class="sp-button" :is="tag" :disabled="disabled || loading ? true : void 0" :class="{
    [`sp-button--${size}`]: size,
    [`sp-button--${type}`]: type,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled,
    'is-loading': loading,
    'is-actived': actived
  }" @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)">
    <slot></slot>
  </component>
</template>

<style scoped>
@import '../../theme/button.css';
</style>