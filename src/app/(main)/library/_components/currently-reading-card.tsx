import CircularProgress from "@/components/ui/circlar-progress";
import Image from "next/image";
import React from "react";

type Props = {
  showProgress?: boolean;
};

const CurrentlyReadingCard = ({ showProgress = true }: Props) => {
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="w-full h-[79%]">
        <Image
          //   alt={book.title}
          alt="book"
          src={"/assets/images/book-image.webp"}
          className="w-full h-full"
          width={100}
          height={100}
        />
      </div>

      <div className="flex flex-1 w-full justify-between items-center px-4 pb-2 justify-self-end">
        <div className="flex flex-col flex-1 gap-y-1">
          <h4 className="text-base font-medium text-gray-800 text-left">
            Organic Chemistry
          </h4>
          <span className="text-xs text-gray-600 font-normal text-left">
            By Kevin Durant
          </span>
        </div>

        {/* progress */}

        {showProgress && <CircularProgress percent={40} />}
      </div>
    </div>
  );
};

export default CurrentlyReadingCard;
