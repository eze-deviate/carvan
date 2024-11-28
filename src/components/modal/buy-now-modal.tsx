import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cross2Icon, FileTextIcon, HeartIcon } from "@radix-ui/react-icons";
import { BookType } from "@/types";
import AverageStarRating from "../molecules/average-star-rating";
import { cn, getAverageRating, getNumberOfReviews } from "@/lib/utils";
import Image from "next/image";

type Props = {
  book: BookType;
  className?: string;
  buttonClassName?: string;
};

const BuyNowModal = (props: Props) => {
  const [selected, setSelected] = useState("ecopy");
  const [isOpen, setIsOpen] = useState(false);
  const { book, className, buttonClassName } = props;
  const closeDialog = () => setIsOpen(false);

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          className={cn(
            "bg-brand-500 border-none hover:bg-brand-700 text-white text-base py-[11px] px-[37px]",
            buttonClassName
          )}
        >
          Buy Now
        </Button>
      </DialogTrigger>
      <DialogContent
        className="py-6 px-8 max-w-fit w-fit rounded-lg"
        showClose={false}
      >
        <DialogClose
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={closeDialog}
        >
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <div className="flex w-full gap-x-8">
          {/* image */}

          <Image
            alt={book.title}
            src={"/assets/images/book-image.webp"}
            className="w-[29%] h-[calc(100% - 90px)]"
            width={100}
            height={100}
          />

          {/* details */}
          <div className="w-[60%] flex flex-col pb-6 gap-y-6">
            <div className="flex flex-col gap-y-6">
              {/* title author and rating */}
              <div className="flex flex-col gap-y-4">
                {/* title and favorite */}
                <div className="flex gap-5 capitalize items-center">
                  <h2 className="text-4xl font-semibold text-gray-900 capitalize">
                    {book.title}
                  </h2>
                  <Button className="hover:bg-transparent shadow-none bg-gray-50 p-2 cursor-pointer">
                    <HeartIcon className="border-black text-black w-6 h-6" />
                  </Button>
                </div>
                {/* author */}
                <h4 className="text-xl font-normal text-gray-700">
                  <span className="font-medium mr-1">By</span>
                  {book.author}
                </h4>
                {/* rating */}

                <div className="flex gap-x-2 items-center">
                  <AverageStarRating rating={getAverageRating(book.reviews)} />

                  <span className="text-gray-500 text-base">{`(${getNumberOfReviews(
                    book.reviews
                  )} Verified rating)`}</span>
                </div>
              </div>
              <p className="line-clamp-3">{book.description}</p>
            </div>

            {/* shopping  */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-y-3">
                <p className="flex gap-3 items-center">
                  <span className="text-3xl font-semibold ">${book.price}</span>
                  <span className="text-gray-900 font-medium">E-copy</span>
                  <span className="flex gap-2 items-center rounded-sm bg-warning-100 p-2 text-warning-800">
                    <FileTextIcon />
                    Quiz Included
                  </span>
                </p>
                {/* copy select */}
                <div className="flex gap-9 w-full justify-between">
                  {/* ecopy */}
                  <div
                    className={cn(
                      "flex-1 w-56 cursor-pointer flex-col py-3 px-4 rounded  items-center justify-center flex bg-transparent border border-gray-200 text-gray-800 hover:bg-brand-50 hover:text-brand-500 text-base",
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
                      "flex-1 cursor-pointer w-56 flex-col py-3 px-4 rounded  items-center justify-center flex bg-transparent border border-gray-200 text-gray-800 hover:bg-brand-50 hover:text-brand-500 text-base",
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
              </div>

              {/* buy buttons */}
              <div className="flex justify-between gap-9 w-full">
                <Button className="flex-1 bg-transparent hover:bg-brand-50 text-gray-800 text-base py-3">
                  Add to Cart
                </Button>
                <Button className="flex-1 bg-brand-500 border-none hover:bg-brand-700 text-white text-base py-3">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Button className=" hover:bg-brand-50 px-[2.3125rem] py-[0.6875rem] bg-transparent text-brand-500 border border-brand-500 font-semibold text-base hover:shadow-sm">
          View Book Details
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default BuyNowModal;
