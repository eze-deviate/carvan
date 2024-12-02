"use client";
import React, { useState } from "react";
import { TQuizMode, TQuizStage } from "@/types";
import StartScreen from "./start-screen";
import InProgressScreen from "./in-progress";
import QuizCompletedScreen from "./quiz-completed-screen";
import { useQuiz } from "@/providers/quiz-provider";
import CorrectScreen from "./correction-screen";
import ReviewQuizScreen from "./review-quiz-screen";
import PerformanceInfoScreen from "./performance-info-screen";

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
  if (quizStage == "correction") {
    return <CorrectScreen />;
  }
  if (quizStage == "review") {
    return <ReviewQuizScreen />;
  }
  if (quizStage == "performance-info") {
    return <PerformanceInfoScreen />;
  }
};

export default QuizContainer;
