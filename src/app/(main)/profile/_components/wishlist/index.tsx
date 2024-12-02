import WishlistContent from "@/components/molecules/wishlist/wishlist-content";
import React from "react";

type Props = {};

const WishList = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-6">
      <h1 className="text-3xl font-semibold text-[#2F313F]">Wishlist</h1>
      <WishlistContent />
    </div>
  );
};

export default WishList;
