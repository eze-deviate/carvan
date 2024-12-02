"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { wishlistTabs } from "@/constants";
import { BookFilterSortBy } from "@/constants/enums";
import { cn } from "@/lib/utils";
import { TWishlistTab } from "@/types";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import WishlistBooks from "./wishlist-books";
import WishlistQuizzes from "./wishlist-quizzes";

type Props = {};

const WishlistContent = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState<TWishlistTab>("books");
  const [filterState, setFilterState] = useState({
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
    <div className="flex flex-col gap-y-10 mt-10">
      <Tabs
        defaultValue={"books" as TWishlistTab}
        className="w-full"
        onValueChange={(val) => setSelectedTab(val as TWishlistTab)}
        value={selectedTab}
      >
        <TabsList className="bg-transparent w-full h-fit justify-between">
          <div className="flex bg-gray-100 gap-1 p-[0.1875rem] rounded">
            {wishlistTabs.map((item, idx) => (
              <TabsTrigger
                key={idx}
                value={item.value}
                className={cn(
                  "flex gap-2 px-4 py-[0.5625rem]  text-gray-700 font-normal bg-transparent  data-[state=active]:bg-white shadow-none"
                )}
              >
                <span>{item.text}</span>
                <span
                  className={cn(
                    "rounded py-[0.1875rem] px-[0.375rem] text-xs bg-gray-200",
                    {
                      "bg-brand-400 text-white": selectedTab == item.value,
                    }
                  )}
                >
                  {12}
                </span>
              </TabsTrigger>
            ))}
          </div>

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
        </TabsList>
        <TabsContent value={"books" as TWishlistTab}>
          <WishlistBooks />
        </TabsContent>
        <TabsContent value={"quizzes" as TWishlistTab}>
          <WishlistQuizzes />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WishlistContent;
