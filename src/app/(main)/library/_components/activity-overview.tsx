import { Button } from "@/components/ui/button";
import { activityOverview } from "@/constants";
import { cn } from "@/lib/utils";
import { ActivityOverview as ActivityType } from "@/types";
import React, { useState } from "react";
import OverviewCard from "./overview-card";
import TotalReadingIcon from "@public/assets/svgs/total-reading-icon.svg";
import BookCompletedIcon from "@public/assets/svgs/book-completed.svg";
import QuizTaken from "@public/assets/svgs/quiz-taken.svg";

type Props = {};
const overviewCard: {
  text: string;
  value: number;
  percentValue: number;
  percentChange: "increase" | "decrease";
  vsText: string;
}[] = [
  {
    text: "Total Reading Time",
    value: 12000,
    percentValue: 12,
    percentChange: "increase",
    vsText: "vs Yesterday",
  },
  {
    text: "Total Books Completed",
    value: 1200,
    percentValue: 1,
    percentChange: "increase",
    vsText: "vs Yesterday",
  },
  {
    text: "Total Quiz Taken",
    value: 120,
    percentValue: -6,
    percentChange: "decrease",
    vsText: "vs Yesterday",
  },
];

const RenderIcon = ({ text }: { text: string }) => {
  if (text == "Total Reading Time") {
    return <TotalReadingIcon />;
  }
  if (text == "Total Books Completed") {
    return <BookCompletedIcon />;
  }
  if (text == "Total Quiz Taken") {
    return <QuizTaken />;
  }
};
const ActivityOverview = (props: Props) => {
  const [selectedActivity, setSelectedActivity] =
    useState<ActivityType>("Today");
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex justify-between">
        <h3 className="text-gray-900 text-2xl font-semibold">
          Activity Overview
        </h3>
        <div className="flex gap-x-2">
          {activityOverview.map((item, idx) => (
            <Button
              key={idx}
              className={cn(
                "shadow-none bg-transparent px-3 py-2 gap-x-2 hover:bg-transparent text-sm font-normal text-gray-600",
                {
                  "bg-brand-50 hover:bg-brand-100 text-brand-500":
                    selectedActivity == item.value,
                }
              )}
              onClick={() => setSelectedActivity(item.value)}
            >
              {item.text}
            </Button>
          ))}
        </div>
      </div>

      {/* card */}
      <div className="w-full flex gap-6 ">
        {overviewCard.map((item, idx) => (
          <OverviewCard
            key={idx}
            percentChange={item.percentChange}
            text={item.text}
            percentValue={item.percentValue}
            value={item.value}
            vsText={item.vsText}
            icon={<RenderIcon text={item.text} />}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityOverview;
