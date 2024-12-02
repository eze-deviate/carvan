import React from "react";
import { format } from "date-fns";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CaretRightIcon } from "@radix-ui/react-icons";
import HardCopyIcon from "@public/assets/svgs/hard-copy.svg";
import CopyLabel from "@/components/globals/copy-label";
import OrderStatusBadge from "./order-status-badge";

type Props = {};

const OrderItem = (props: Props) => {
  return (
    <div className="flex gap-x-4 border-gray-200 bg-gray-50 rounded p-3 items-start ">
      <div className="w-[13.666%] h-full">
        <Image
          width={100}
          height={100}
          src={"/assets/images/book-image.webp"}
          alt="alt"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="flex-1 flex flex-col gap-y-3">
        {/* 4col */}
        <div className="flex gap-x-[0.625rem] text-sm text-gray-700">
          <p className="">
            Order NO: &nbsp;
            <span className="font-medium">O-NG240816582962</span>
          </p>
          <p className="">
            Order Date: &nbsp;
            <span className="font-medium">
              {format(new Date(2024, 3, 19), "EEEE, MMMM d, yyyy")}
            </span>
          </p>
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <CopyLabel />
            {/* title */}
            <span className="text-lg text-gray-900 font-semibold">
              Stress Relief: thinking Colors
            </span>
            {/* author */}
            <span className="text-gray-700 text-sm">By Olivia Crown</span>
          </div>
          <Button
            variant="transparent"
            className="gap-1 text-brand-500 text-base"
          >
            View Order <CaretRightIcon />
          </Button>
        </div>

        <div className="flex gap-x-12 text-gray-700 text-sm">
          <p className="capitalize">
            QTY:{" "}
            <span className="text-gray-900 text-base font-semibold">X1</span>
          </p>
          <p className="capitalize">
            Price:{" "}
            <span className="text-gray-900 text-base font-semibold">{`$10.00`}</span>
          </p>
          <p className="capitalize">
            Total Price:{" "}
            <span className="text-gray-900 text-base font-semibold">{`$11.00`}</span>
          </p>
        </div>

        <OrderStatusBadge />
      </div>
    </div>
  );
};

export default OrderItem;
