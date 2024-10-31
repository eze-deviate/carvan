import React from "react";
import ActivityOverview from "./activity-overview";
import CurrentlyReading from "./currently-reading";

type Props = {};

const OverviewTab = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-12">
      <ActivityOverview />
      <CurrentlyReading />
    </div>
  );
};

export default OverviewTab;
