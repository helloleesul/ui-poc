import ButtonDemo from "./components/ButtonDemo.tsx";
import DialogDemo from "./components/DialogDemo.tsx";
import SelectDemo from "./components/SelectDemo.tsx";
import TabsDemo from "./components/TabsDemo.tsx";

function App() {
  return (
    <ul className="demo">
      <li>
        <div>
          <h3>ButtonDemo</h3>
          <ButtonDemo />
        </div>
      </li>
      <li>
        <div>
          <h3>DialogDemo</h3>
          <DialogDemo />
        </div>
      </li>
      <li>
        <div>
          <h3>SelectDemo</h3>
          <SelectDemo />
        </div>
      </li>
      <li>
        <div>
          <h3>TabsDemo</h3>
          <TabsDemo />
        </div>
      </li>
    </ul>
  );
}

export default App;
