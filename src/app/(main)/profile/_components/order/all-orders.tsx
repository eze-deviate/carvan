import React from "react";
import OrderItem from "./order-item";

type Props = {};

const AllOrders = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-6 w-[80%]">
      {Array(8)
        .fill(0)
        .map((orderItem) => (
          <OrderItem />
        ))}
    </div>
  );
};

export default AllOrders;
