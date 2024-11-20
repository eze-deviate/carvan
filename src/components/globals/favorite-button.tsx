import { cn } from "@/lib/utils";
import { useAppContext } from "@/providers/app-provider";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import React from "react";

type Props = {
  className?: string;
  iconClassName?: string;
  resource?: any;
  resourceType: "book" | "quiz";
};

const FavoriteButton = (props: Props) => {
  const { removeFromWishlist, addToWishlist, wishlist } = useAppContext();
  const { className, iconClassName, resource, resourceType } = props;
  const isFav = wishlist.find((item) => item.resource._id == resource._id);
  return (
    <span
      className={cn(
        "p-2 rounded-[50%] bg-pink-50 w-fit h-fit flex items-center justify-center cursor-pointer",
        className
      )}
    >
      {isFav ? (
        <HeartFilledIcon
          className={cn("text-favorite-red", iconClassName)}
          onClick={(e) => {
            e.stopPropagation();
            removeFromWishlist(resource._id);
          }}
        />
      ) : (
        <HeartIcon
          className="text-gray-800"
          onClick={(e) => {
            console.log("add to cart");
            e.stopPropagation();
            addToWishlist(resource, resourceType);
          }}
        />
      )}
    </span>
  );
};

export default FavoriteButton;
