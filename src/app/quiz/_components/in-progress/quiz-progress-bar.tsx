import React from "react";

type Props = {
  progress: number;
};

const QuizProgressBar = ({ progress = 0 }: Props) => {
  return (
    <div className="w-full bg-gray-100 rounded-full h-2.5 ">
      <div
        className="bg-brand-400 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default QuizProgressBar;
