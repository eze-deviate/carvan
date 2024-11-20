import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import TrashIcon from "@public/assets/svgs/trash.svg";
import HardCopy from "@public/assets/svgs/hard-copy.svg";
import ECopy from "@public/assets/svgs/e-copy.svg";
import { useAppContext } from "@/providers/app-provider";
type Props = {
  item: any;
};

const CartItem = ({ item }: Props) => {
  const { removeFromCart } = useAppContext();
  return (
    <div className="flex bg-white rounded-md border-none shadow-none">
      <div className="w-1/4">
        <Image
          src="/assets/images/book-image.webp"
          alt="Book Cover"
          className="w-full h-full rounded-md"
          width={100}
          height={100}
        />
      </div>
      <div className="w-3/4 pl-4 flex flex-col gap-2">
        <div className="bg-gray-200 py-1 px-3 rounded w-fit">
          <span className="text-gray-800 font-medium text-xs flex gap-1">
            {false ? <HardCopy /> : <ECopy />} Hard Copy
          </span>
        </div>
        <div className="flex justify-between items-center">
          {/* Author and title */}
          <div className="flex flex-col gap-2 w-2/3 overflow-hidden text-ellipsis">
            <h3 className="text-ellipsis  w-2/3 text-gray-900 text-base font-semibold">
              Book Title
            </h3>
            <span className="text-gray-700 text-sm font-normal">
              By Olivia Crown
            </span>
          </div>
          <TrashIcon
            className="cursor-pointer hover:shadow-sm"
            onClick={() => removeFromCart(item._id)}
          />
        </div>
        {/* price */}
        <p className="">
          <span className="text-base font-semibold text-gray-900">$10.00</span>{" "}
          <span className="text-sm font-normal text-gray-600 line-through">
            $12.00
          </span>
        </p>
        {/* Buttons */}
        <div className="flex justify-between items-center">
          <div className="w-[42%] flex border border-gray-200 items-center justify-between px-[0.375rem] rounded">
            <span className="py-[0.6875rem] px-1">
              <MinusIcon className="text-gray-900 font-extrabold" />
            </span>
            <span>2</span>

            <span className="py-1 px-[0.5625rem]">
              <PlusIcon className="text-gray-900" />
            </span>
          </div>

          <Button className=" shadow-none border-none bg-brand-500 text-white py-[0.625rem] hover:bg-brand-700 font-semibold text-base w-[42%]">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
