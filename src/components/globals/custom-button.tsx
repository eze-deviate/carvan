import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = {
  className: string;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  text: string;
};

const CustomButton = ({ className, leftIcon, rightIcon, text }: Props) => {
  return (
    <Button
      className={cn(
        "text-white text-center flex items-center justify-center",
        className
      )}
      asChild
    >
      {leftIcon && leftIcon}
      {text}
      {rightIcon && rightIcon}
    </Button>
  );
};

export default CustomButton;
