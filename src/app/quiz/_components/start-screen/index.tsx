import React from "react";
import { Button } from "@/components/ui/button";
import { TQuizMode, TQuizStage } from "@/types";
import { Cross1Icon } from "@radix-ui/react-icons";
import QuizModuleIcon from "@public/assets/svgs/quiz-module.svg";
import BookIcon from "@public/assets/svgs/book.svg";
import Image from "next/image";
import QuizModeTabs from "./quiz-mode-tabs";
import { useQuiz } from "@/providers/quiz-provider";

type Props = {
  // quizMode: TQuizMode | undefined;
  // setQuizMode: React.Dispatch<React.SetStateAction<TQuizMode>>;
  // setQuizStage: React.Dispatch<React.SetStateAction<TQuizStage>>;
};

const StartScreen = ({}: Props) => {
  const { quizMode, setQuizMode, setQuizStage } = useQuiz();
  return (
    <div className="flex flex-col h-screen">
      <header className="flex fixed top-0 left-0 w-full justify-between p-4 items-center border-b shadow-md h-20">
        <div className="flex items-center">
          <img
            src="/assets/svgs/logo.svg"
            alt="Caravan logo"
            className="h-10 mr-2"
          />
          <h1 className="font-bold text-[#111827] text-2xl">Caravan</h1>
        </div>

        <Button
          className="gap-2 flex items-center text-gray-900 text-base font-normal"
          variant="transparent"
        >
          <Cross1Icon className="" stroke="#1D2939" />
          Cancel
        </Button>
      </header>

      <div className="flex gap-x-12 w-full flex-grow mt-16  overflow-auto justify-center items-center">
        <div className="flex gap-x-12 w-full justify-center">
          {/* left */}
          <div className="max-w-[40%] flex flex-col gap-y-6">
            <Image
              src="/assets/images/book-image.webp"
              alt={"book"}
              className="w-full h-3/5"
              width={100}
              height={100}
            />
            <div className="p-4 flex flex-col gap-y-4 bg-[#FFF7EA] border border-[#FFEBCC] shadow-sm">
              <div className="flex flex-col gap-1">
                {/* share and date */}
                <div className="flex justify-between">
                  <p>Taken on {}</p>
                  <Button variant="transparent" className="p-0"></Button>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col gap-y-10 max-w-[40%] ">
            <div className="flex flex-col gap-y-8">
              {/* details */}
              <div className="flex flex-col gap-y-3">
                <h3 className="text-gray-500 font-medium text-sm uppercase text-center">
                  ASSESSMENT
                </h3>

                <h1 className="text-gray-900 text-2xl font-semibold text-center">
                  Classification of chemical compounds
                </h1>
                <div className="w-full flex justify-center items-center">
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
              {/* mode */}
              <div className="flex flex-col gap-y-6">
                <h4 className="text-sm text-gray-500 uppercase text-center">
                  Assesment Modes
                </h4>
                <QuizModeTabs />
              </div>
            </div>
            <Button
              variant="primary"
              className="w-fit py-3 px-8 opacity-100 self-center"
              onClick={() => setQuizStage && setQuizStage("inprogress")}
            >
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
