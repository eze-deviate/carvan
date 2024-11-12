import React from "react";
import QuizModuleIcon from "@public/assets/svgs/quiz-module.svg";
import BookIcon from "@public/assets/svgs/book.svg";

type Props = {};

const QuizModuleItem = (props: Props) => {
  return (
    <div className="flex flex-col py-3 border-b border-b-gray-200">
      <div className="flex flex-col gap-3">
        <h5 className="text-gray-900 text-base font-medium">
          Classification of Compounds
        </h5>

        <div className="flex gap-4 items-center">
          <span className="gap-2 flex w-fit h-fit text-gray-500 text-sm font-normal">
            <QuizModuleIcon /> Module 01
          </span>
          <span className="gap-2 flex w-fit h-fit text-gray-500 text-sm font-normal">
            <BookIcon /> 35 Questions
          </span>
        </div>
      </div>
      <p className="text-gray-800 font-normal text-base">
        Test your understanding of the first chapter of the organic Chemistry
        text which dealt on the different ways of classification of compounds
      </p>
    </div>
  );
};

export default QuizModuleItem;
