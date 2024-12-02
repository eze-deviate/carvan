import { cn } from "@/lib/utils";
import { useQuiz } from "@/providers/quiz-provider";
import React from "react";
import ClockIcon from "@public/assets/svgs/clock.svg";
import { Button } from "@/components/ui/button";
import { Cross1Icon } from "@radix-ui/react-icons";
import FlashIcon from "@public/assets/svgs/flash.svg";
import Image from "next/image";
import DisplayReviewOption from "./display-review-option";
import ReviewScreenFooter from "./review-quiz-footer";
import { ui } from "@/constants";
type Props = {};

const ReviewQuizScreen = (props: Props) => {
  const {
    unansweredQuestions,
    setQuestionNumber,
    questions,
    unansweredQuestionsDict,
  } = useQuiz();
  return (
    <div className="flex flex-col gap-y-4 pb-16">
      <header className="flex justify-between py-6 px-12 border-b border-gray-200 shadow-md">
        <div className="flex">
          <div className="flex gap-x-6">
            <div>
              <img
                src="/assets/svgs/logo.svg"
                alt="Caravan logo"
                className="h-10 mr-2"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-gray-900 font-semibold text-2xl">
                Review Your Answers
              </h2>
              <div
                className={cn("flex gap-x-3", {
                  hidden: unansweredQuestions.length <= 0,
                })}
              >
                {unansweredQuestions.map((q, idx) => (
                  <span
                    key={`unanswered-${idx}`}
                    className="bg-gray-200 rounded p-[0.625rem] text-gray-800 text-sm font-medium cursor-pointer"
                    onClick={() => {
                      setQuestionNumber(q.index);
                    }}
                  >{`Q.${q.index + 1}`}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-x-6 items-center">
          <div className="flex gap-x-1">
            <ClockIcon />
            <div className="h-fit w-fit bg-warning-400 py-[0.200rem] px-2 text-white rounded text-sm font-medium">
              00:00
            </div>
          </div>

          <div className="border-r border-gray-300 h-4"></div>
          <Button
            className="p-0 gap-2 flex items-center text-gray-900 text-base font-normal"
            variant="transparent"
          >
            <Cross1Icon className="" stroke="#1D2939" />
            Cancel
          </Button>
        </div>
      </header>

      <div className={cn("flex rounded", ui.quizPadding)}>
        <div className="rounded flex gap-x-3 justify-start items-center bg-[#F0F6EE] px-4 py-3">
          <FlashIcon />
          <p className="flex-1">
            {` It’s important to review your answers before submission. This will
            help ensure that all questions are answered to the best of your
            ability`}
          </p>
        </div>
      </div>

      <div className={cn("flex flex-col gap-y-10", ui.quizPadding)}>
        {questions.map((question, idx) => {
          return (
            <div className="flex flex-col gap-y-6" key={idx}>
              <div className="flex flex-col gap-y-3">
                <p className="text-gray-800 font-semibold text-base flex-two-40">{`${
                  idx + 1
                }. ${question.questionText}`}</p>
                {unansweredQuestionsDict[question._id] && (
                  <div className="flex items-center">
                    <p>Unanswered Question</p>
                  </div>
                )}
              </div>
              <div className="flex gap-x-10">
                <div className="bg-gray-50 w-full flex items-center justify-center p-4 flex-two-40">
                  <Image
                    src="/assets/images/question-image.png"
                    alt="image"
                    className="w-3/5"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-two-40">
                  <DisplayReviewOption
                    questionType={question.questionType}
                    question={question}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ReviewScreenFooter />
    </div>
  );
};

export default ReviewQuizScreen;
