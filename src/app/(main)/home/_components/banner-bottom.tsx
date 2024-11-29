import { Button } from "@/components/ui/button";
import { ui } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};

const BannerBottom = ({ className }: Props) => {
  return (
    <div className="">
      <div
        className={cn(
          "flex gap-x-12 bg-[#FFEDD2] w-full relative h-[70vh] items-center justify-between pl-[4.375rem] ",
          ui.bannerPadding,
          className
        )}
      >
        <div className="flex flex-col gap-y-8 z-10">
          <div className="flex flex-col h-full gap-2">
            <h4 className="text-brand-600 text-4xl font-medium">
              Reader Choice
            </h4>
            <h1 className="text-brand-600 text-6xl font-semibold">
              Hot Picks & Must-Reads
            </h1>
            <p className="text-gray-700 text-xl">
              Discover the Hundreds of Great Science Books
            </p>
          </div>
          <Button variant="primary" className="w-fit px-6">
            Shop Now
          </Button>
        </div>
        <div className="flex gap-x-12 h-full py-[5rem] pr-[3rem] z-10">
          <div className="shadow-2xl">
            <Image
              alt={`banner book 1`}
              src={"/assets/images/book-image.webp"}
              className="h-full object-fill w-auto shadow-2xl"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col gap-y-5 -mt-24 last:">
            <div className="h-4/5">
              <Image
                alt={`banner book 1`}
                src={"/assets/images/book-image.webp"}
                className="h-full object-fill w-auto"
                width={100}
                height={100}
              />
            </div>
            <div className="h-4/5 ">
              <Image
                alt={`banner book 1`}
                src={"/assets/images/book-image.webp"}
                className="h-full object-fill w-auto"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="absolute right-0 left-0 top-0 bottom-0 overflow-hidden w-full h-full">
          <Image
            alt="cover-blend"
            src="/assets/images/banner-bg.png"
            className="inset-0  w-full h-full  opacity-10 rotate-[-90deg] -z-0 object-fill"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
