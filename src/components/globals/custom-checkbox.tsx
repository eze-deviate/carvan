import React from "react";
import { Checkbox } from "../ui/checkbox";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";

type Props = {};

const CustomCheckBox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <Checkbox
    className={cn(
      "data-[state=checked]:bg-brand-500 border-[#D0D5DD] shadow-none",
      className
    )}
    {...props}
    ref={ref}
  />
));

export default CustomCheckBox;
