import React from "react";
import { Button } from "@/components/ui/button";
import { Cross1Icon } from "@radix-ui/react-icons";
import QuizModuleIcon from "@public/assets/svgs/quiz-module.svg";
import BookIcon from "@public/assets/svgs/book.svg";
import EndQuizPromptModal from "@/components/modal/End-quiz-prompt-modal";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const InProgressHeader = ({ className }: Props) => {
  return (
    <header
      className={cn(
        "flex  w-full justify-between px-12 py-[1.75rem] items-center "
      )}
    >
      <div className="flex items-center">
        <div className="flex items-center">
          <img
            src="/assets/svgs/logo.svg"
            alt="Caravan logo"
            className="h-10 mr-2"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-gray-900 font-medium text-lg">
            Classification of chemical compounds
          </h1>
          <div className="flex gap-4 items-center">
            <span className="gap-2 flex w-fit h-fit text-gray-500 text-sm font-normal">
              <QuizModuleIcon /> Module 01
            </span>
            <span className="gap-2 flex w-fit h-fit text-gray-500 text-sm font-normal">
              <BookIcon /> 35 Questions
            </span>
          </div>
        </div>
      </div>

      {/* <Button
        className="gap-2 flex items-center text-gray-900 text-base font-normal"
        variant="transparent"
      >
        <Cross1Icon className="" stroke="#1D2939" />
        Cancel
      </Button> */}

      <EndQuizPromptModal />
    </header>
  );
};

export default InProgressHeader;
