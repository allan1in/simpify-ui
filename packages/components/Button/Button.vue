<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
import throttle from 'lodash-es/throttle';

defineOptions({
  name: "SpButton",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
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
  <component :is="props.tag" ref="_ref" class="sp-button" :type="props.tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0" :class="{
      [`sp-button--${type}`]: type,
      [`sp-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }" @click="(e: MouseEvent) => props.useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)">
    <slot></slot>
  </component>
</template>

<style scoped>
@import './style.css';
</style>