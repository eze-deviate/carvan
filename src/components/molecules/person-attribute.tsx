import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  label?: string;
  value?: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

const PersonAttribute = ({
  className,
  label,
  value,
  disabled = false,
}: Props) => {
  return (
    <div className={cn("w-full flex flex-col gap-y-1 flex-1", className)}>
      <label
        className={cn("text-gray-800 font-medium text-sm", {
          "opacity-50": disabled,
        })}
      >
        {label}
      </label>
      <div
        className={cn("border-gray-200 border p-3 rounded", {
          "opacity-50": disabled,
        })}
      >
        {value}
      </div>
    </div>
  );
};

export default PersonAttribute;
