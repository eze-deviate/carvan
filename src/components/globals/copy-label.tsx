import { cn } from "@/lib/utils";
import React from "react";
import HardCopyIcon from "@public/assets/svgs/hard-copy.svg";

type Props = React.HTMLAttributes<HTMLDivElement> & {};

const CopyLabel = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "bg-gray-200 py-1 flex gap-1 px-3 rounded w-fit",
        className
      )}
      {...rest}
    >
      <HardCopyIcon />
      <span className="text-gray-800 font-medium text-xs">Hard Copy</span>
    </div>
  );
};

export default CopyLabel;
