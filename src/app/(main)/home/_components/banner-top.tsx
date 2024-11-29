import { Button } from "@/components/ui/button";
import { ui } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};

const BannerTop = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex gap-x-12 bg-brand-500 w-full relative h-[90vh] items-center justify-between pl-[4.375rem] ",
        ui.bannerPadding,
        className
      )}
    >
      <div className="flex flex-col gap-y-8 z-10">
        <div className="flex flex-col h-full gap-2">
          <h4 className="text-brand-50 text-4xl font-medium">The Biggest</h4>
          <h1 className="text-white text-6xl font-semibold">Science Book</h1>
          <p className="text-brand-100 text-xl">
            Discover the Hundreds of Great Science Book
          </p>
        </div>

        <Button className="bg-brand-50 px-6 w-fit text-gray-900 font-semibold hover:bg-brand-100 ">
          Shop Now
        </Button>
      </div>

      <div className="flex gap-x-12 h-full py-[5rem] pr-[3rem]">
        <div className="shadow-2xl">
          <Image
            alt={`banner book 1`}
            src={"/assets/images/book-image.webp"}
            className="h-full object-fill w-auto shadow-2xl"
            width={100}
            height={100}
          />
        </div>
        <div className="shadow-2xl">
          <Image
            alt={`banner book 1`}
            src={"/assets/images/book-image.webp"}
            className="h-full object-fill w-auto"
            width={100}
            height={100}
          />
        </div>
      </div>

      <Image
        alt="cover-blend"
        src="/assets/images/sky.jpg"
        className="absolute right-0 left-0 top-0 bottom-0 w-full h-full mix-blend-luminosity opacity-10 -z-0"
        width={100}
        height={100}
      />
    </div>
  );
};

export default BannerTop;
