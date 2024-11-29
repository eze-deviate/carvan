"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import OrderItem from "./order-item";
import { useRouter } from "next/navigation";

type Props = {};

const OrderSection = (props: Props) => {
  const router = useRouter();
  const handleConfirmOrder = () => {
    router.push("/payment");
  };

  return (
    <div className="flex flex-col gap-y-6 w-[40.4%] bg-gray-50 border border-gray-300 pt-4 pb-6 px-4 rounded">
      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
        <h3 className="text-gray-900 font-semibold text-xl">My orders</h3>
        <Button
          variant="outline"
          className="px-6 gap-[0.625rem] py-[0.8125rem]"
        >
          Modify Cart
        </Button>
      </div>
      <Separator className="border border-gray-200" />
      <div className="flex flex-col gap-y-8">
        <OrderItem />
        <OrderItem />
      </div>
      {/* subtotal and delivery fee */}
      <div className="flex flex-col gap-y-4">
        {/* sub total */}
        <div className="flex justify-between">
          <span className="text-sm font-normal text-gray-700">Subtotal</span>
          <span className="text-base font-medium text-gray-900">$30.00</span>
        </div>
        {/* delivery fee */}
        <div className="flex justify-between">
          <span className="text-sm font-normal text-gray-700">
            Delivery Fee
          </span>
          <span className="text-base font-medium text-gray-900">$30.00</span>
        </div>
      </div>
      <Separator className="border border-gray-200" />
      {/* total */}

      <div className="flex justify-between">
        <span className="text-xl font-semibold text-gray-700">Total</span>
        <span className="text-xl font-medium text-gray-900">$40.00</span>
      </div>

      <Button variant="primary" onClick={handleConfirmOrder}>
        Confirm Order
      </Button>
    </div>
  );
};

export default OrderSection;
