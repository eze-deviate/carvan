import { cn } from "@/lib/utils";
import { useQuiz } from "@/providers/quiz-provider";
import { TOption } from "@/types";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

type Props = {};

const VisualSingleChoiceQuestion = (props: Props) => {
  const {
    hasAnswered,
    quizMode,
    questionNumber,
    questions,
    handleAnswerSelect,
    isCorrect,
    getCorrectAnswer,
    selectedOption,
  } = useQuiz();

  console.log(
    "study mode",
    quizMode == "study",
    "has answered",
    hasAnswered,
    "Is not correct",
    isCorrect
  );
  return (
    <div className="flex flex-col gap-y-8 w-full">
      <div className="flex w-full gap-10 items-center">
        <p className="text-gray-800 font-semibold text-base w-[calc(50%-2.5rem)]">
          {`${questionNumber + 1}. ${questions[questionNumber]?.questionText}`}
        </p>
        {quizMode == "study" && hasAnswered && (
          <div className="flex gap-1 items-center">
            <div className="w-3 h-3 rounded-[50%] bg-success-500"></div>
            <p className="text-gray-700 text-lg font-medium">
              Notes on the question
            </p>
          </div>
        )}
      </div>

      <div className="flex w-full h-auto gap-10">
        {/* options */}
        <div
          className={cn("flex gap-10 flex-wrap", {
            "w-[calc(50%-2.5rem)": hasAnswered,
          })}
        >
          {questions[questionNumber]?.options?.map(
            (option: TOption, idx: number) => (
              <div
                key={idx}
                className={cn(
                  "flex flex-col gap-y-3 w-[calc(50%-2.5rem)] flex-shrink-0 cursor-pointer"
                )}
                onClick={() => {
                  handleAnswerSelect(option);
                }}
              >
                <span
                  className={cn(
                    " w-fit text-sm font-semibold text-gray-900 px-[0.3125rem] border border-gray-300 rounded flex items-center justify-center",
                    { "border-greekBlue-6 border": selectedOption == option }
                  )}
                >{`${option.label.toUpperCase()}`}</span>
                <div
                  className={cn(
                    "w-full min-w-full bg-gray-50 rounded p-4 flex items-center justify-center",
                    {
                      "border-greekBlue-6 border": selectedOption == option,
                      "border-error-600 border":
                        quizMode == "study" &&
                        selectedOption == option &&
                        hasAnswered &&
                        !isCorrect,
                      "border-success-500 border":
                        quizMode == "study" &&
                        hasAnswered &&
                        getCorrectAnswer &&
                        getCorrectAnswer(questionNumber)?.label == option.label,
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
                {quizMode == "study" &&
                  selectedOption == option &&
                  hasAnswered &&
                  !isCorrect && (
                    <div className="flex gap-3">
                      <div className="bg-error-600 p-1 w-fit h-fit rounded-[50%]">
                        <Cross2Icon
                          className="  text-white h-5 w-4"
                          stroke="#fff"
                        />
                      </div>
                      <span className="text-gray-800">InCorrect</span>
                    </div>
                  )}
                {quizMode == "study" &&
                  hasAnswered &&
                  getCorrectAnswer &&
                  getCorrectAnswer(questionNumber)?.label == option.label && (
                    <div className="flex gap-3">
                      <div className="bg-success-600 p-1 w-fit h-fit rounded-[50%]">
                        <CheckIcon
                          className="  text-white h-5 w-4"
                          stroke="#fff"
                        />
                      </div>
                      <span className="text-gray-800">Correct</span>
                    </div>
                  )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default VisualSingleChoiceQuestion;
