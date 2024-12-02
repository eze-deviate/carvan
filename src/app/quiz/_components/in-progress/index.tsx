import React, { useEffect, useState } from "react";
import InProgressHeader from "./in-progress-header";
import Timeline from "./timeline";
import InprogressFooter from "./in-progress-footer";
import DisplayQuestionAndAnswer from "./display-question-and-answer";
import { cn } from "@/lib/utils";
import { ui } from "@/constants";
import CircularProgress from "@/components/ui/circlar-progress";
import OutOfTimeComponent from "./out-of-time-component";

type Props = {};

const InProgressScreen = (props: Props) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [countdown, setCountdown] = useState(5); // Pre-quiz countdown starts at 5 seconds
  const [outOfTime, setOutTime] = useState(false);
  useEffect(() => {
    if (countdown > 0) {
      // Pre-quiz countdown logic
      const preQuizTimer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(preQuizTimer); // Cleanup
    } else if (!quizStarted) {
      // Start the quiz
      setQuizStarted(true);
    }
  }, [countdown, quizStarted]);
  const handleSubmitTest = () => {
    setOutTime(true);
  };
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* header and timeline */}
      <div className="w-full flex flex-col">
        <InProgressHeader />
        <Timeline quizStarted={quizStarted} onSubmitQuiz={handleSubmitTest} />
      </div>
      <>
        {outOfTime ? (
          <OutOfTimeComponent />
        ) : (
          <>
            {!quizStarted && (
              <div className="flex-1 flex justify-center items-center w-full">
                <div className="flex flex-col gap-y-3">
                  <CircularProgress
                    percent={(countdown / 5) * 100}
                    isCountDown
                    // fillColor="#F0F6EE"
                    // borderColor=
                    countDown={countdown}
                    className="text-gray-900 font-semibold"
                  />
                  <span>Starting in...</span>
                </div>
              </div>
            )}
            {quizStarted && (
              <div className={cn("overflow-y-auto", ui.quizPadding)}>
                <DisplayQuestionAndAnswer />
              </div>
            )}
            {quizStarted && <InprogressFooter />}
          </>
        )}
      </>
    </div>
  );
};

export default InProgressScreen;
