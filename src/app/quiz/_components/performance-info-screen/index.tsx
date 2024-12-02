import React from "react";
import EndQuizPromptModal from "@/components/modal/End-quiz-prompt-modal";
import { format } from "date-fns";
import ScoreIcon from "@public/assets/svgs/score.svg";
import GradeIcon from "@public/assets/svgs/grade.svg";
import ShareIcon from "@public/assets/svgs/share.svg";
import FlagIcon from "@public/assets/svgs/flag.svg";
import BookIcon from "@public/assets/svgs/book.svg";
import QuizModuleIcon from "@public/assets/svgs/quiz-module.svg";
import StarQuizIcon from "@public/assets/svgs/start-quiz-icon.svg";
import { Button } from "@/components/ui/button";
import LeaveAReviewModal from "@/components/modal/leave-a-review-modal";
import { cn } from "@/lib/utils";
import { ui } from "@/constants";

type Props = {};
const nextModule = [1, 2];
const PerformanceInfoScreen = (props: Props) => {
  return (
    <div className="h-screen w-full flex flex-col gap-y-20">
      <header className="flex justify-between py-6 px-12 border-b border-gray-200 shadow-md">
        <div className="flex items-center">
          <img
            src="/assets/svgs/logo.svg"
            alt="Caravan logo"
            className="h-10 mr-2"
          />
          <h1 className="font-bold text-[#111827] text-2xl">Caravan</h1>
        </div>

        <EndQuizPromptModal />
      </header>

      <div className={cn("flex flex-col gap-y-12 w-full", ui.quizPadding)}>
        <div className=" flex flex-col gap-y-6 p-5 bg[#FFF7EA] border border-[#FFEBCC] shadow-sm">
          <div className="flex flex-col gap-4">
            {/* date and title */}
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-700">
                {`Taken on ${format(new Date(), "MMMM d, yyyy")}`}
              </span>
              <h3 className="text-xl font-semibold text-gray-900">
                Classification of chemical compounds
              </h3>
            </div>
            {/* score */}
            <div className="flex gap-6">
              <div className="flex gap-3">
                <ScoreIcon />
                <span className="text-sm text-gray-700">Score:</span>
                <span className="text-gray-900 text-base font-semibold">
                  20 marks
                </span>
              </div>
              <div className="flex gap-3">
                <GradeIcon />
                <span className="text-sm text-gray-700">Grade:</span>
                <span className="text-gray-900 text-base font-semibold">
                  Excellent
                </span>
              </div>
            </div>
          </div>
          <Button variant="primary" className="w-fit gap-x-2 px-5">
            <ShareIcon />
            Share Scorecard
          </Button>
        </div>

        {/* NEXT MODULE */}
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl text-gray-900 font-semibold">
              Next Modules
            </h2>

            <div className="flex flex-col w-full">
              {nextModule.map((_, idx) => (
                <div
                  className="flex justify-between items-center p-4 gap-4 border-b border-gray-200"
                  key={idx}
                >
                  <div className="flex flex-col gap-y-3">
                    <h3 className="text-gray-900 text-base font-medium">
                      Classification of Compounds
                    </h3>
                    <div className="flex gap-4 items-center">
                      <span className="gap-2 flex w-fit h-fit text-gray-500 text-sm font-normal">
                        <QuizModuleIcon /> Module 01
                      </span>
                      <span className="gap-2 flex w-fit h-fit text-gray-500 text-sm font-normal">
                        <BookIcon /> 35 Questions
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <StarQuizIcon />
                    <span className="text-base text-brand-500">Start Quiz</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-5 w-full">
            <p className="text-gray-600 text-sm font-normal text-center">
              Do you have any feedback or opinion on how we can improve your
              experience
            </p>
            <div className="flex w-full justify-center gap-x-5 mb-20">
              <Button variant="outline" className="gap-x-2">
                <FlagIcon />
                Make Report
              </Button>
              <LeaveAReviewModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceInfoScreen;
