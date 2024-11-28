import React from "react";
import OverallRating from "./overall-rating";
import Reviews from "./reviews";
import { Review as TReview } from "@/types";

type Props = {
  reviews: TReview[];
};

const ReviewsTab = (props: Props) => {
  const { reviews } = props;
  return (
    <div>
      {reviews.length > 1 ? (
        <div className="flex flex-col gap-12">
          <OverallRating reviews={reviews} />
          <Reviews reviews={reviews} />
        </div>
      ) : (
        <div>No Reviews</div>
      )}
    </div>
  );
};

export default ReviewsTab;
