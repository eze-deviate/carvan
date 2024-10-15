import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  title?: string;
};

const CustomBanner = ({ className }: Props) => {
  return (
    <section className={cn("bg-[#F4F4F5]", className)}>
      <h1 className="text-3xl font-bold text-black">Caravan Book Shop</h1>
    </section>
  );
};

export default CustomBanner;
