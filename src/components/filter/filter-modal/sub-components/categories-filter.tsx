import { categories } from "@/constants/dummy-data";
import React from "react";
import FilterButton from "./filter-button";

type Props = {};

const CategoriesFilter = (props: Props) => {
  return (
    <div className="w-full flex gap-2 flex-wrap">
      {categories.map((item, index) => (
        <FilterButton item={item} key={index} />
      ))}
    </div>
  );
};

export default CategoriesFilter;
