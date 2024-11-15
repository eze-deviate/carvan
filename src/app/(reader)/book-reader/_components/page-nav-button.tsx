import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";

type Props = {
  direction: "left" | "right";
  onClick: () => void;
};

const PageNavButton = ({ direction, onClick }: Props) => {
  return (
    <Button
      className={cn(
        "items-center justify-center bg-white flex w-10 h-10 absolute bottom-1/2 transform translate-y-1/2 text-[#2F313F] rounded-[50%] hover:bg-gray-25 hover:text-gray-800",
        { "left-3": direction == "left" },
        { "right-3": direction == "right" }
      )}
      onClick={onClick}
    >
      {direction == "left" ? (
        <ChevronLeftIcon stroke="#2F313F" className="h-3 w-2" />
      ) : (
        <ChevronRightIcon stroke="#2F313F" />
      )}
    </Button>
  );
};

export default PageNavButton;
