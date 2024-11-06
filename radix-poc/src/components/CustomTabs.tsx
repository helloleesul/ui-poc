import * as Tabs from "@radix-ui/react-tabs";
import React from "react";

interface CustomTabsProps {
  tabsData: {
    label: string;
    value: string;
    content: React.ReactNode;
  }[];
}

const CustomTabs = ({ tabsData }: CustomTabsProps) => (
  <Tabs.Root defaultValue={tabsData[0]?.value || "tab1"} orientation="vertical">
    <Tabs.List aria-label="tabs example">
      {tabsData.map((tab) => (
        <Tabs.Trigger
          key={tab.value}
          value={tab.value}
          className="w-[160px] text-lg px-5 py-1 bg-[#ecf2f5] data-[state=active]:font-bold data-[state=active]:border-b-white data-[state=active]:bg-white border border-light-grey border-l-0 first:border-l first:rounded-tl-md last:rounded-tr-md"
        >
          {tab.label}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    <div className="border border-light-grey border-t-0 rounded-bl-md rounded-br-md p-5">
      {tabsData.map((tab) => (
        <Tabs.Content key={tab.value} value={tab.value}>
          {tab.content}
        </Tabs.Content>
      ))}
    </div>
  </Tabs.Root>
);

export default CustomTabs;
