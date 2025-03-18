import type { Component, Ref } from "Vue";

export type ButtonSize =
  | "extra-small"
  | "small"
  | "default"
  | "large"
  | "extra-large";

export type ButtonType = "text";

export interface ButtonProps {
  tag?: string | Component;
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  actived?: boolean;
  circle?: boolean;
  round?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
}

// https://cn.vuejs.org/api/sfc-script-setup.html#type-only-props-emit-declarations
export interface ButtonEmits {
  (e: "click", val: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
}
