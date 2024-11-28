import { cn } from "@/lib/utils";
import { useQuiz } from "@/providers/quiz-provider";
import { TQuestion } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  question: TQuestion;
};

const VisualSingleSelectOption = ({ question }: Props) => {
  const { userAnswer } = useQuiz();
  console.log("USERS ANSWER", userAnswer);
  return (
    <div className="flex flex-wrap w-full h-auto gap-10">
      {question.options.map((option, idx) => (
        <div
          className={cn(
            "flex flex-col gap-y-3 w-[calc(50%-2.5rem)] flex-shrink-0",
            {
              "border-greekBlue-6":
                userAnswer[question._id]?.selectedOption?.label == option.label,
            }
          )}
          key={`review-quiz-visual${idx}`}
        >
          <span
            className={cn(
              " w-fit text-sm font-semibold text-gray-900 px-[0.3125rem] border border-gray-300 rounded flex items-center justify-center"
            )}
          >{`${option.label.toUpperCase()}`}</span>
          <div
            className={cn(
              "w-full min-w-full bg-gray-50 rounded p-4 flex items-center justify-center",
              {
                "border-greekBlue-6 border":
                  userAnswer[question._id]?.selectedOption?.label ==
                  option.label,
              }
            )}
          >
            <Image
              src={option.image}
              alt="image"
              className="w-3/6 h-auto"
              width={100}
              height={100}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisualSingleSelectOption;
