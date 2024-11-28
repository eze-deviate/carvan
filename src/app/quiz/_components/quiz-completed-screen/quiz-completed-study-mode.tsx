import { Button } from "@/components/ui/button";
import BookIcon from "@public/assets/svgs/book.svg";
import CheckMarkIcon from "@public/assets/svgs/checkmark.svg";
import QuizModuleIcon from "@public/assets/svgs/quiz-module.svg";
import ScoreIcon from "@public/assets/svgs/score.svg";
import InProgressHeader from "../in-progress/in-progress-header";
import LeaveAReviewModal from "@/components/modal/leave-a-review-modal";
import StarQuizIcon from "@public/assets/svgs/start-quiz-icon.svg";
import { useQuiz } from "@/providers/quiz-provider";
type Props = {};
const nextModule = [1, 2];
const QuizCompletedStudyMode = (props: Props) => {
  const { userScore, getTotalScore } = useQuiz();
  return (
    <div className="flex flex-col h-screen min-h-screen ">
      <InProgressHeader className="fixed top-0 left-0 right-0" />
      <div className="flex flex-col gap-y-12 items-center justify-center pb-10">
        <div className="flex flex-col gap-y-4">
          {/* checkmark */}
          <div className="w-20 h-20 rounded-full p-2 bg-success-600 shadow-sm flex justify-center items-center self-center">
            <CheckMarkIcon />
          </div>

          <div className="flex flex-col gap-y-2">
            <h1 className="text-3xl font-semibold text-gray-900">
              Bravo Quiz Completed
            </h1>
            <p className="text-sm text-gray-700 font-normal text-center">
              Well-done! on completing the quiz session
            </p>
          </div>

          {/* score */}
          <div className="flex gap-x-8 items-center justify-center">
            {/* score */}
            <div className="flex items-center gap-x-3">
              <ScoreIcon />
              <span className="text-black text-sm">Score</span>
              <span className="text-gray-900 text-lg font-medium">
                {`${userScore} / ${getTotalScore()}`}
              </span>
            </div>
          </div>

          {/* want to try exam mode? */}
          <div className="flex flex-col gap-y-6">
            <p className="text-sm text-gray-700">
              Want to try out the
              <span className="text-sm font-medium"> Exam mode </span>
              of the quiz?
            </p>
            <Button variant={"primary"}>Get Started</Button>
          </div>
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
            <p className="text-gray-600 text-sm font-normal">
              Do you have any feedback or opinion on how we can improve your
              experience
            </p>
            <div className="flex w-full justify-center">
              <LeaveAReviewModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCompletedStudyMode;
