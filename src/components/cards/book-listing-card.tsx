import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "../globals/custom-button";
import { Button } from "../ui/button";

type Props = {
  className?: string;
  book: {
    _id: string;
    title: string;
    author: string;
    price: number;
    rating: number;
    reviews: any;
    image: string;
  };
};

const BookListingCard = ({ className, book }: Props) => {
  const { author, price, title, image, rating, reviews } = book;
  const [hovered, setHovered] = useState(false);
  return (
    <div className={cn("w-full flex flex-col h-[25.875rem]", className)}>
      <div className="w-full overflow-hidden">
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
          <span className="">&#9733; {`${rating}(${reviews})`}</span>
        </div>
        {hovered && (
          <div className="flex justify-between">
            <Button></Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookListingCard;
