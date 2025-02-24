import type { Meta, StoryObj, ArgTypes, Args } from "@storybook/vue3";
import { fn, userEvent, within, expect } from "@storybook/test";

import { SpButton } from "simpify-ui";

type Story = StoryObj<typeof SpButton> & { argTypes?: ArgTypes };

const meta: Meta<typeof SpButton> = {
  title: "Example/Button",
  component: SpButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
};

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`;

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    type: "primary",
    content: "Button",
  },
  /*
   *👇 Render functions are a framework specific feature to allow you control on how the component renders.
   * See https://storybook.js.org/docs/api/csf
   * to learn how to use render functions.
   */
  render: (args: unknown) => ({
    components: { SpButton },
    setup() {
      return { args };
    },
    template: container(
      `<sp-button v-bind="args">{{args.content}}</sp-button>`
    ),
  }),
  // Test
  play: async ({
    canvasElement,
    args,
    step,
  }: {
    canvasElement: HTMLCanvasElement;
    args: Args;
    step: (description: string, fn: Function) => void;
  }) => {
    const canvas = within(canvasElement);
    await step("click btn", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });
    expect(args.onClick).toHaveBeenCalled();
  },
};

export default meta;
