import QuizListingCard from "@/components/cards/quiz-listing-card";
import ResponsiveGrid from "@/components/layout/responsive-grid";
import { quizzes } from "@/constants/dummy-data";

const RecommendedQuiz = () => {
  return (
    <ResponsiveGrid title="Recommended Quizzes">
      {quizzes.slice(0, 4).map((quiz, idx) => (
        <QuizListingCard quiz={quiz} key={idx} />
      ))}
    </ResponsiveGrid>
  );
};

export default RecommendedQuiz;
