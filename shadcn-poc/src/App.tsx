import { BasicDialog } from "@/components/BasicDialog.tsx";
import { BasicSelect } from "@/components/BasicSelect.tsx";
import { BasicTabs } from "@/components/BasicTabs.tsx";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { Button } from "@/components/ui/button.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <ul className="demo">
        <li>
          <div>
            <h3>Button</h3>
            <Button className="text-md w-[116px] font-bold rounded-[2px] bg-[#00adff] shadow-none">
              등록완료
            </Button>
            <Button className="block sm:px-6 md:px-8 lg:px-10">Button</Button>
          </div>
        </li>
        <li>
          <div>
            <h3>Dialog</h3>
            <BasicDialog />
          </div>
        </li>
        <li>
          <div>
            <h3>Select</h3>
            <BasicSelect />
          </div>
        </li>
        <li>
          <div>
            <h3>Tabs</h3>
            <BasicTabs />
          </div>
        </li>
      </ul>
    </ThemeProvider>
  );
}

export default App;
