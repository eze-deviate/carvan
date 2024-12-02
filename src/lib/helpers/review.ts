import { Review } from "@/types";

export function getStartCount(reviews: Review[], nStarRating: number) {
  const filteredArr = reviews.filter(
    (review) => Math.floor(review.rating) == nStarRating
  );
  const reviewsWithRating = reviews.filter((review) => !!review.rating);

  const percentOfNStarReviews =
    (filteredArr.length / reviewsWithRating.length) * 100;

  return [filteredArr.length, percentOfNStarReviews];
}
