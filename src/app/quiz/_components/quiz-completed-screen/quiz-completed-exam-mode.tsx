import React from "react";
import ShareModal from "@/components/modal/share-modal";
import { Button } from "@/components/ui/button";
import { ui } from "@/constants";
import { cn } from "@/lib/utils";
import CheckMarkIcon from "@public/assets/svgs/checkmark.svg";
import CheckCorrectIcon from "@public/assets/svgs/check-correct.svg";
import ScoreIcon from "@public/assets/svgs/score.svg";
import WiatClockIcon from "@public/assets/svgs/wait-clock.svg";
import InProgressHeader from "../in-progress/in-progress-header";
import { useQuiz } from "@/providers/quiz-provider";
type Props = {};

const QuizCompletedExamMode = (props: Props) => {
  const { setQuizStage } = useQuiz();
  return (
    <div className="flex flex-col h-screen justify-between">
      <InProgressHeader />
      <div className="flex flex-col gap-y-12 items-center justify-center">
        <div className="flex flex-col gap-y-8">
          {/* checkmark */}
          <div className="w-20 h-20 rounded-full p-2 bg-success-600 shadow-sm flex justify-center items-center self-center">
            <CheckMarkIcon />
          </div>

          <div className="gap-y-6 flex flex-col w-full">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-3xl font-semibold text-gray-900">
                Bravo Quiz Completed
              </h1>
              <p className="text-sm text-gray-700 font-normal">
                Well-done! on completing the quiz session
              </p>
            </div>

            <div className="flex gap-x-8 items-center">
              {/* score */}
              <div className="flex items-center gap-x-3">
                <ScoreIcon />
                <span className="text-black text-sm">Score</span>
                <span className="text-gray-900 text-lg font-medium">20/24</span>
              </div>
              {/* time */}
              <div className="flex items-center gap-x-3">
                <WiatClockIcon />
                <span className="text-black text-sm">Time</span>
                <span className="text-gray-900 text-lg font-medium">
                  12 mins
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button variant="outline" className="gap-x-2">
            <CheckCorrectIcon />
            <span
              onClick={() => {
                setQuizStage && setQuizStage("correction");
              }}
            >
              Check Correction
            </span>
          </Button>

          <p className="text-sm text-gray-700">
            Check the corrections for the questions you got wrong.
          </p>
        </div>
      </div>

      {/* footer */}
      <div className={cn("flex justify-between pb-10", ui.quizPadding)}>
        {/* <Button variant="outline" className="gap-x-2">
  <ShareIcon />
  Share Scorecard
</Button> */}
        <ShareModal link="https://stackoverflow.com/questions/79107395/next-js-14-2-10-build-error-cant-resolve-canvas-when-using-pdfjs-dist-in-c" />
        <Button
          variant="primary"
          onClick={() => {
            setQuizStage && setQuizStage("performance-info");
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default QuizCompletedExamMode;
