import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";

interface SelectItem {
  value: string;
  label: string;
}

interface CustomSelectProps {
  items: SelectItem[];
  placeholder: string;
  onValueChange: (value: string) => void;
}

const CustomSelect = ({
  items,
  placeholder,
  onValueChange,
}: CustomSelectProps) => {
  return (
    <Select.Root onValueChange={onValueChange}>
      <Select.Trigger className="w-48 data-[placeholder]:text-grey outline-none border border-light-grey flex justify-between items-center px-4 py-2">
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={-1}
          className="w-48 border border-light-grey bg-white"
        >
          <Select.ScrollUpButton />
          <Select.Viewport>
            {items.map((item) => (
              <Select.Item
                key={item.value}
                value={item.value}
                className="cursor-pointer m-1 px-4 py-2 outline-none hover:bg-[#f1f7fa]"
              >
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default CustomSelect;
