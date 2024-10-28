import React from "react";
import TrashIcon from "@public/assets/svgs/trash.svg";
import CopyLabel from "@/components/globals/copy-label";
import Image from "next/image";
import { HeartIcon, MinusIcon, PlusIcon } from "@radix-ui/react-icons";

type Props = {};

const CartPageItem = (props: Props) => {
  return (
    <div className="w-full flex bg-gray-50 border border-gray-300 pr-4 pl-[0.625rem] py-[0.625rem]">
      <div className="w-[18.2%]">
        <Image
          src="/assets/images/book-image.webp"
          alt="Book Cover"
          className="w-full h-auto rounded-md"
          width={100}
          height={100}
        />
      </div>
      {/* info */}
      <div className="w-[81.72%] pl-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          {/* name author copy */}
          <div className="flex flex-col gap-y-1">
            <CopyLabel />
            <h3 className="text-base font-semibold text-gray-900">
              Stress Relief: Thinking Colors
            </h3>
            <span className="text-gray-700 text-sm font-normal">
              By Olivia Crown
            </span>
          </div>
          <TrashIcon />
        </div>
        {/* wishlist */}
        <span className="flex gap-2">
          <HeartIcon className="rounded-[50%] p-2 bg-gray-200 w-6 h-6" />
          <span className="text-sm items-center font-normal text-gray-700 ">
            Add to Wishlist
          </span>
        </span>

        <div className="">
          <p className="w-fit">
            <span className="text-base font-semibold text-gray-900">
              $10.00
            </span>{" "}
            <span className="text-sm font-normal text-gray-600 line-through">
              $12.00
            </span>
          </p>
          <div className="w-[8.75rem] flex border border-gray-200 items-center justify-between px-[0.375rem] rounded">
            <span className="py-[0.6875rem] px-1">
              <MinusIcon />
            </span>
            <span>2</span>

            <span className="py-1 px-[0.5625rem]">
              <PlusIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageItem;
