import EndQuizPromptModal from "@/components/modal/End-quiz-prompt-modal";
import ReportQuestionModal from "@/components/modal/report-question-modal";
import { Button } from "@/components/ui/button";
import { ui } from "@/constants";
import { cn } from "@/lib/utils";
import { useQuiz } from "@/providers/quiz-provider";

type Props = {
  className?: string;
};

const InprogressFooter = ({ className }: Props) => {
  const {
    goToNextQuestion,
    questionNumber,
    questions,
    handleSubmitQuiz,
    quizMode,
    goToPrevQuestion,
    unansweredQuestions,
    setQuestionNumber,
  } = useQuiz();

  return (
    <div className={cn("w-full flex justify-end", ui.quizPadding, className)}>
      <div className="flex gap-x-3">
        <h4 className="text-sm text-gray-900 font-medium">
          Unanswered Question:
        </h4>
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
                if (setQuestionNumber) setQuestionNumber(q.index);
              }}
            >{`Q.${q.index + 1}`}</span>
          ))}
        </div>
      </div>
      <div className="flex gap-7  items-center">
        <Button
          variant="transparent"
          disabled={questionNumber <= 0}
          onClick={goToPrevQuestion}
          className={cn("", { " hidden": quizMode == "study" })}
        >
          Previous
        </Button>
        {quizMode === "study" && <ReportQuestionModal />}

        <Button
          variant="primary"
          className={cn("disabled:bg-gray-300", {})}
          onClick={
            questionNumber < questions.length - 1
              ? goToNextQuestion
              : handleSubmitQuiz
          }
        >
          {questionNumber < questions.length - 1
            ? quizMode == "study"
              ? "Continue"
              : "Next"
            : "Submit"}
        </Button>

        <EndQuizPromptModal />
      </div>
    </div>
  );
};

export default InprogressFooter;
