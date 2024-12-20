"use client";
import React from "react";
import { Button } from "../ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

const BackButton = (props: Props) => {
  const router = useRouter();
  const { className, text, onClick, ...rest } = props;
  return (
    <Button
      {...rest}
      className={cn(
        "my-10 gap-1 bg-gray-100 py-2 pr-[1.125rem] pl-[0.875rem] rounded-3xl text-sm text-[#2F313F] font-medium hover:bg-gray-200",
        className
      )}
      onClick={() => {
        router.back();
      }}
    >
      <ArrowLeftIcon />
      {text}
    </Button>
  );
};

export default BackButton;
