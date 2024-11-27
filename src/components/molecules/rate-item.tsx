import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import StarRating from "./star-rating";

type Props = {
  setRating: React.Dispatch<React.SetStateAction<number>>;
  rating: number;
  showButton?: boolean;
  showAvatar?: boolean;
  showHeading?: boolean;
};

const RateItem = (props: Props) => {
  const {
    rating,
    setRating,
    showButton = true,
    showAvatar = true,
    showHeading = true,
  } = props;
  return (
    <div className="flex flex-col gap-8">
      <div>
        {showHeading && (
          <h3 className="text-gray-900 text-lg font-medium">Rate this Book</h3>
        )}
        <StarRating rating={rating} setRating={setRating} />
      </div>

      {showAvatar && (
        <div className="flex items-center">
          <Avatar>
            <AvatarImage />
            <AvatarFallback />
          </Avatar>

          <span>Samuel</span>
          <span className="h-2 w-2 rounded-[50%] bg-gray-400"></span>
          <span>0 reviews</span>
        </div>
      )}

      {showButton && (
        <Button className="text-white bg-brand-500 border-none hover:bg-brand-700 cursor-pointer hover:border-none text-base font-semibold">
          Leave a Review
        </Button>
      )}
    </div>
  );
};

export default RateItem;
