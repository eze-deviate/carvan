import AverageStarRating from "@/components/molecules/average-star-rating";
import { getStartCount } from "@/lib/helpers/review";
import { getAverageRating, getNumberOfReviews } from "@/lib/utils";
import { Review } from "@/types";
import React from "react";

type Props = {
  reviews: Review[];
};

const ProgressBar = ({ percent }: { percent: number }) => {
  return (
    <div className="relative bg-gray-200 h-[0.6125rem] w-32 rounded-3xl">
      <div
        className="absolute top-0 left-0 h-full bg-warning-400 rounded-3xl"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

const OverallRating = (props: Props) => {
  const { reviews } = props;
  const stars = [1, 2, 3, 4, 5];
  const rating = getAverageRating(reviews);
  const numberOfReviews = getNumberOfReviews(reviews);
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-semibold text-gray-800">Overall Rating</h1>
      <div className="flex gap-12">
        <div className="flex gap-4">
          <div className="text-2xl font-semibold text-gray-900">
            {rating.toFixed(1)}
          </div>
          <div className="flex flex-col">
            <AverageStarRating rating={rating} />
            <p className="text-sm text-gray-800 font-normal">
              {reviews.length} ratings &nbsp; &nbsp;
              <span className="w-8 h-8 bg-gray-400 rounded-full"></span>
              {numberOfReviews} reviews
            </p>
          </div>
        </div>

        <div>
          {stars.reverse().map((star, idx) => {
            const [starCount, percentage] = getStartCount(reviews, star);
            return (
              <div className="flex gap-x-3">
                <AverageStarRating rating={star} />
                <ProgressBar percent={percentage} />
                <span>{`${starCount} (${percentage.toFixed(2)}%)`}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OverallRating;
