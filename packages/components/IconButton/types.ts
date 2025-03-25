import type { Component } from "vue";

export type IconButtonSize =
  | "extra-small"
  | "small"
  | "default"
  | "large"
  | "extra-large";

export type IconButtonInteraction = "scale";

export type IconButtonType = "";

export interface IconButtonProps {
  size?: IconButtonSize;
  type?: IconButtonType;
  interaction?: IconButtonInteraction;
  actived?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: Component;
  useThrottle?: boolean;
  throttleDuration?: number;
}

// https://cn.vuejs.org/api/sfc-script-setup.html#type-only-props-emit-declarations
export interface IconButtonEmits {
  (e: "click", val: MouseEvent): void;
}
