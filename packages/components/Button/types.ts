import type { Component } from "vue";

export type ButtonSize =
  | "extra-small"
  | "small"
  | "default"
  | "large"
  | "extra-large";

export type ButtonType = "contained" | "outlined" | "text";

export type ButtonShape = "rectangle" | "round" | "circle";

export type ButtonInteraction = "scale";

export interface ButtonProps {
  size?: ButtonSize;
  type?: ButtonType;
  shape?: ButtonShape;
  interaction?: ButtonInteraction;
  actived?: boolean;
  loading?: boolean;
  disabled?: boolean;
  startIcon?: Component;
  endIcon?: Component;
  useThrottle?: boolean;
  throttleDuration?: number;
}

// https://cn.vuejs.org/api/sfc-script-setup.html#type-only-props-emit-declarations
export interface ButtonEmits {
  (e: "click", val: MouseEvent): void;
}
