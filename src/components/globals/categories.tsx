import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  className?: string;
};

const Categories = ({ className, title }: Props) => {
  return (
    <section
      className={cn(
        "w-full text-center flex items-center justify-center bg-banner",
        className
      )}
    >
      <p className="text-[4.313rem] text-black font-semibold leading-[6.037rem]">
        {title}
      </p>
    </section>
  );
};

export default Categories;
