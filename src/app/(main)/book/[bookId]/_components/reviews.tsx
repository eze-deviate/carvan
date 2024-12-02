import AverageStarRating from "@/components/molecules/average-star-rating";
import CustomPagination from "@/components/molecules/custom-pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns/format";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Review } from "@/types";
import React, { useState } from "react";
import { getNumberOfReviews } from "@/lib/utils";

type Props = {
  reviews: Review[];
};

const Reviews = (props: Props) => {
  const { reviews } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRating, setSelectedRating] = useState<string | undefined>(
    undefined
  );
  const [selectedReviews, setSelectedReviews] = useState(reviews.slice(0, 3));
  const handleChangeRating = (val: string) => {
    setSelectedRating(val);
  };
  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const start = (newPage - 1) * 3;
    const end = start + 3;
    setSelectedReviews(() => reviews.slice(start, end));
  };

  return (
    <div className="flex flex-col gap-x-6">
      {/* filtering Header */}
      <div className="flex gap-x-4">
        <h3 className="font-medium text-lg text-gray-900">Filter Reviews</h3>
        <Select onValueChange={handleChangeRating} value={selectedRating}>
          <SelectTrigger className="w-[12.68rem] border border-gray-200">
            <SelectValue
              placeholder="Select Rating"
              className="text-gray-500"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <Button
          className="bg-transparent hover:bg-transparent border-none text-brand-500 text-base font-medium shadow-none"
          onClick={() => setSelectedRating(undefined)}
        >
          Clear All
        </Button>
      </div>

      {/* reviews */}
      <div className="flex flex-col gap-2">
        {selectedReviews.map((reviewData, idx) => {
          if (reviewData.review) {
            return (
              <div
                className="flex flex-col gap-4 py-3 border-b border-gray-200"
                key={idx}
              >
                {/* date and star */}
                <div className="flex flex-col">
                  <span className="text-gray-700 text-sm font-normal">
                    {format(reviewData.createdAt, "MMM dd, yyyy")}
                  </span>
                  <AverageStarRating rating={reviewData.rating} />
                </div>
                {/* review */}
                <p className="w-full text-gray-600 text-sm font-normal">
                  {reviewData.review}
                </p>
                {/* avatar */}
                <div className="flex gap-4 items-center text-gray-800 text-sm font-normal">
                  <span>Review by</span>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={reviewData.user.avatar} alt="avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span>{reviewData.user.name}</span>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* PAGINATION */}
      <CustomPagination
        currentPage={currentPage}
        itemsPerPage={3}
        totalItems={getNumberOfReviews(reviews)}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Reviews;
