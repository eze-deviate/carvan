import { ui } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";
import LibraryContent from "./_components/library-content";

type Props = {};

const MyLibraryPage = (props: Props) => {
  return (
    <div className={cn("w-full", ui.layoutPadding)}>
      {/* heading */}
      <div className="flex flex-col gap-y-4">
        <h1 className="font-oswald font-medium text-[3.5rem] text-gray-900">
          Welcome Back, John <span>👋</span>
        </h1>
        <p className="text-gray-800 font-normal text-lg">
          “Knowledge has to be improved, challenged, and increased constantly,
          or it vanishes.”{" "}
          <span className="ml-3 italic font-normal text-[1.125rem] text-[#1570EF]">
            Peter Drucker
          </span>
        </p>
      </div>
      {/* content */}
      <div>
        <LibraryContent />
      </div>
    </div>
  );
};

export default MyLibraryPage;
