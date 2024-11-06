import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CustomSelect from "../components/CustomSelect.tsx";

const meta = {
  title: "Custom/Select",
  component: CustomSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: { type: "object" },
    },
    placeholder: {
      control: { type: "text" },
    },
  },
  args: { onValueChange: fn() },
} satisfies Meta<typeof CustomSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
      { value: "date", label: "Date" },
      { value: "fig", label: "Fig" },
      { value: "grape", label: "Grape" },
    ],
    placeholder: "Select an item",
  },
};
