import DeliveryAddressModal from "@/components/modal/delivery-address-modal";
import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {};

const CheckoutAdress = (props: Props) => {
  return (
    <div className="bg-gray-50 border border-gray-300 gap-4 p-4 rounded flex-col flex">
      <h2 className="text-gray-900 font-semibold text-xl">Delivery Address</h2>
      <Separator className="border-gray-200" />
      {/* address */}
      <div className="flex w-full justify-between gap-[0.5625rem] py-3 pl-3 pr-4 rounded bg-brand-50 border border-brand-200">
        {/* address and phonenumber */}
        <div className="flex flex-col gap-2">
          <span className="font-medium text-lg text-gray-900"></span>
          <p className="font-normal text-sm text-gray-700"></p>
          {/* phone number */}
          <p className="text-sm font-normal text-gray-700"> </p>
        </div>
        <DeliveryAddressModal />
      </div>
    </div>
  );
};

export default CheckoutAdress;
