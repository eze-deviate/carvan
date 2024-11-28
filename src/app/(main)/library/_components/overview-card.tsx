import React from "react";
import IncreaseIcon from "@public/assets/svgs/increase.svg";
import DecreaseIcon from "@public/assets/svgs/decrease.svg";

type Props = {
  icon: React.ReactNode;
  text: string;
  value: number;
  percentValue: number;
  percentChange: "increase" | "decrease";
  vsText: string;
};

const OverviewCard = (props: Props) => {
  const { icon, text, value, percentChange, percentValue, vsText } = props;
  return (
    <div className="p-4 gap-x-4 rounded-sm border border-gray-200 flex flex-1 shadow-custom-3">
      <span className="p-[0.9375rem] gap-2 flex items-center justify-center bg-[#FFEDD2] rounded-[50%] h-14 w-14">
        {icon}
      </span>
      {/* details */}
      <div className="flex-1 flex justify-between">
        {/* text and value */}
        <div className="flex flex-1 flex-col gap-y-2">
          <span className="text-gray-700 font-normal text-sm w-full">
            {text}
          </span>
          <span className="text-2xl font-semibold text-gray-900">
            {value.toFixed(0)}
          </span>
        </div>

        <div className="flex flex-1 flex-col py-2 gap-y-1 items-end">
          <span className="">
            {percentChange == "increase" ? <IncreaseIcon /> : <DecreaseIcon />}{" "}
            &nbsp; &nbsp;
            {percentChange == "increase"
              ? `+${percentValue}%`
              : `+${percentValue}%`}
          </span>
          <span className="text-gray-600 text-sm font-normal">{vsText}</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
