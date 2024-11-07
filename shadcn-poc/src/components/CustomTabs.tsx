import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CustomTabsProps {
  tabsData: {
    label: string;
    value: string;
    content: React.ReactNode;
  }[];
}

export function CustomTabs({ tabsData }: CustomTabsProps) {
  return (
    <Tabs defaultValue={tabsData[0]?.value || "tab1"} orientation="vertical">
      <TabsList aria-label="tabs example">
        {tabsData.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="border border-light-grey border-t-0 rounded-bl-md rounded-br-md p-5">
        {tabsData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
