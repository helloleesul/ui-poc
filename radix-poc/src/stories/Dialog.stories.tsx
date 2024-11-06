import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CustomDialog from "../components/CustomDialog.tsx";

const meta = {
  title: "Custom/Dialog",
  component: CustomDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "object" },
    },
    triggerTitle: {
      control: { type: "text" },
    },
    triggerDisabled: {
      control: { type: "boolean" },
    },
    variant: {
      control: "radio",
      options: ["black", "blue"],
    },
    intent: {
      control: "radio",
      options: ["solid", "outline"],
    },
    size: { control: "radio", options: ["sm", "md", "lg", "icon"] },
    dialogTitle: {
      control: { type: "text" },
    },
    cancelText: {
      control: { type: "text" },
    },
    confirmText: {
      control: { type: "text" },
    },
  },
  args: { onConfirm: fn() },
} satisfies Meta<typeof CustomDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <h1>Content</h1>,
    triggerTitle: "Open",
    triggerDisabled: false,
    dialogTitle: "Are you absolutely sure?",
    cancelText: "Cancel",
    confirmText: "Confirm",
    variant: "blue",
    intent: "solid",
    size: "sm",
  },
};
