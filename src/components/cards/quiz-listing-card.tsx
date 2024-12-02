import Image from "next/image";
import React from "react";
import SourcedIcon from "@public/assets/svgs/sourced.svg";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { TQuiz } from "@/types";
import { getAverageRating, getNumberOfReviews } from "@/lib/utils";
type Props = {
  quiz: TQuiz;
};

const QuizListingCard = ({ quiz }: Props) => {
  const {
    title,
    cover,
    // category,
    sourced,
    // questions,
    oldPrice,
    price,
    reviews,
    genre,
    _id,
  } = quiz;
  const rating = getAverageRating(reviews);
  return (
    <div className="flex flex-col w-full h-[21.75rem]">
      <div className="overflow-hidden w-full h-[55.4%]">
        <Image
          className="w-full object-fill h-full"
          width={100}
          height={100}
          src={cover}
          alt={title}
        />
      </div>
      {/* QUIZ INFO */}
      <div className="flex-1 flex flex-col gap-1 px-1">
        <div className="flex flex-col gap-[0.625rem]">
          <div className="text-left">
            <p className="text-left text-base font-medium text-gray-800 capitalize">
              {title}
            </p>
            <p className="line-clamp-2 text-left text-xs font-normal text-gray-600 w-11/12">{`Quiz based to test your understanding and revision in O-level physics`}</p>
          </div>

          <div className="text-left flex w-full gap-2 text-xs font-normal text-gray-800">
            <span className="flex">
              <SourcedIcon />
              Sourced:
            </span>
            <span className="line-clamp-1">
              {sourced ?? `O-level Physics by Mike Don`}
            </span>
          </div>
          <p className="flex gap-x-2">
            <span className="py-1 px-[0.625rem] bg-brand-50 text-gray-800">
              {genre.name}
            </span>
            {/* <span className="text-xs">{questions}</span> */}
          </p>
        </div>
        {/* pricing and rating */}
        <div className="flex justify-between">
          <span className="text-base text-gray-800 font-semibold">
            {`$${price}`}
            <span className="ml-[6px] text-xs text-gray-600 font-normal line-through">
              {price}
            </span>
          </span>
          <span className="flex items-center gap-[0.125rem]">
            {Math.floor(Math.random() * 10) + 1 > 5 ? (
              <StarFilledIcon className="text-warning-400" />
            ) : (
              <StarIcon />
            )}
            <span>{rating.toFixed(1)}</span>
            <span className="text-gray-600">{`(${getNumberOfReviews(
              reviews
            )})`}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuizListingCard;
