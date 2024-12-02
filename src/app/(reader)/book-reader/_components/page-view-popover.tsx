import React from "react";
import PageViewIcon from "@public/assets/svgs/page-view.svg";
import SingleViewIcon from "@public/assets/svgs/single-view.svg";
import DoubleViewIcon from "@public/assets/svgs/double-view.svg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type TView = "single" | "double";
type Props = {
  pageView: TView;
  setPageView: (view: TView) => void;
};

const PageViewItem = ({
  pageView,
  setPageView,
  icon,
  view,
  text,
}: Props & {
  view: TView;
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="flex flex-col gap-y-3 items-center">
      <div
        className={cn(
          "border cursor-pointer rounded border-gray-300 items-center justify-center p-5",
          {
            "border-brand-500": view == pageView,
          }
        )}
        onClick={() => setPageView(view)}
      >
        {icon}
      </div>

      <p className="text-gray-600 text-xs font-normal">{text}</p>
    </div>
  );
};
const PageViewPopover = (props: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="transparent">
          <PageViewIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-4 py-3">
        <div className="flex flex-col gap-y-4">
          <h3>Page View</h3>
          <div className="flex gap-x-8">
            <PageViewItem
              setPageView={props.setPageView}
              pageView={props.pageView}
              icon={<DoubleViewIcon />}
              text="Two Page"
              view="double"
            />
            <PageViewItem
              setPageView={props.setPageView}
              pageView={props.pageView}
              icon={<SingleViewIcon />}
              text="Single Page"
              view="single"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PageViewPopover;
