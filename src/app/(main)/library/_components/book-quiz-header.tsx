"use client";
import React, { useState } from "react";
import ResponsiveGrid from "@/components/layout/responsive-grid";
import CurrentlyReadingCard from "./currently-reading-card";
import CollectionIcon from "@public/assets/svgs/collection.svg";
import FilterTriangle from "@public/assets/svgs/filter-triangle.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookFilterSortBy, BookFiltertype } from "@/constants/enums";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const BookQuizHeader = () => {
  const [filterState, setFilterState] = useState({
    book: BookFiltertype.AllBooks,
    sortBy: BookFilterSortBy.Title,
    sortDirection: "ASC" as "ASC" | "DSC",
  });
  const handleValueChange = (value: any, key: keyof typeof filterState) => {
    setFilterState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <span className="flex gap-1 text-gray-700 text-base font-normal">
          <CollectionIcon /> <span>Collections:</span>
        </span>
        <Select
          onValueChange={(val) => {
            handleValueChange(val, "book");
          }}
          value={filterState.book}
        >
          <SelectTrigger className="border-none text-gray-800 text-base font-medium w-fit h-fit p-1">
            <SelectValue
              placeholder="Select Rating"
              className="text-gray-500"
            />
          </SelectTrigger>
          <SelectContent className="text-gray-800 text-base font-medium">
            <SelectItem value={BookFiltertype.AllBooks}>All Books</SelectItem>
            <SelectItem value={BookFiltertype.Completed}>Completed</SelectItem>
            <SelectItem value={BookFiltertype.InProgress}>
              In Progress
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-x-7">
        {/* sortby */}
        <div className="flex gap-x-2 items-center">
          <label className="text-gray-700 text-sm">Sort by:</label>
          <Select
            onValueChange={(val) => {
              handleValueChange(val, "sortBy");
            }}
            value={filterState.sortBy}
            defaultValue={BookFilterSortBy.Title}
          >
            <SelectTrigger className="border-none text-gray-800 text-base font-medium w-fit h-fit p-1">
              <SelectValue
                placeholder="Select Rating"
                className="text-gray-500"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={BookFilterSortBy.Title}>Title</SelectItem>
              <SelectItem value={BookFilterSortBy.Author}>Author</SelectItem>
            </SelectContent>
          </Select>
          <div className="border-r border-gray-300 "></div>
          {filterState.sortDirection == "ASC" ? (
            <ArrowUpIcon
              className="text-[#323232] cursor-pointer"
              stroke="#323232"
              onClick={() => handleValueChange("DSC", "sortDirection")}
            />
          ) : (
            <ArrowDownIcon
              className="text-[#323232]"
              stroke="#323232"
              onClick={() => handleValueChange("ASC", "sortDirection")}
            />
          )}
        </div>

        <Button className="bg-brand-50 gap-x-3 text-gray-900 hover:bg-brand-100 hover:text-gray-900">
          <FilterTriangle /> Filter
        </Button>
      </div>
    </div>
  );
};

export default BookQuizHeader;
