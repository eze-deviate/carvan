"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import AccountIcon from "@public/assets/svgs/account.svg";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Props = {};

const UserAvatarDropDown = (props: Props) => {
  const router = useRouter();
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-y-2">
          <div
            className={cn("p-2 flex gap-8 bg-transparent cursor-pointer ")}
            onClick={() => {
              router.push("/profile");
            }}
          >
            <AccountIcon />
            <label
              className={cn(
                "capitalize text-gray-800 text-base cursor-pointer"
              )}
            >
              Account
            </label>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserAvatarDropDown;
