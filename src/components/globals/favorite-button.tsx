import { cn } from "@/lib/utils";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import React from "react";

type Props = {
  className?: string;
  iconClassName?: string;
  isFavorite?: boolean;
};

const FavoriteButton = (props: Props) => {
  const { className, iconClassName, isFavorite } = props;
  return (
    <span
      className={cn(
        "p-2 rounded-[50%] bg-pink-50 w-fit h-fit flex items-center justify-center cursor-pointer",
        className
      )}
    >
      {isFavorite ? (
        <HeartFilledIcon className={cn("text-favorite-red", iconClassName)} />
      ) : (
        <HeartIcon className="text-gray-800" />
      )}
    </span>
  );
};

export default FavoriteButton;
