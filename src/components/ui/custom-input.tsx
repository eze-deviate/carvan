import React from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {};

const CustomInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <Input
      ref={ref}
      className={cn(
        "border border-gray-200 text-gray-900 text-base font-normal w-full placeholder:text-gray-400",
        className
      )}
      {...rest}
    />
  );
});

export default CustomInput;
