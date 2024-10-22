import { StarFilledIcon } from "@radix-ui/react-icons";
import React from "react";

type Props = {
  rating: number;
};

const AverageStarRating = (props: Props) => {
  const { rating } = props;
  const stars = Array(5).fill(0);
  return (
    <div className="flex w-fit">
      {stars.map((_, idx) => {
        if (rating > idx + 1) {
          return <StarFilledIcon className="text-warning-400" key={idx} />;
        } else if (Math.ceil(rating) == idx + 1) {
          const percent = (rating - (idx + 1)) * 100;

          return <StarFilledIcon className="text-warning-400" />;
        } else {
          return <StarFilledIcon className="text-gray-200" key={idx} />;
        }
      })}
    </div>
  );
};

export default AverageStarRating;
