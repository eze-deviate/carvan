import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";
import React from "react";

type Props = {
  item: { text: string; value?: any; selected: boolean; [key: string]: any };
};

const FilterButton = (props: Props) => {
  const { item } = props;
  return (
    <Button
      className={cn(
        "bg-white border text-sm font-normal text-gray-800 border-gray-200 p-2 hover:text-brand-500 hover:bg-brand-100 gap-1",
        {
          "shadow-custom-1 shadow-custom-2 text-brand-500 bg-brand-100":
            item.selected,
        }
      )}
    >
      {item.text}
      {item.selected && <Cross1Icon className="text-brand-500 h-3 w-3" />}
    </Button>
  );
};

export default FilterButton;
