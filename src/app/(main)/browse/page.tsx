import CustomBanner from "@/components/banner/custom-banner";
import FilterModal from "@/components/filter/filter-modal";
import Categories from "@/components/globals/categories";
import { ui } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";
import SortBrowseSelect from "./_components/sort-browse-select";

type Props = {};

const BrowsePage = (props: Props) => {
  return (
    <div className="">
      <Categories />
      <CustomBanner title="Banner" />
      <div className={cn("", ui.layoutPadding)}>
        {/* title */}
        <div className="flex gap-x-3 items-center">
          <h1 className="text-gray-900 text-3xl font-semibold">
            Browse All Books
          </h1>
          <span className="font-medium text-gray-600 text-base">
            12,300 Books
          </span>
        </div>

        {/* filter */}
        <div className="flex justify-between w-full">
          <FilterModal />
          <SortBrowseSelect />
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
