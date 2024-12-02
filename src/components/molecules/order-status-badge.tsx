import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  orderStatus?: string;
};

const OrderStatusBadge = (props: Props) => {
  return (
    <div
      className={cn(
        " w-fit rounded font-medium text-sm px-[0.25rem] py-[0.1875rem] bg-gray-200 text-gray-800"
      )}
    >
      Processing Order
    </div>
  );
};

export default OrderStatusBadge;
