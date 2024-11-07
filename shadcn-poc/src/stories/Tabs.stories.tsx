import { CustomTabs } from "@/components/CustomTabs.tsx";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Custom/Tabs",
  component: CustomTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: { tabsData: { control: "object" } },
  args: {},
} satisfies Meta<typeof CustomTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabOneContent = () => <div>Tab one component content</div>;
const TabTwoContent = () => <div>Tab two component content</div>;

const tabsData = [
  { label: "One", value: "tab1", content: <TabOneContent /> },
  { label: "Two", value: "tab2", content: <TabTwoContent /> },
  { label: "Three", value: "tab3", content: "Tab three plain text content" },
];

export const Default: Story = {
  args: { tabsData: tabsData },
};