import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import React, { useEffect } from "react";

type Props = {
  isCorrect: boolean;
};

const AnswerCheckIcons = ({ isCorrect }: Props) => {
  if (!isCorrect)
    return (
      <div className="flex gap-3">
        <div className="bg-error-600 p-1 w-fit h-fit rounded-[50%]">
          <Cross2Icon className="  text-white h-5 w-4" stroke="#fff" />
        </div>
        <span className="text-gray-800">InCorrect</span>
      </div>
    );
  else
    return (
      <div className="flex gap-3">
        <div className="bg-success-600 p-1 w-fit h-fit rounded-[50%]">
          <CheckIcon className="  text-white h-5 w-4" stroke="#fff" />
        </div>
        <span className="text-gray-800">Correct</span>
      </div>
    );
};

export default AnswerCheckIcons;
