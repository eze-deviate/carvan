"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaymentPlatForm } from "@/constants/enums";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import EazyPaisaIcon from "@public/assets/svgs/easypaisa.svg";
import JazzCashIcon from "@public/assets/svgs/jazzcash.svg";
import AccountDetails from "./account-details";
type Props = {};

const PaymentOptionTabs = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState(PaymentPlatForm.EasyPaisa);
  const handleTabChange = (index: any) => {
    setSelectedTab(index);
  };
  return (
    <div>
      <Tabs
        defaultValue={PaymentPlatForm.EasyPaisa}
        className="w-full"
        onValueChange={handleTabChange}
        value={selectedTab}
      >
        <TabsList className=" w-full gap-9  bg-transparent">
          <TabsTrigger className="flex-1" value={PaymentPlatForm.EasyPaisa}>
            <Button
              className={cn(
                " hover:bg-brand-50 hover:shadow-custom-multi w-full h-fit bg-white text-gray-900 gap-1 border border-gray-200",
                {
                  "shadow-custom-multi border border-brand-400":
                    selectedTab == PaymentPlatForm.EasyPaisa,
                }
              )}
            >
              <EazyPaisaIcon />
              {PaymentPlatForm.EasyPaisa}
            </Button>
          </TabsTrigger>
          <TabsTrigger className={"flex-1"} value={PaymentPlatForm.JazzCash}>
            <Button
              className={cn(
                "hover:bg-brand-50 hover:shadow-custom-multi  hover:border-brand-400 w-full h-fit bg-white text-gray-900 gap-1 border border-gray-200",
                {
                  "shadow-custom-multi border border-brand-400":
                    selectedTab == PaymentPlatForm.JazzCash,
                }
              )}
            >
              <JazzCashIcon />
              {PaymentPlatForm.JazzCash}
            </Button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value={PaymentPlatForm.EasyPaisa}>
          <div className="w-full">
            <AccountDetails
              accountName="Caravan-PAY-EA"
              accountNumber="0321390100"
              bankName={PaymentPlatForm.EasyPaisa}
              icon={<EazyPaisaIcon />}
            />
          </div>
        </TabsContent>
        <TabsContent value={PaymentPlatForm.JazzCash}>
          <div className="w-full">
            <AccountDetails
              accountName="Caravan-PAY-EA"
              accountNumber="0321390100"
              bankName={PaymentPlatForm.EasyPaisa}
              icon={<JazzCashIcon />}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentOptionTabs;
