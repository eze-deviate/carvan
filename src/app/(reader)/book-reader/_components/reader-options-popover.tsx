import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import NewTabIcon from "@public/assets/svgs/new-tab.svg";
import ShareIcon from "@public/assets/svgs/share.svg";
import Info from "@public/assets/svgs/info.svg";

import React from "react";

type Props = {};
const PoverItem = () => {
  return <div className="flex gap-x-2"></div>;
};
const ReaderPopOver = (props: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <DotsHorizontalIcon className="text-white cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="p-3 flex flex-col gap-y-1">
        <a
          className="flex gap-x-2 p-2 items-center"
          href="/book-reader"
          target="_blank"
        >
          <NewTabIcon />
          <span className="text-sm text-gray-800">Open in new tab</span>
        </a>
        <div className="flex gap-x-2 p-2 items-center">
          <ShareIcon />
          <span className="text-sm text-gray-800">Share</span>
        </div>
        <div className="flex gap-x-2 p-2 items-center">
          <Info />
          <span className="text-sm text-gray-800">View Book Info</span>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ReaderPopOver;
