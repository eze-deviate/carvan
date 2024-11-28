import React from "react";
import { Button } from "@/components/ui/button";
import { ui } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowBottomLeftIcon } from "@radix-ui/react-icons";
import PaymentOptionTabs from "./_components/payment-option-tabs";
import PaymentReceipt from "./_components/payment-receipt";

type Props = {};

const PaymentPage = (props: Props) => {
  return (
    <div className={cn("bg-[#F6FAF5] pb-12", ui.layoutPadding)}>
      <Button className="gap-1 bg-white rounded-3xl py-2 pl-[0.875rem] pr-4 text-gray-900">
        <ArrowBottomLeftIcon className="" />
        Back to order
      </Button>

      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-8">
          {/* heading */}
          <div className="flex flex-col gap-[0.3125rem]">
            <h1 className="text-4xl font-semibold text-[#2E313F]">
              Make Payment
            </h1>

            <p className="text-sm font-normal text-gray-700">
              Please follow the instructions below. payment confirmation may
              take few minutes{" "}
            </p>
          </div>
          {/* form */}
          <div className="border border-gray-200 bg-white p-8 rounded-sm flex flex-col gap-12">
            <h3 className="text-base font-medium text-gray-800">
              Choose Payment Platform
            </h3>
            <div>
              <PaymentOptionTabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
