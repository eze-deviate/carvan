"use client";
import React, { useState } from "react";
import { TQuizMode, TQuizStage } from "@/types";
import StartScreen from "./start-screen";
import InProgressScreen from "./in-progress";
import QuizCompletedScreen from "./quiz-completed-screen";
import { useQuiz } from "@/providers/quiz-provider";

type Props = {};

const QuizContainer = () => {
  const { quizStage } = useQuiz();

  if (quizStage == "pre") {
    return <StartScreen />;
  }
  if (quizStage == "inprogress") {
    return <InProgressScreen />;
  }
  if (quizStage == "completed") {
    return <QuizCompletedScreen />;
  }
};

export default QuizContainer;
