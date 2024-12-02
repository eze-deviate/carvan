import { cn } from "@/lib/utils";
import React from "react";
import HardCopyIcon from "@public/assets/svgs/hard-copy.svg";
import ECopy from "@public/assets/svgs/e-copy.svg";
type Props = React.HTMLAttributes<HTMLDivElement> & {
  icon?: "hard" | "soft";
};

const CopyLabel = (props: Props) => {
  const { className, icon = "hard", ...rest } = props;
  return (
    <div
      className={cn(
        "bg-gray-200 py-1 flex gap-1 px-3 rounded w-fit",
        className
      )}
      {...rest}
    >
      {icon == "hard" && <HardCopyIcon />}
      {icon == "soft" && <ECopy />}
      <span className="text-gray-800 font-medium text-xs">Hard Copy</span>
    </div>
  );
};

export default CopyLabel;
