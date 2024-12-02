import CopyLabel from "@/components/globals/copy-label";
import OrderStatusBadge from "@/components/molecules/order-status-badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CaretRightIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import Image from "next/image";

type Props = {};

const ProfileReviewItem = (props: Props) => {
  return (
    <div className="flex gap-x-4 border-gray-200 bg-gray-50 rounded p-3 items-start ">
      <div className="w-[13.666%] h-full">
        <Image
          width={100}
          height={100}
          src={"/assets/images/book-image.webp"}
          alt="alt"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="flex-1 flex flex-col gap-y-3">
        {/* 4col */}
        <div className="flex gap-x-[0.625rem] text-sm text-gray-700">
          <p className="">
            Order NO: &nbsp;
            <span className="font-medium">O-NG240816582962</span>
          </p>
          <p className="">
            Order Date: &nbsp;
            <span className="font-medium">
              {format(new Date(2024, 3, 19), "EEEE, MMMM d, yyyy")}
            </span>
          </p>
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <CopyLabel />
            {/* title */}
            <span className="text-lg text-gray-900 font-semibold">
              Stress Relief: thinking Colors
            </span>
            {/* author */}
            <span className="text-gray-700 text-sm">By Olivia Crown</span>
          </div>
          <Button variant="outline" className="gap-1 text-base">
            Review Product <CaretRightIcon />
          </Button>
        </div>

        <div className="flex gap-x-12 text-gray-700 text-sm">
          <p className="capitalize text-gray-900 text-base font-semibold">
            {`$10.00`}
          </p>
        </div>

        <div className="flex gap-x-2">
          <div
            className={cn(
              " w-fit rounded font-medium text-sm px-[0.25rem] py-[0.1875rem] bg-success-100 text-success-800  "
            )}
          >
            Order Delivered
          </div>
          <p className="text-gray-700 text-sm">
            &nbsp; on {format(new Date(2024, 3, 19), "EEEE, MMMM d, yyyy")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileReviewItem;
