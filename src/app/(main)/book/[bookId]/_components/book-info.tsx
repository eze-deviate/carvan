import React from "react";
import { books } from "@/constants/dummy-data";
import BookPagesIcon from "@public/assets/svgs/book-pages.svg";
import IsbnIcon from "@public/assets/svgs/barcode.svg";
import PublishedIcon from "@public/assets/svgs/published.svg";
import ChineeseCharIcon from "@public/assets/svgs/chineese-char.svg";
import { format } from "date-fns";
const book = books[0];
const BookInfoCard = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {/* genre */}
      <div className="flex">
        <div className="w-1/4">Genre: </div>
        <div className="flex flex-1 gap-2 text-xs font-medium">
          {Array(3)
            .fill(0)
            .map((item, idx) => (
              <div
                key={idx}
                className="rounded py-1 px-[0.6125rem] bg-brand-50 text-brand-700"
              >
                science
              </div>
            ))}
        </div>
      </div>
      {/* pages */}
      <div className="flex">
        <div className="w-1/4 flex gap-2">
          <BookPagesIcon />
          <span className="text-gray-900 text-base">Pages</span>
        </div>
        <div className="flex flex-1 gap-2 text-xs font-medium">
          <p>1274</p>
        </div>
      </div>
      {/* ISBN */}
      <div className="flex">
        <div className="w-1/4 flex gap-2">
          <IsbnIcon />
          <span className="text-gray-900 text-base uppercase">ISBN</span>
        </div>
        <div className="flex flex-1 gap-2 text-xs font-medium">
          <p>9780756404079</p>
        </div>
      </div>
      {/* PUblished */}
      <div className="flex">
        <div className="w-1/4 flex gap-2">
          <PublishedIcon />
          <span className="text-gray-900 text-base capitalize">Published</span>
        </div>
        <div className="flex flex-1 gap-2 text-xs font-medium">
          <p className="flex gap-3">
            <span>{format(new Date(), "MMMM d, yyyy")} </span>
            <span>&#124;</span>
            <span>3rd Edition</span>
          </p>
        </div>
      </div>
      {/* LANGUAGES */}
      <div className="flex">
        <div className="w-1/4 flex gap-2">
          <ChineeseCharIcon />
          <span className="text-gray-900 text-base capitalize">Language</span>
        </div>
        <div className="flex flex-1 gap-2 text-xs font-medium">
          {Array(3)
            .fill(0)
            .map((item, idx) => (
              <div
                key={idx}
                className="rounded py-1 px-[0.6125rem] bg-brand-50 text-brand-700"
              >
                science
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookInfoCard;
