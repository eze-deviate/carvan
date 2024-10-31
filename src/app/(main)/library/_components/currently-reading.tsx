import ResponsiveGrid from "@/components/layout/responsive-grid";
import React from "react";
import CurrentlyReadingCard from "./currently-reading-card";

type Props = {};

const CurrentlyReading = (props: Props) => {
  return (
    <ResponsiveGrid title="Currently Reading" containerClassName="h-96">
      {Array(6)
        .fill(0)
        .map((item) => (
          <CurrentlyReadingCard />
        ))}
    </ResponsiveGrid>
  );
};

export default CurrentlyReading;
