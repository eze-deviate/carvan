"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { libraryTabs } from "@/constants";
import { cn } from "@/lib/utils";
import LibraryTabsIcons from "./library-tabs-icons";
import { LibraryTabs } from "@/constants/enums";
import OverviewTab from "./overview-tab";

type Props = {};

const LibraryContent = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState<LibraryTabs>(
    LibraryTabs.activity
  );
  return (
    <div className="flex flex-col gap-y-10">
      <Tabs
        defaultValue={LibraryTabs.activity}
        className="w-full"
        onValueChange={(val) => setSelectedTab(val as LibraryTabs)}
        value={selectedTab}
      >
        <TabsList className="bg-transparent w-full h-fit justify-start gap-3 border-b border-gray-200">
          {libraryTabs.map((item, idx) => (
            <TabsTrigger
              key={idx}
              value={item.value}
              className={cn("flex gap-2 px-4 py-[0.5625rem] bg-transparent", {
                "bg-brand-500": selectedTab == item.value,
              })}
            >
              <LibraryTabsIcons name={item.value} />
              <span>{item.text}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={LibraryTabs.activity}>
          <OverviewTab />
        </TabsContent>
        <TabsContent value={LibraryTabs.books}>
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LibraryContent;
