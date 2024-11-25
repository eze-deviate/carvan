"use client";
import { getFileExtensionFromUrl } from "@/lib/actions/book-reader-actions";
import { getPDFDocument } from "@/lib/book-reader-helpers";
import { TQuizMode, TQuizStage } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

interface QuizProviderProps {
  children: React.ReactNode;
}

export type QuizData = {};

type QuizContextType = {
  quizMode: TQuizMode;
  quizStage: TQuizStage;
  setQuizMode?: (mode: TQuizMode) => void;
};

export const QuizContext = createContext<QuizContextType>({
  quizMode: "study",
  quizStage: "pre",
});

const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [quizMode, setQuizMode] = useState<TQuizMode>("study");
  const [quizStage, setQuizStage] = useState<TQuizStage>("pre");
  useEffect(() => {
    const getDocument = async () => {
      const fileType = await getFileExtensionFromUrl(
        "/assets/pdf/python-basics-sample-chapters.pdf"
      );
      console.log("FILE EXTENSION", fileType);
      if (fileType == ".pdf") {
      }
      const pdfDocument = await getPDFDocument(
        "/assets/pdf/python-basics-sample-chapters.pdf"
      );
      console.log("THE DOCUMENT", pdfDocument);
    };
    getDocument();
  }, []);
  return (
    <QuizContext.Provider value={{ quizMode, quizStage, setQuizMode }}>
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
