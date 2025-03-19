export type ButtonSize =
  | "extra-small"
  | "small"
  | "default"
  | "large"
  | "extra-large";

export type ButtonType = "contained" | "outlined" | "icon";

export type ButtonShape = "rectangle" | "round" | "circle";

export interface ButtonProps {
  size?: ButtonSize;
  type?: ButtonType;
  shape?: ButtonShape;
  loading?: boolean;
  disabled?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
}

// https://cn.vuejs.org/api/sfc-script-setup.html#type-only-props-emit-declarations
export interface ButtonEmits {
  (e: "click", val: MouseEvent): void;
}
