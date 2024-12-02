import React from "react";
import QuizModuleItem from "./quiz-module-item";

const QuizModule = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Brief */}
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-gray-900">Quiz Modules</h2>
        <h5 className="text-sm font-normal text-gray-700">
          Below are Quiz modules compiled from
          <span className="text-gray-800 font-semibold">Organic Chemistry</span>
          <span className="italic">by Mike Don </span>
        </h5>
      </div>
      <div>
        {Array(4)
          .fill(0)
          .map((quiz, idx) => (
            <QuizModuleItem key={idx} />
          ))}
      </div>
    </div>
  );
};

export default QuizModule;
