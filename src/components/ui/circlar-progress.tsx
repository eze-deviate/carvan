import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  percent: number;
  strokeWidth?: number;
  className?: string;
  radius?: number;
};

const CircularProgress = (props: Props) => {
  const { percent, strokeWidth = 3, radius = 20 } = props;
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
          className="fill-[#FEF9C3] stroke-current text-transparent"
          strokeWidth={strokeWidth}
        />

        <circle
          className="text-[#EAB308] fill-transparent stroke-current"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={newRadius}
          cx="50%"
          cy="50%"
        />
      </svg>
      <span className="absolute text-xs font-normal">{percent}%</span>
    </div>
  );
};

export default CircularProgress;
