import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
import OrderItem from "./order-item";

type Props = {};

const OrderSection = (props: Props) => {
  return (
    <div className="bg-gray-50 border border-gray-300 pt-4 pb-6 px-4 gap-6 flex flex-col">
      {/* Heading */}
      <div className="flex justify-between ">
        <h3 className="text-gray-900 font-semibold text-xl"> My Orders</h3>

        <Button className="bg-white border border-gray-200 px-6 py-[13px] gap-[0.625rem] text-sm font-semibold text-gray-800">
          Modify Cart
        </Button>
      </div>
      <Separator className="border border-gray-200" />
      <Separator className="border border-gray-200" />
      {/* items */}
      <OrderItem />

      {/* sub total */}
      <div className="flex justify-between">
        <span className="text-sm font-normal text-gray-700">Subtotal</span>
        <span className="text-base font-medium text-gray-900">$30.00</span>
      </div>
      {/* delivery fee */}
      <div className="flex justify-between">
        <span className="text-sm font-normal text-gray-700">Delivery Fee</span>
        <span className="text-base font-medium text-gray-900">$30.00</span>
      </div>
      <Separator className="border border-gray-200" />

      {/* total */}

      <div className="flex justify-between">
        <span className="text-xl font-semibold text-gray-700">Total</span>
        <span className="text-xl font-medium text-gray-900">$40.00</span>
      </div>

      <Button className="text-white border-none bg-brand-500 hover:bg-brand-700 hover:text-white">
        Confirm Order
      </Button>
    </div>
  );
};

export default OrderSection;
