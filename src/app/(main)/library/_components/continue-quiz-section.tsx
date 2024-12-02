import ResponsiveGrid from "@/components/layout/responsive-grid";
import React from "react";
import ContinueQuizCard from "./continue-quiz-card";

type Props = {};

const ContinueQuizSection = (props: Props) => {
  return (
    <ResponsiveGrid title="Currently Reading" containerClassName="h-96">
      {Array(6)
        .fill(0)
        .map((item, idx) => (
          <ContinueQuizCard key={idx} />
        ))}
    </ResponsiveGrid>
  );
};

export default ContinueQuizSection;
