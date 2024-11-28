import React from "react";
import ActivityOverview from "./activity-overview";
import CurrentlyReading from "./currently-reading";
import ContinueQuizCard from "./continue-quiz-card";
import ContinueQuizSection from "./continue-quiz-section";

type Props = {};

const OverviewTab = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-12">
      <ActivityOverview />
      <CurrentlyReading />
      <ContinueQuizSection />
    </div>
  );
};

export default OverviewTab;
