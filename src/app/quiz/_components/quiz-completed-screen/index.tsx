import React from "react";
import InProgressHeader from "../in-progress/in-progress-header";
import { Button } from "@/components/ui/button";
import CheckMarkIcon from "@public/assets/svgs/checkmark.svg";
import CheckCorrectIcon from "@public/assets/svgs/check-correct.svg";
import ScoreIcon from "@public/assets/svgs/score.svg";
import WiatClockIcon from "@public/assets/svgs/wait-clock.svg";
import ShareIcon from "@public/assets/svgs/share.svg";
import { cn } from "@/lib/utils";
import { ui } from "@/constants";
import ShareModal from "@/components/modal/share-modal";
import { useQuiz } from "@/providers/quiz-provider";
import QuizCompletedExamMode from "./quiz-completed-exam-mode";
import QuizCompletedStudyMode from "./quiz-completed-study-mode";

type Props = {};

const QuizCompletedScreen = (props: Props) => {
  const { quizMode } = useQuiz();
  if (quizMode == "exam") return <QuizCompletedExamMode />;
  if (quizMode == "study") return <QuizCompletedStudyMode />;
};

export default QuizCompletedScreen;
