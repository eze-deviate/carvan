"use client";
import BackButton from "@/components/buttons/back-button";
import Categories from "@/components/globals/categories";
import AverageStarRating from "@/components/molecules/average-star-rating";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ui } from "@/constants";
import { books } from "@/constants/dummy-data";
import { cn } from "@/lib/utils";
import { FileTextIcon, HeartIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";
import BookInfoCard from "./_components/book-info";
// import DescriptionAndReview from "./_components/description-and-review";
import BuyNowModal from "@/components/modal/buy-now-modal";
import { useModal } from "@/providers/modal-provider";
import BookDetailsTab from "./_components/book-details-tabs";
import RecommendedBook from "./_components/recommended-books";
import RecommendedQuiz from "./_components/recommended-quiz";
import AddToCartButton from "@/components/globals/add-to-cart-button";

const book = books[0];
const BookDetailPage = () => {
  const [selected, setSelected] = useState("ecopy");
  const { setOpen, setClose } = useModal();
  return (
    <div className="w-full">
      <Categories />
      <div className={cn("", ui.layoutPadding)}>
        <BackButton text="Product Page" className="shadow-none mb-10" />

        <div className="flex flex-col gap-y-24">
          {/* BOOK DETAILS */}
          <div className="flex flex-col gap-y-12">
            {/* COVER AND DETAILS */}
            <div className="flex w-full gap-12 overflow-hidden h-full ">
              {/* cover */}
              <div className="w-5/12 flex-shrink-0">
                <div className="relative h-full">
                  <Image
                    alt={book.title}
                    src={"/assets/images/book-image.webp"}
                    className="h-full object-contain"
                    // width={100}
                    // height={100}
                    layout="fill"
                  />
                </div>
              </div>
              {/* details */}
              <div className="flex flex-col gap-6 flex-1">
                {/* Title and ISBN */}
                <div className="flex flex-col gap-y-6">
                  {/* Title */}
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-y-4">
                      <div className="flex flex-col gap-1">
                        {/* title and favorite */}
                        <div className="flex gap-5 capitalize items-center">
                          <h2 className="text-4xl font-semibold text-gray-900">
                            {book.title}
                          </h2>
                          <Button className="hover:bg-transparent shadow-none bg-gray-50 p-2 cursor-pointer">
                            <HeartIcon className="border-black text-black w-6 h-6" />
                          </Button>
                        </div>
                        <h4 className="text-xl font-normal text-gray-700">
                          <span className="font-medium">By</span> {book.author}
                        </h4>
                      </div>
                      <div className="flex gap-x-2 items-center">
                        <AverageStarRating rating={3.5} />
                        <span className="text-gray-500 text-base">{`(${125} Verified rating)`}</span>
                      </div>
                    </div>
                  </div>
                  {/* ISBN, LANGUAGES, PAGES BOOKINFO*/}

                  <BookInfoCard />
                </div>
                <Separator />
                {/* shopping  */}
                <div className="flex flex-col gap-3">
                  <p className="flex gap-3 items-center">
                    <span className="text-3xl font-semibold ">
                      ${book.price}
                    </span>
                    <span>{selected == "ecopy" ? `E-copy` : "Hard Copy"}</span>
                    {selected == "ecopy" && (
                      <span className="flex gap-2 items-center rounded-sm bg-warning-100 p-2 text-warning-800">
                        <FileTextIcon />
                        Quiz Included
                      </span>
                    )}
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
                      onClick={() => {
                        setSelected("ecopy");
                      }}
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
                      onClick={() => {
                        setSelected("hardcopy");
                      }}
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
                  <div className="flex gap-9">
                    <AddToCartButton item={book} className="w-56" />

                    <BuyNowModal book={book} buttonClassName="w-56" />
                  </div>
                </div>
              </div>
            </div>
            {/* DESCRIPTION AND REVIEW */}
            <BookDetailsTab book={books[0]} />
          </div>
          {/* RECOMMENDATION */}
          <div className="flex flex-col gap-12">
            <RecommendedBook />
            <RecommendedQuiz />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
