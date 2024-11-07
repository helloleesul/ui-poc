import { CustomButton } from "@/components/CustomButton.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ChevronRight } from "lucide-react";

const meta = {
  title: "Custom/Button",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    variant: {
      control: "radio",
      options: ["black", "blue"],
    },
    intent: {
      control: "radio",
      options: ["solid", "outline"],
    },
    size: { control: "radio", options: ["sm", "md", "lg", "icon"] },
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
    variant: "blue",
    intent: "solid",
    size: "md",
    disabled: false,
    asChild: false,
  },
};

export const Icon: Story = {
  args: {
    children: <ChevronRight />,
    variant: "blue",
    intent: "solid",
    size: "icon",
    disabled: false,
    asChild: false,
  },
};
