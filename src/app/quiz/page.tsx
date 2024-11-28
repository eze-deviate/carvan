import React from "react";
import QuizContainer from "./_components/quiz-container";
import QuizProvider from "@/providers/quiz-provider";

type Props = {};

const QuizPage = (props: Props) => {
  return (
    <QuizProvider>
      <QuizContainer />
    </QuizProvider>
  );
};

export default QuizPage;
