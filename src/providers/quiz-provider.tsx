"use client";
import { dummyQuestions } from "@/constants/dummy-data";
import { getFileExtensionFromUrl } from "@/lib/actions/book-reader-actions";
import { getPDFDocument } from "@/lib/book-reader-helpers";
import { isInArray } from "@/lib/utils";
import {
  TOption,
  TQuestion,
  TQuizMode,
  TQuizStage,
  TUnAnsweredQuestion,
  TUserAnswer,
} from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

interface QuizProviderProps {
  children: React.ReactNode;
}

export type QuizData = {};

type QuizContextType = {
  quizMode: TQuizMode;
  quizStage: TQuizStage;
  setQuizMode: (mode: TQuizMode) => void;
  setQuizStage: (mode: TQuizStage) => void;
  questionNumber: number;
  setQuestionNumber: (num: number) => void;
  hasAnswered: boolean;
  setHasAnswered: (val: boolean) => void;
  questions: TQuestion[];
  goToNextQuestion: () => void;
  handleAnswerSelect: (v: any) => void;
  isCorrect: boolean;
  getCorrectAnswer?: (idx: any) => TOption | undefined;
  selectedOption: TOption | null;
  handleSubmitQuiz: () => void;
  userScore: number;
  getTotalScore: () => number;
  goToPrevQuestion: () => void;
  unansweredQuestions: TUnAnsweredQuestion[];
  userAnswer: { [key: string]: TUserAnswer };
  unansweredQuestionsDict: {
    [key: string]: TUnAnsweredQuestion;
  };
  handleSubmitReview: () => void;
};

export const QuizContext = createContext<QuizContextType>({
  quizMode: "study",
  quizStage: "pre",
  setQuizMode: () => {},
  hasAnswered: false,
  questions: [],
  questionNumber: 0,
  goToNextQuestion: () => {},
  handleAnswerSelect: () => {},
  isCorrect: false,
  selectedOption: null,
  handleSubmitQuiz: () => {},
  userScore: 0,
  getTotalScore: () => 0,
  goToPrevQuestion: () => {},
  unansweredQuestions: [],
  userAnswer: {},
  unansweredQuestionsDict: {},
  handleSubmitReview: () => {},
  setQuestionNumber: () => {},
  setQuizStage: () => {},
  setHasAnswered: () => {},
});

const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [quizMode, setQuizMode] = useState<TQuizMode>("study");
  const [quizStage, setQuizStage] = useState<TQuizStage>("pre");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [userScore, setUserScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TOption | null>(null);
  const [unansweredQuestions, setUnansweredQuestions] = useState<
    TUnAnsweredQuestion[]
  >([]);
  const [unansweredQuestionsDict, setUnansweredQuestionsDict] = useState<{
    [key: string]: TUnAnsweredQuestion;
  }>({});
  const [userAnswer, setUserAnswer] = useState<{ [key: string]: TUserAnswer }>(
    {}
  );
  const checkCorrectAnswer = () => {
    if (quizMode == "study") {
      //check locally
    } else {
    }
  };
  const handleSubmitReview = () => {
    setQuizStage("completed");
  };

  const getCorrectAnswer = (questionIndex: any) => {
    if (quizMode == "study") {
      const correctOption = questions[questionIndex].options.filter(
        (option) => option.label == questions[questionIndex].correctAnswer
      );
      console.log("Options", questions[questionIndex].correctAnswer);
      if (correctOption[0]) return correctOption[0];
    }
  };
  const goToNextQuestion = () => {
    if (questionNumber + 1 < questions.length) {
      setQuestionNumber((prev) => prev + 1);
    }
    //check if is not in prev question before adding
    const isInUnansweredArray = unansweredQuestions.find(
      (ele) => ele.question._id == questions[questionNumber]._id
    );
    if (!hasAnswered && !isInUnansweredArray) {
      const unanswered = {
        question: questions[questionNumber],
        index: questionNumber,
      };

      setUnansweredQuestions((prev) => [...prev, unanswered]);
      setUnansweredQuestionsDict((prev) => ({
        ...prev,
        [questions[questionNumber]._id]: unanswered,
      }));
    }
    //if hasanswered and is in unansweredArray remove from unanswered array
    if (hasAnswered && isInUnansweredArray) {
      setUnansweredQuestions((prev) => {
        return prev.filter(
          (ele) => ele.question._id !== questions[questionNumber]._id
        );
      });
      const prevDict = unansweredQuestionsDict;
      delete prevDict[questions[questionNumber]._id];
      setUnansweredQuestionsDict(prevDict);
    }
    setIsCorrect(false);
    setHasAnswered(false);
    setSelectedOption(null);
  };
  const goToPrevQuestion = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((prev) => prev - 1);
    }
    setIsCorrect(false);
    setHasAnswered(false);
    setSelectedOption(null);
  };
  const handleAnswerSelect = (selectedOption: TOption) => {
    setSelectedOption(selectedOption);
    setTimeout(() => {
      setHasAnswered(true);
    }, 100);
    if (quizMode == "study") {
      const question = questions[questionNumber];

      // const isInUnansweredArray = isInArray(
      //   unansweredQuestions,
      //   "question._id",
      //   questions[questionNumber]._id
      // );
      // if (isInUnansweredArray) {
      //   setUnansweredQuestions((prev) => {
      //     return prev.filter(
      //       (ele) => ele.question._id !== questions[questionNumber]._id
      //     );
      //   });
      // }

      if (selectedOption?.label == question.correctAnswer) {
        setUserScore((prevScore) => prevScore + 1);
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    }
    // const userAnswerObj: { [key: string]: TUserAnswer } = userAnswer;
    // userAnswerObj[questions[questionNumber]._id] =
    const userAnsObj = {
      question: questions[questionNumber],
      selectedOption,
      index: questionNumber,
    };

    setUserAnswer((prevAns) => ({
      ...prevAns,
      [questions[questionNumber]._id]: userAnsObj,
    }));
  };

  const handleMultichoiceSelect = () => {};
  const handleSubmitQuiz = () => {
    if (quizMode == "study") {
      setQuizStage("completed");
    } else if (quizMode == "exam") {
      setQuizStage("review");
    }
  };
  const getTotalScore = () => {
    //TODO: REFACTOR LATER BUT FOR NOW JUST RETURN QUESTION.LENGTH
    return questions.length;
  };
  useEffect(() => {
    setQuestions(dummyQuestions);
  }, []);
  return (
    <QuizContext.Provider
      value={{
        quizMode,
        quizStage,
        setQuizMode,
        setQuizStage,
        questionNumber,
        setQuestionNumber,
        hasAnswered,
        setHasAnswered,
        questions,
        goToNextQuestion,
        handleAnswerSelect,
        isCorrect,
        getCorrectAnswer,
        selectedOption,
        handleSubmitQuiz,
        userScore,
        getTotalScore,
        goToPrevQuestion,
        unansweredQuestions,
        userAnswer,
        unansweredQuestionsDict,
        handleSubmitReview,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within the quiz provider");
  }
  return context;
};

export default QuizProvider;
