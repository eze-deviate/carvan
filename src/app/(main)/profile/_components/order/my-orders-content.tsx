"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { myOrdersTabs } from "@/constants";
import { MyOrdersTabs } from "@/constants/enums";
import { cn } from "@/lib/utils";
import AllOrders from "./all-orders";

type Props = {};

const MyOrdersContent = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState<MyOrdersTabs>(
    MyOrdersTabs.AllOrders
  );
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-6">
        <h1 className="text-3xl text-[#2F313F] font-semibold">My Orders</h1>

        <Tabs
          defaultValue={MyOrdersTabs.AllOrders}
          className="w-full"
          onValueChange={(val) => setSelectedTab(val as MyOrdersTabs)}
          value={selectedTab}
        >
          <TabsList className="w-fit h-fit justify-start gap-x-[0.1875rem] bg-gray-100 p-[0.1875rem] ml-0">
            {myOrdersTabs.map((item, idx) => (
              <TabsTrigger
                key={idx}
                value={item.value}
                className={cn(
                  "flex gap-2 px-4 py-[0.5rem] bg-transparent data-[state=active]:shadow-none data-[state=active]:bg-white"
                )}
              >
                <span>{item.text}</span>
                <span
                  className={cn(
                    "rounded py-[0.1875rem] px-[0.375rem] text-xs bg-gray-200",
                    {
                      "bg-brand-400 text-white": selectedTab == item.value,
                    }
                  )}
                >
                  {12}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={MyOrdersTabs.AllOrders}>
            <AllOrders />
          </TabsContent>
          <TabsContent value={MyOrdersTabs.ToBeReceived}></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyOrdersContent;
