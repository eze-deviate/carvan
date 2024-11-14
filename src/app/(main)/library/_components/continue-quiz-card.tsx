import Image from "next/image";
import React from "react";
import SourcedIcon from "@public/assets/svgs/sourced.svg";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { TQuiz } from "@/types";
import { getAverageRating, getNumberOfReviews } from "@/lib/utils";
import CircularProgress from "@/components/ui/circlar-progress";
type Props = {
  quiz?: TQuiz;
};

const ContinueQuizCard = ({ quiz }: Props) => {
  //   const {
  //     title,
  //     cover,
  //     // category,
  //     sourced,
  //     // questions,
  //     oldPrice,
  //     price,
  //     reviews,
  //     genre,
  //     _id,
  //   } = quiz;
  //   const rating = getAverageRating(reviews);
  return (
    <div className="flex flex-col w-full gap-2 h-full">
      <div className="overflow-hidden w-full">
        <Image
          className="w-full h-full"
          width={100}
          height={100}
          src={"/assets/images/book-image.webp"}
          alt={"any"}
        />
      </div>
      {/* QUIZ INFO */}
      <div className="flex-1 flex flex-col gap-[] px-1">
        {/* title and description */}
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-800 font-medium text-base text-left">
            O-level Physics Quiz
          </h3>
          <p className="text-xs text-gray-600 font-normal text-left">
            Quiz based to test your understanding and revision in O-level
            physics
          </p>
        </div>
        {/* sourced */}
        <div className="flex items-center text-xs">
          <div className="flex items-center gap-x-1">
            <SourcedIcon />
            <span className="">Sourced</span>
          </div>
          <p className="text-gray-800">O-level Physics by Mike Don</p>
        </div>

        <div className="flex w-full justify-between items-center">
          {/* genre */}
          <div className="flex gap-x-2 items-center">
            <div className="bg-brand-50 text-gray-800 text-xs font-medium py-1 px-2">
              science
            </div>
            <p className="text-gray-800 text-xs">20 questions</p>
          </div>

          <CircularProgress percent={40} />
        </div>
      </div>
    </div>
  );
};

export default ContinueQuizCard;
