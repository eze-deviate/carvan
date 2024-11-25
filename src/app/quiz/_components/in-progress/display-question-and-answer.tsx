import React from "react";
import SingleSelectQuestion from "./single-select-question";

type Props = {};

const DisplayQuestionAndAnswer = (props: Props) => {
  const questionType = "ssq";
  if (questionType == "ssq") return <SingleSelectQuestion />;
};

export default DisplayQuestionAndAnswer;
