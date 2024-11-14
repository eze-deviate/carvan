"use client";
import React, { useState } from "react";
import ProfileMenu from "./profile-menu";
import { TprofileMenuIcon } from "@/types";
import SelectedTabContent from "./selected-tab-content";

type Props = {};

const PageContent = (props: Props) => {
  const [active, setActive] = useState<TprofileMenuIcon>("account");
  return (
    <div className="border-t border-gray-300 w-full flex gap-[3.875rem] mt-10">
      {/* Menus */}
      <ProfileMenu active={active} setActive={setActive} />
      {/* content */}
      <div className="flex-1 pt-8">
        <SelectedTabContent active={active} />
      </div>
    </div>
  );
};

export default PageContent;
