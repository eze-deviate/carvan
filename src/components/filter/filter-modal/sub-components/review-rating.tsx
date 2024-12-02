import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";
import React from "react";
import FilterButton from "./filter-button";

type Props = {};

const reviewFilterItems = [
  { text: "1-2 Star rating", value: "", selected: true },
  { text: "3 - 4 star rating", value: "", selected: false },
  { text: "5 star rating", value: "", selected: false },
];

const ReviewRating = (props: Props) => {
  return (
    <div className="flex w-full gap-x-2">
      {reviewFilterItems.map((item, idx) => (
        <FilterButton item={item} key={idx} />
      ))}
    </div>
  );
};

export default ReviewRating;
