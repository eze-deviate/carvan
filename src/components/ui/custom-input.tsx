import React from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLInputElement> & {};

const CustomInput = React.forwardRef((props: Props, ref) => {
  const { className, ...rest } = props;
  return (
    <Input
      className={cn(
        "border border-gray-200 text-gray-900 text-base font-normal w-full placeholder:text-gray-400",
        className
      )}
      {...rest}
    />
  );
});

export default CustomInput;
