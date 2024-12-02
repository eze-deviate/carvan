import { TQuestion, TUserAnswer } from "@/types";

const getFailedQuestion = (
  questions: TQuestion[],
  userAnswers: { [key: string]: TUserAnswer }
) => {
  const failedQuestions = [];
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const selectedOption = userAnswers[question._id].selectedOption;
    const index = userAnswers[question._id].index;
    const correctOption = question.correctAnswer;
    if (selectedOption.label != correctOption) {
      failedQuestions.push({
        selectedOption: selectedOption,
        correctOption: correctOption,
        index,
      });
    }
  }
};
