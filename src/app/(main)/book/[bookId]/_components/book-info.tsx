import { books } from "@/constants/dummy-data";
import React from "react";
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
              <div className="rounded py-1 px-[0.6125rem] bg-brand-50 text-brand-700">
                science
              </div>
            ))}
        </div>
      </div>
      {/* pages */}
      <div className="flex">
        <div className="w-1/4">Pages: </div>
        <div className="flex flex-1 gap-2 text-xs font-medium">
          {Array(3)
            .fill(0)
            .map((item, idx) => (
              <div className="rounded py-1 px-[0.6125rem] bg-brand-50 text-brand-700">
                science
              </div>
            ))}
        </div>
      </div>
      {/* ISBN */}
      <div className="flex">
        <div className="w-1/4">Pages: </div>
        <div className="flex flex-1 gap-2 text-xs font-medium">
          {Array(3)
            .fill(0)
            .map((item, idx) => (
              <div className="rounded py-1 px-[0.6125rem] bg-brand-50 text-brand-700">
                science
              </div>
            ))}
        </div>
      </div>
      {/* PUblished */}
      <div className="flex">
        <div className="w-1/4">Pages: </div>
        <div className="flex flex-1 gap-2 text-xs font-medium">
          {Array(3)
            .fill(0)
            .map((item, idx) => (
              <div className="rounded py-1 px-[0.6125rem] bg-brand-50 text-brand-700">
                science
              </div>
            ))}
        </div>
      </div>
      {/* LANGUAGES */}
      <div className="flex">
        <div className="w-1/4">Pages: </div>
        <div className="flex flex-1 gap-2 text-xs font-medium">
          {Array(3)
            .fill(0)
            .map((item, idx) => (
              <div className="rounded py-1 px-[0.6125rem] bg-brand-50 text-brand-700">
                science
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookInfoCard;
