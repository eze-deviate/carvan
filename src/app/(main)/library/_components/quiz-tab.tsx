import React from "react";
import BookQuizHeader from "./book-quiz-header";
import ResponsiveGrid from "@/components/layout/responsive-grid";
import { quizzes } from "@/constants/dummy-data";
import LibraryQuizCard from "./library-quiz-card";

type Props = {};

const QuizTab = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-5">
      <BookQuizHeader />

      <div>
        <ResponsiveGrid>
          {quizzes.slice(0, 10).map((quiz, idx) => (
            <LibraryQuizCard key={`library-quiz-card-${idx}`} quiz={quiz} />
          ))}
        </ResponsiveGrid>
      </div>
    </div>
  );
};

export default QuizTab;
