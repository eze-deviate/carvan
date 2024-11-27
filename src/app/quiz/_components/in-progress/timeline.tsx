import React from "react";
import QuizProgressBar from "./quiz-progress-bar";
import ClockIcon from "@public/assets/svgs/clock.svg";
import { cn } from "@/lib/utils";
import { ui } from "@/constants";
import QuizCountdown from "./count-down";
import { useQuiz } from "@/providers/quiz-provider";

type Props = {
  quizStarted: boolean;
  onSubmitQuiz: () => void;
};

const Timeline = ({ quizStarted, onSubmitQuiz }: Props) => {
  const { quizMode, questionNumber, questions } = useQuiz();
  const percent = ((questionNumber + 1) / questions.length) * 100;
  return (
    <div
      className={cn(
        "flex gap-x-4 items-center justify-center w-full my-[1rem] px-40",
        ui.quizPadding
      )}
    >
      <div className="flex gap-x-4 items-center justify-center w-full">
        <QuizProgressBar progress={percent} />
        {quizMode == "exam" && <ClockIcon />}
        {quizMode == "exam" && (
          <QuizCountdown
            onSubmitQuiz={onSubmitQuiz}
            quizStarted={quizStarted}
          />
        )}
      </div>
    </div>
  );
};

export default Timeline;
