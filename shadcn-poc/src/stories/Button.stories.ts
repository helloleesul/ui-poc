import { CustomButton } from "@/components/CustomButton.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Button",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    variant: {
      control: "radio",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: { control: "radio", options: ["default", "sm", "lg", "icon"] },
    disabled: { control: "boolean" },
    asChild: { control: "boolean" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "추가",
    variant: "default",
    size: "default",
    disabled: false,
    asChild: false,
  },
};
