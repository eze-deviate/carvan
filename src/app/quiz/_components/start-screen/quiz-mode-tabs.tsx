import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TQuizMode, TQuizStage } from "@/types";
import { quizModeTabs } from "@/constants";
import { cn } from "@/lib/utils";
import QuizModeIcon from "./quiz-mode-icon";
import { useQuiz } from "@/providers/quiz-provider";

type Props = {
  // quizMode: TQuizMode | undefined;
  // setQuizMode: React.Dispatch<React.SetStateAction<TQuizMode>>;
};

const QuizModeTabs = ({}: Props) => {
  const { quizMode, setQuizMode } = useQuiz();
  return (
    <Tabs
      className="w-full"
      onValueChange={(val) => setQuizMode(val as TQuizMode)}
      value={quizMode}
    >
      <TabsList className="bg-transparent  h-fit justify-center gap-12 p-0 w-full">
        {quizModeTabs.map((mode, idx) => (
          <TabsTrigger
            key={idx}
            value={mode.value}
            className={cn(
              "flex gap-2 px-4 py-[0.5625rem] border text-gray-900 text-sm font-medium capitalize",
              {
                "border border-brand-500 shadow-lg": quizMode == mode.value,
              }
            )}
          >
            <QuizModeIcon mode={mode.value} />
            {mode.text}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={"study" as TQuizMode}>
        <p className="text-gray-600 text-sm font-normal text-center">
          Answer questions at your own pace with instant feedback. Get the
          correct answers and detailed insights to deepen your understanding.
        </p>
      </TabsContent>
      <TabsContent value={"exam" as TQuizMode}>
        <p className="text-gray-600 text-sm font-normal text-center">
          Answer questions under timed conditions to simulate a real exam
          environment. Perfect for practicing time management and exam pressure.
        </p>
      </TabsContent>
    </Tabs>
  );
};

export default QuizModeTabs;
