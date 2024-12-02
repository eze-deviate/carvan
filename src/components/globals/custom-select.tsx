import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = {
  selectItems: { value: string; label: string; [key: string]: any }[];
  value: any;
  defaultValue?: any;
  onValueChange: any;
  trigger?: React.ReactNode;
};

const CustomSelect = ({
  selectItems,
  value,
  defaultValue,
  onValueChange,
  trigger,
}: Props) => {
  return (
    <Select
      onValueChange={onValueChange}
      value={value}
      defaultValue={defaultValue}
    >
      <SelectTrigger className="border-gray-200 border text-gray-800 text-base font-medium w-full h-fit p-1">
        {trigger ? (
          trigger
        ) : (
          <SelectValue placeholder="Select Rating" className="text-gray-500" />
        )}
      </SelectTrigger>
      <SelectContent>
        {selectItems.map((item, idx) => (
          <SelectItem value={item.value} key={idx}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
