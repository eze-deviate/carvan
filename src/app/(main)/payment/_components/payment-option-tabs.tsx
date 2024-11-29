"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaymentPlatForm } from "@/constants/enums";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import EazyPaisaIcon from "@public/assets/svgs/easypaisa.svg";
import JazzCashIcon from "@public/assets/svgs/jazzcash.svg";
import AccountDetails from "./account-details";
import PaymentOptionButton from "./payment-option-button";
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
          <PaymentOptionButton
            value={PaymentPlatForm.EasyPaisa}
            icon={<EazyPaisaIcon />}
            selectedTab={selectedTab}
          />
          <PaymentOptionButton
            value={PaymentPlatForm.JazzCash}
            icon={<JazzCashIcon />}
            selectedTab={selectedTab}
          />
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
              accountNumber="03213...."
              bankName={PaymentPlatForm.JazzCash}
              icon={<JazzCashIcon />}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentOptionTabs;
