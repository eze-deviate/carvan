import React, { useState, useEffect } from "react";
type Props = {
  onSubmitQuiz: () => void;
  quizStarted: boolean;
};
const QuizCountdown = ({ onSubmitQuiz, quizStarted }: Props) => {
  //   const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  //   useEffect(() => {
  //     // Function to update the timer every second
  //     const timer = setInterval(() => {
  //       setTimeLeft((prevTime) => {
  //         if (prevTime <= 1) {
  //           clearInterval(timer); // Clear the interval when time is up
  //           onSubmitQuiz(); // Automatically submit the quiz
  //           return 0; // Ensure time doesn't go below zero
  //         }
  //         return prevTime - 1;
  //       });
  //     }, 1000);

  //     return () => clearInterval(timer); // Cleanup interval on component unmount
  //   }, [onSubmitQuiz, quizStarted]);
  useEffect(() => {
    if (quizStarted && timeLeft > 0) {
      // Quiz in-progress countdown logic
      const quizTimer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(quizTimer); // Cleanup
    } else if (quizStarted && timeLeft === 0) {
      // Auto-submit quiz when time is up
      onSubmitQuiz();
    }
  }, [quizStarted, timeLeft, onSubmitQuiz]);

  // Format time as MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="bg-warning-400 py-[0.200rem] px-2 text-white rounded text-sm font-medium">
      {formatTime(timeLeft)}
    </div>
  );
};

export default QuizCountdown;
