import CopyLabel from "@/components/globals/copy-label";
import Image from "next/image";
import React from "react";

type Props = {};

const OrderItem = (props: Props) => {
  return (
    <div className="flex gap-x-4">
      <div className="w-[18.2%]">
        <Image
          src="/assets/images/book-image.webp"
          alt="Book Cover"
          className="w-full h-auto rounded-md"
          width={100}
          height={100}
        />
      </div>

      <div className="flex flex-col gap-2">
        <CopyLabel />
        <h4 className="text-base font-semibold text-gray-900">
          Stress Relief: Thinking Color
        </h4>
        <span className="text-gray-700 font-normal text-sm">
          By Olivia Crown
        </span>
        <p>
          <span className="text-gray-900 font-semibold text-base">$10.00</span>
          <span className="text-gray-600 font-normal text-sm">$10.00</span>
        </p>
        <span className="text-sm font-normal text-gray-700">QTY: 1</span>
      </div>
    </div>
  );
};

export default OrderItem;
