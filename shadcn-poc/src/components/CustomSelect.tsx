import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectItem {
  value: string;
  label: string;
}

interface CustomSelectProps {
  items: SelectItem[];
  placeholder: string;
  onValueChange: (value: string) => void;
}

export function CustomSelect({
  items,
  placeholder,
  onValueChange,
}: CustomSelectProps) {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent position="popper" sideOffset={-5}>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
