import { Button } from "@radix-ui/themes";
import BasicDialog from "./components/BasicDialog.tsx";
import BasicSelect from "./components/BasicSelect.tsx";
import BasicTabs from "./components/BasicTabs.tsx";
import CustomTable from "./components/CustomTable.tsx";

function App() {
  return (
    <ul className="demo">
      <li>
        <div>
          <h3>Table</h3>
          <CustomTable />
        </div>
      </li>
      <li>
        <div>
          <h3>Button</h3>
          <Button
            size="3"
            className="h-9 w-[116px] font-bold rounded-sm bg-[#00adff]"
          >
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
  );
}

export default App;
