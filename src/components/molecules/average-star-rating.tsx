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
        const isFull = rating >= idx + 1;
        const isPartial = rating > idx && rating < idx + 1;
        const partialFill = Math.min((rating - idx) * 100, 100); // Calculate percentage fill
        return (
          <div
            key={idx}
            className="relative w-6 h-6 flex justify-center items-center"
          >
            {/* Base (unfilled star) */}
            <StarFilledIcon className="text-gray-200 absolute inset-0" />

            {/* Filled portion */}
            {isFull && (
              <StarFilledIcon className="text-warning-400 absolute inset-0" />
            )}
            {isPartial && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - partialFill}% 0 0)` }} // Fill from left to right
              >
                <StarFilledIcon className="text-warning-400" />
              </div>
            )}
          </div>
        );

        // if (rating > idx + 1) {
        //   return <StarFilledIcon className="text-warning-400" key={idx} />;
        // } else if (Math.ceil(rating) == idx + 1) {
        //   const percent = (rating - (idx + 1)) * 100;

        //   return <StarFilledIcon className="text-warning-400" />;
        // } else {
        //   return <StarFilledIcon className="text-gray-200" key={idx} />;
        // }
      })}
    </div>
  );
};

export default AverageStarRating;
