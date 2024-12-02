import React from "react";
import { QuestionType } from "@/constants/enums";
import ReviewQuizSingleSelectOption from "./review-quiz-single-select-option";
import VisualSingleSelectOption from "./visual-single-select-option";
import MultipleSelectOption from "./multiple-select-option";
import { TQuestion } from "@/types";
type Props = {
  questionType: string;
  question: TQuestion;
};

const DisplayReviewOption = ({ questionType, question }: Props) => {
  if (questionType == QuestionType.ssc) {
    return <ReviewQuizSingleSelectOption question={question} />;
  }
  if (questionType == QuestionType.vsc) {
    return <VisualSingleSelectOption question={question} />;
  }
  if (questionType == QuestionType.mc) {
    return <MultipleSelectOption />;
  }
};

export default DisplayReviewOption;
