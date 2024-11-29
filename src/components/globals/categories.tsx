import { categories, ui } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

const Categories = ({ className }: Props) => {
  return (
    <section
      className={cn(
        "w-full text-center flex bg-white py-3 gap-x-10",
        ui.layoutPadding,
        className
      )}
    >
      {categories.map((cat, idx) => (
        <p
          className="text-base text-gray-700 font-normal px-[0.625rem] py-2"
          key={idx}
        >
          {cat.title}
        </p>
      ))}
    </section>
  );
};

export default Categories;
