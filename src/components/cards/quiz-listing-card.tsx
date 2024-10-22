import Image from "next/image";
import React from "react";
import SourcedIcon from "@public/assets/svgs/sourced.svg";
import { StarFilledIcon } from "@radix-ui/react-icons";
type Props = {
  title: string;
  quiz: {
    title: string;
    image: string;
    sourced: string;
    category: string;
    questions: any;
    price: number;
    oldPrice: number;
    rating: number;
    reviews: any;
  };
};

const QuizListingCard = ({ quiz }: Props) => {
  const {
    title,
    image,
    category,
    sourced,
    questions,
    oldPrice,
    price,
    rating,
    reviews,
  } = quiz;
  return (
    <div className="flex flex-col w-full">
      <div className="overflow-hidden w-full">
        <Image
          className="w-full object-contain"
          width={100}
          height={100}
          src={image}
          alt={title}
        />
      </div>
      {/* QUIZ INFO */}
      <div className="flex-1 flex flex-col">
        <p className="text-base font-medium text-gray-800 ">{title}</p>
        <p className="text-xs font-normal text-gray-600 w-11/12">{`Quiz based to test your understanding and revision in O-level physics`}</p>
        <div className="flex w-full">
          <SourcedIcon />
          <span className="text-xs font-normal text-gray-400">
            Sourced: {sourced ?? `O-level Physics by Mike Don`}
          </span>
        </div>
        <p className="flex gap-x-2">
          <span className="py-1 px-[0.625rem] bg-brand-50 text-gray-800">
            {category}
          </span>
          <span className="text-xs">{questions}</span>
        </p>
        {/* pricing and rating */}
        <div className="flex justify-between">
          {/* price */}
          <div className="flex">
            <span className="">{`$${price}`}</span>
            <span className="">{`$${oldPrice}`}</span>
          </div>
          {/* rating */}
          <div className="flex">
            <StarFilledIcon className="bg-warning-400 text-warning-400 fill-warning-400 h-4 w-4" />
            <span className="text-base text-gray-800 font-medium">
              {rating}
            </span>
            <span className="text-gray-600 text-base font-normal">{`(${reviews})`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizListingCard;
