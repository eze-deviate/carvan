import React from "react";
import ClockIcon from "@public/assets/svgs/clock.svg";
import { Button } from "@/components/ui/button";

type Props = {};

const OutOfTimeComponent = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-9 flex-1 items-center justify-center">
      <div className="flex flex-col gap-y-6 justify-center">
        <div className="flex gap-x-2 w-full justify-center">
          <ClockIcon />
          <span className="text-white text-sm bg-error-600 py-2 px-[0.875rem] rounded-full">
            00:00
          </span>
        </div>
        <h2 className="text-800 text-3xl font-semibold">You’re out of time!</h2>
        <p className="text-sm text-gray-500">
          Click the{" "}
          <span className="font-semibold text-sm text-gray-800">
            “Continue button”
          </span>{" "}
          to see your score
        </p>
      </div>
      <Button variant="primary">View Result</Button>
    </div>
  );
};

export default OutOfTimeComponent;
