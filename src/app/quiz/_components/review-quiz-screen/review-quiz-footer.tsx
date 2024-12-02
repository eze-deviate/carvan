import React from "react";
import { Button } from "@/components/ui/button";
import FlagIcon from "@public/assets/svgs/flag.svg";
import { useQuiz } from "@/providers/quiz-provider";

type Props = {};

const ReviewScreenFooter = (props: Props) => {
  const { handleSubmitReview } = useQuiz();
  return (
    <footer className="flex items-center justify-center w-full gap-x-12 mt-24">
      <Button variant="outline" className="gap-x-2">
        <FlagIcon />
        Report
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          handleSubmitReview();
        }}
      >
        Confirm Submission
      </Button>
    </footer>
  );
};

export default ReviewScreenFooter;
