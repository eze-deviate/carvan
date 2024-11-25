import { dummyDescription, dummyOptions } from "@/constants/dummy-data";
import Image from "next/image";
import React from "react";

type Props = {};

const SingleSelectQuestion = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-8 w-full">
      <p className="text-gray-800 font-semibold text-base">
        1.What are the hybridizations of atoms 1 and 2 respectively in the
        following structure?
      </p>
      {/* image and option */}
      <div className="flex w-full h-auto overflow-y-auto justify-between">
        {/* question Image */}
        <div className="bg-gray-50 min-w-[40%] flex items-center justify-center p-4">
          <Image
            src="/assets/images/question-image.png"
            alt="image"
            className="w-3/5"
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col gap-y-4 min-w-[30%]">
          {dummyOptions.map((option) => (
            <div className="flex border border-gray-200 rounded px-3 py-4 gap-x-7">
              <span className="text-gray-900 font-semibold">{`${option.label.toUpperCase()}.`}</span>
              <span>{option.option_text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleSelectQuestion;
