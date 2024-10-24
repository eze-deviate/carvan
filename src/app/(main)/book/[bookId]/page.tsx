"use client";
import BackButton from "@/components/buttons/back-button";
import Categories from "@/components/globals/categories";
import AverageStarRating from "@/components/molecules/average-star-rating";
import { Button } from "@/components/ui/button";
import { ui } from "@/constants";
import { books } from "@/constants/dummy-data";
import { cn } from "@/lib/utils";
import { FileTextIcon, HeartIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useState } from "react";
import BookInfoCard from "./_components/book-info";
import { Separator } from "@/components/ui/separator";
import DescriptionAndReview from "./_components/description-and-review";
import QuizModule from "./_components/quiz-modules";
import OverallRating from "./_components/overall-rating";
import Reviews from "./_components/reviews";
import RecommendedBook from "./_components/recommended-books";
import { useModal } from "@/providers/modal-provider";
import CustomModal from "@/components/globals/custom-modal";
import BuyNowModal from "@/components/modal/buy-now-modal";

type Props = {};
const book = books[0];
const BookDetailPage = (props: Props) => {
  const [selected, setSelected] = useState("ecopy");
  const { setOpen, setClose } = useModal();
  return (
    <div className="w-full">
      <Categories />
      <div className={cn("", ui.layoutPadding)}>
        <BackButton text="Product Page" className="shadow-none" />

        <div className="flex flex-col gap-y-6">
          {/* COVER AND DETAILS */}
          <div className="flex w-full gap-12">
            {/* cover */}
            <div className="w-5/12 ">
              <Image
                alt={book.title}
                src={"/assets/images/book-image.webp"}
                className="w-full h-full object-fill"
                width={100}
                height={100}
              />
            </div>
            {/* details */}
            <div className="flex flex-col gap-6">
              {/* Title and ISBN */}
              <div className="flex flex-col">
                {/* Title */}
                <div className="flex flex-col">
                  {/* title and favorite */}
                  <div className="flex gap-5 capitalize items-center">
                    <h2 className="text-4xl font-semibold text-gray-900">
                      {book.title}
                    </h2>
                    <Button className="hover:bg-transparent shadow-none bg-gray-50 p-2 cursor-pointer">
                      <HeartIcon className="border-black text-black w-6 h-6" />
                    </Button>
                  </div>
                  <h4 className="text-xl font-normal">
                    <span className="font-medium">By</span> {book.author}
                  </h4>
                  <AverageStarRating rating={3.5} />
                </div>
                {/* ISBN, LANGUAGES, PAGES BOOKINFO*/}
                <div className="flex flex-col "></div>
                <BookInfoCard />
              </div>
              <Separator />
              {/* shopping  */}
              <div className="flex flex-col gap-3">
                <p className="flex gap-3 items-center">
                  <span className="text-3xl font-semibold ">${book.price}</span>
                  <span>E-copy</span>
                  <span className="flex gap-2 items-center rounded-sm bg-warning-100 p-2 text-warning-800">
                    <FileTextIcon />
                    Quiz Included
                  </span>
                </p>
                {/* copy select */}
                <div className="flex gap-9">
                  {/* ecopy */}
                  <div
                    className={cn(
                      "w-56 cursor-pointer flex-col py-3 px-4 rounded  items-center justify-center flex bg-transparent border border-gray-200 text-gray-800 hover:bg-brand-100 hover:text-brand-500 text-base",
                      {
                        "shadow-custom-1 shadow-custom-2 border-brand-400":
                          selected == "ecopy",
                      }
                    )}
                  >
                    <span className="text-sm">
                      <span className="text-gray-800 text-base font-medium">
                        E-copy
                      </span>
                      + Quiz modules
                    </span>
                    <span className="text-gray-900 text-base font-semibold">
                      ${book.price}
                    </span>
                  </div>
                  {/* hard */}
                  <div
                    className={cn(
                      "cursor-pointer w-56 flex-col py-3 px-4 rounded  items-center justify-center flex bg-transparent border border-gray-200 text-gray-800 hover:bg-brand-100 hover:text-brand-500 text-base",
                      {
                        "shadow-custom-1 shadow-custom-2 border-brand-400":
                          selected == "hardcopy",
                      }
                    )}
                  >
                    <span className="text-gray-800 text-base font-medium">
                      hard copy
                    </span>
                    <span className="text-gray-900 text-base font-semibold">
                      ${book.price}
                    </span>
                  </div>
                </div>

                {/* buy buttons */}
                <div className="flex gap-6">
                  <Button className="bg-transparent hover:bg-brand-50 text-gray-800 text-base py-[11px] px-[37px]">
                    Add to Cart
                  </Button>
                  <Button className="bg-brand-500 border-none hover:bg-brand-700 text-white text-base py-[11px] px-[37px]">
                    Buy Now
                  </Button>
                  <BuyNowModal book={book} />
                </div>
              </div>
            </div>
          </div>
          {/* DESCRIPTION AND REVIEW */}
          <DescriptionAndReview />
          <QuizModule />
          <OverallRating reviews={book.reviews} />
          <Reviews reviews={book.reviews} />
          <RecommendedBook />
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
