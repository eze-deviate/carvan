"use client";
import React, { useState } from "react";
import { TQuizMode, TQuizStage } from "@/types";
import StartScreen from "./start-screen";
import InProgressScreen from "./in-progress";
import QuizCompletedScreen from "./quiz-completed-screen";

type Props = {};

const QuizContainer = (props: Props) => {
  const [quizMode, setQuizMode] = useState<TQuizMode>("study");
  const [quizStage, setQuizStage] = useState<TQuizStage>("pre");
  if (quizStage == "pre") {
    return (
      <StartScreen
        quizMode={quizMode}
        setQuizMode={setQuizMode}
        setQuizStage={setQuizStage}
      />
    );
  }
  if (quizStage == "inprogress") {
    return <InProgressScreen />;
  }
  if (quizStage == "completed") {
    return <QuizCompletedScreen />;
  }
};

export default QuizContainer;
