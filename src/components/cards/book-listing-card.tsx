import { cn, getAverageRating, getNumberOfReviews } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "../globals/custom-button";
import { Button } from "../ui/button";
import { BookType, Review } from "@/types";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

type Props = {
  className?: string;
  book: BookType;
};

const BookListingCard = ({ className, book }: Props) => {
  const { author, price, title, image, reviews } = book;
  const rating = getAverageRating(reviews);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={cn(
        "w-full flex flex-col h-[25.875rem] bg-transparent rounded-lg",
        className
      )}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full overflow-hidden rounded-lg">
        <Image
          className="w-full object-contain"
          width={100}
          height={100}
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col w-full flex-1 px-3 mt-[10px] pb-4">
        <div className="text-left capitalize">
          <p className="text-base font-semibold text-gray-800">{title}</p>
          <p className="text-xs text-gray-600 font-normal">{`By ${author}`}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
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
        {hovered && (
          <div className="flex justify-between">
            <Button className="bg-transparent hover:bg-transparent  border border-gray-300 text-gray-800 hover:bg-gray-50">
              Add to Cart
            </Button>
            <Button className="bg-brand-500 border-none hover:bg-brand-700 text-white hover:text-white">
              Buy Now
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookListingCard;
