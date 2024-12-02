import React, { useState } from "react";
import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons"; // Adjust imports if necessary

type Props = {
  setRating: React.Dispatch<React.SetStateAction<number>>;
  rating: number;
};
const StarRating = (props: Props) => {
  //   const [rating, setRating] = useState(0);
  const { rating, setRating } = props;
  const [hover, setHover] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
  };

  const handleMouseEnter = (value: number) => {
    setHover(value);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          className="focus:outline-none"
        >
          {star <= (hover || rating) ? (
            <StarFilledIcon className="w-6 h-6 text-warning-400" />
          ) : (
            <StarIcon className="w-6 h-6 text-warning-400" />
          )}
        </button>
      ))}
    </div>
  );
};

export default StarRating;
