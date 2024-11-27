import { dummyDescription, dummyOptions } from "@/constants/dummy-data";
import { cn } from "@/lib/utils";
import { useQuiz } from "@/providers/quiz-provider";
import { TOption } from "@/types";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useState } from "react";
import AnswerCheckIcons from "./answer-check-icons";

type Props = {};

const SingleSelectQuestion = (props: Props) => {
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

  return (
    <div className="flex flex-col gap-y-8 w-full">
      <div className="flex w-full gap-3 items-center ">
        <p className="text-gray-800 font-semibold text-base min-w-[40%] max-w-[40%]">
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
      {/* image and option */}
      <div className="flex w-full h-auto overflow-y-auto justify-between gap-3">
        {/* question Image */}
        <div className="min-w-[40%] max-w-[40%]">
          <div className="bg-gray-50 w-full flex items-center justify-center p-4">
            <Image
              src="/assets/images/question-image.png"
              alt="image"
              className="w-3/5"
              width={100}
              height={100}
            />
          </div>
          {/* answer check */}
          <div
            className={cn("hidden", {
              "flex flex-col gap-y-6": hasAnswered && quizMode == "study",
            })}
          >
            <div className="flex w-full flex-wrap">
              {/* your answer */}
              <div className="flex gap-6">
                <p className="text-gray-800">Your Answer:</p>
                <div className="flex gap-2">
                  <span className="text-gray-900 text-sm font-semibold">
                    {`${selectedOption?.label}.`}
                  </span>
                  <span className="text-sm text-gray-700">
                    {selectedOption?.optionText}
                  </span>
                </div>
                <AnswerCheckIcons isCorrect={isCorrect} />
              </div>
            </div>

            <div className="flex w-full flex-wrap">
              {/* correct Answer */}
              <div className="flex gap-6">
                <p className="text-gray-800">Correct Answer:</p>

                <div className="flex gap-2">
                  <span className="text-gray-900 text-sm font-semibold">
                    {`${
                      getCorrectAnswer &&
                      getCorrectAnswer(questionNumber)?.label
                    }.`}
                  </span>
                  <span className="text-sm text-gray-700">
                    {getCorrectAnswer &&
                      getCorrectAnswer(questionNumber)?.optionText}
                  </span>
                </div>

                <div className="flex gap-3">
                  <div className="bg-success-600 p-1 w-fit h-fit rounded-[50%]">
                    <CheckIcon className="  text-white h-5 w-4" stroke="#fff" />
                  </div>
                  <span className="text-gray-800">Correct</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn("flex flex-col gap-y-4 min-w-[30%]", {
            " hidden": hasAnswered && quizMode == "study",
          })}
        >
          {questions[questionNumber]?.options?.map(
            (option: any, idx: number) => (
              <div
                className={cn(
                  "flex border border-gray-200 rounded px-3 py-3 gap-x-7",
                  { "border-greekBlue-6": selectedOption == option }
                )}
                onClick={() => {
                  handleAnswerSelect(option);
                }}
                key={idx}
              >
                <span className="text-gray-900 font-semibold">{`${option.label.toUpperCase()}.`}</span>
                <span>{option.optionText}</span>
              </div>
            )
          )}
        </div>
        {/* explanation */}
        <div
          className={cn("hidden text-justify", {
            " block": hasAnswered && quizMode == "study",
          })}
        >
          Organic chemistry is the study of the structure, properties,
          composition, reactions, and preparation of carbon-containing
          compounds. Most organic compounds contain carbon and hydrogen, but
          they may also include any number of other elements (e.g., nitrogen,
          oxygen, halogens, phosphorus, silicon, sulfur). Originally limited to
          the study of compounds produced by living organisms, organic chemistry
          has been broadened to include human-made substances (e.g., plastics).
        </div>
      </div>
    </div>
  );
};

export default SingleSelectQuestion;
