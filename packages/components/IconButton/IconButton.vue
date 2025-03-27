<script setup lang="ts">
import { throttle } from "lodash-es";
import type { IconButtonProps, IconButtonEmits } from "./types";

defineOptions({
    name: "SpIconButton",
});

const emits = defineEmits<IconButtonEmits>();
const slots = defineSlots();
const props = withDefaults(defineProps<IconButtonProps>(), {
    size: "default",
    type: "contained",
    useThrottle: true,
    throttleDuration: 500,
});

const handleBtnClick = (e: MouseEvent) => emits("click", e);
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);
</script>

<template>
    <button class="sp-icon-button" :disabled="loading || disabled ? true : void 0" :class="{
        [`sp-icon-button--${size}`]: size,
        [`sp-icon-button--${interaction}`]: interaction,
        [`sp-icon-button--${type}`]: type,
        'is-loading': loading,
        'is-disabled': disabled
    }" @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)">
        <component :is="icon" class="sp-icon-button-icon"></component>
        <slot></slot>
    </button>
</template>
<style scoped>
@import "../../theme/components/icon-button.css";
</style>
