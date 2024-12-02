import { cn } from "@/lib/utils";
import { useQuiz } from "@/providers/quiz-provider";
import { TQuestion } from "@/types";
import React from "react";

type Props = {
  question: TQuestion;
};

const ReviewQuizSingleSelectQuestion = ({ question }: Props) => {
  const { userAnswer } = useQuiz();
  return (
    <div className="flex flex-col gap-y-4">
      {question.options.map((option, idx) => (
        <div
          className={cn(
            "flex border border-gray-200 rounded px-3 py-3 gap-x-7",
            {
              "border-greekBlue-6":
                userAnswer[question._id]?.selectedOption?.label == option.label,
            }
          )}
          key={`review-quiz-single${idx}`}
        >
          <span className="text-gray-900 font-semibold">{`${option.label.toUpperCase()}.`}</span>
          <span>{option.optionText}</span>
        </div>
      ))}
    </div>
  );
};

export default ReviewQuizSingleSelectQuestion;
