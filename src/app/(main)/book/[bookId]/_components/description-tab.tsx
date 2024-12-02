import React from "react";
import QuizModule from "./quiz-modules";
import BookDescription from "./book-description";

type Props = {
  description: string;
};

const DescriptionTab = (props: Props) => {
  const { description } = props;
  return (
    <div className="flex flex-col gap-12">
      <BookDescription description={description} />
      <QuizModule />
    </div>
  );
};

export default DescriptionTab;
