import React from "react";
import StudyModeIcon from "@public/assets/svgs/study-mode.svg";
import ExamModeIcon from "@public/assets/svgs/clock.svg";
import { TQuizMode } from "@/types";

type Props = {
  mode: TQuizMode;
};

const QuizModeIcon = ({ mode }: Props) => {
  if (mode == "study") return <StudyModeIcon />;
  return <ExamModeIcon />;
};

export default QuizModeIcon;
