import { TabsTrigger } from "@/components/ui/tabs";
import { PaymentPlatForm } from "@/constants/enums";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  value: PaymentPlatForm;
  selectedTab: PaymentPlatForm;
  icon: React.ReactNode;
};

const PaymentOptionButton = ({ selectedTab, value, icon }: Props) => {
  return (
    <TabsTrigger
      className={cn(
        " hover:bg-brand-50 hover:shadow-custom-multi w-full h-fit bg-white text-gray-900 gap-1 border border-gray-200",
        {
          "shadow-custom-multi border border-brand-400": selectedTab == value,
        }
      )}
      value={value}
    >
      {icon}
      value
    </TabsTrigger>
  );
};

export default PaymentOptionButton;
