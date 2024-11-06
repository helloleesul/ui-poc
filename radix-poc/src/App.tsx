import { Button } from "@radix-ui/themes";
import BasicDialog from "./components/BasicDialog.tsx";
import BasicSelect from "./components/BasicSelect.tsx";
import BasicTabs from "./components/BasicTabs.tsx";

function App() {
  return (
    <ul className="demo">
      <li>
        <div>
          <h3>Button</h3>
          <Button>Button</Button>
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
