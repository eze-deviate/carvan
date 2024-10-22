import AverageStarRating from "@/components/molecules/average-star-rating";
import { getAverageRating, getNumberOfReviews } from "@/lib/utils";
import { Review } from "@/types";
import React from "react";

type Props = {
  reviews: Review[];
};

const OverallRating = (props: Props) => {
  const { reviews } = props;
  const rating = getAverageRating(reviews);
  const numberOfReviews = getNumberOfReviews(reviews);
  return (
    <div>
      <h1>Overall Rating</h1>
      <div className="flex">
        <div className="flex gap-4">
          <div className="text-2xl font-semibold text-gray-900">{rating}</div>
          <div className="flex flex-col">
            <AverageStarRating rating={rating} />
            <p className="text-sm text-gray-800 font-normal">
              {reviews.length} ratings
              <span className="w-1 h-1 bg-gray-400"></span>
              {numberOfReviews} reviews
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default OverallRating;
