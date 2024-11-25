import React from "react";
import { Button } from "@/components/ui/button";
import FlagIcon from "@public/assets/svgs/flag.svg";
import { cn } from "@/lib/utils";
import { ui } from "@/constants";
import ReportQuestionModal from "@/components/modal/report-question-modal";
import EndQuizPromptModal from "@/components/modal/End-quiz-prompt-modal";

type Props = {};

const InprogressFooter = (props: Props) => {
  return (
    <div className={cn("w-full flex justify-end", ui.quizPadding)}>
      <div className="flex gap-7  items-center">
        {/* <Button variant="outline" className="gap-2">
          <FlagIcon />
          Report
        </Button> */}
        <ReportQuestionModal />
        <Button variant="primary" className="disabled:bg-gray-300">
          Continue
        </Button>

        <EndQuizPromptModal />
      </div>
    </div>
  );
};

export default InprogressFooter;
