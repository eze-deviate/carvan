import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";
import React from "react";

type Props = {};
const resourceTypeFilterItems = [
  { text: "Books", value: "", selected: false },
  { text: "Quizes", value: "", selected: true },
];
const ResourceType = (props: Props) => {
  return (
    <div className="flex gap-2">
      {resourceTypeFilterItems.map((item, index) => (
        <Button
          className={cn(
            "p-2 bg-white border-gray-200 text-gray-800 hover:text-brand-500 hover:bg-brand-100 gap-1",
            {
              "shadow-custom-1  text-brand-500 bg-brand-100": item.selected,
            }
          )}
          key={index}
        >
          {item.text}
          {item.selected && <Cross1Icon className="text-brand-500 h-3 w-3" />}
        </Button>
      ))}
    </div>
  );
};

export default ResourceType;
