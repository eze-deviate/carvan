import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  percent: number;
  strokeWidth?: number;
  className?: string;
  radius?: number;
  // borderColor?: string;
  // fillColor?: string;
  isCountDown?: boolean;
  countDown?: number;
};

const CircularProgress = (props: Props) => {
  const {
    percent,
    strokeWidth = 3,
    radius = 20,
    // fillColor = "#FEF9C3",
    isCountDown = false,
    countDown,
    // borderColor= countDown? "#294122": "#EAB308",
    className,
  } = props;

  const newRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * newRadius;
  const offset = circumference - (percent / 100) * circumference;
  return (
    <div className={cn("flex items-center justify-center")}>
      <svg className="transform -rotate-90 w-10 h-10">
        <circle
          r={newRadius}
          cx="50%"
          cy="50%"
          className={cn(`fill-[#FEF9C3] stroke-current text-transparent`, {
            "fill-[#F0F6EE]": countDown,
          })}
          strokeWidth={strokeWidth}
        />

        <circle
          className={cn(`text-[#EAB308] fill-transparent stroke-current`, {
            "text-[#294122]": countDown,
          })}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={newRadius}
          cx="50%"
          cy="50%"
        />
      </svg>
      <span className={cn("absolute text-xs font-normal", className)}>
        {isCountDown ? countDown : `${percent}%`}
      </span>
    </div>
  );
};

export default CircularProgress;
