import React, { useEffect, useState } from "react";
import SingleSelectQuestion from "./single-select-question";
import { useQuiz } from "@/providers/quiz-provider";
import VisualSingleChoiceQuestion from "./visual-single-choice";
import { QuestionType } from "@/constants/enums";
import MultipleChoiceQuestion from "./multiple-choice-question";

type Props = {};

const DisplayQuestionAndAnswer = (props: Props) => {
  const { questions, questionNumber } = useQuiz();
  const [currentQuestion, setCurrentQuestion] = useState<any>({});
  // const currentQuestion = questions[questionNumber];

  useEffect(() => {
    setCurrentQuestion(questions[questionNumber]);
  }, [questionNumber]);

  if (currentQuestion?.questionType == QuestionType.ssc)
    return <SingleSelectQuestion />;
  if (currentQuestion?.questionType == QuestionType.vsc)
    return <VisualSingleChoiceQuestion />;

  return <MultipleChoiceQuestion />;
};

export default DisplayQuestionAndAnswer;
