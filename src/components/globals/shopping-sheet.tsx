import React from "react";
import ShoppingBag from "@public/assets/svgs/shopping-bag.svg";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import CartItem from "../molecules/cart-item";
import { Button } from "../ui/button";

type Props = {};

const ShoppingSheet = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <ShoppingBag />
        </button>
      </SheetTrigger>
      <SheetContent className="px-8 sm:max-w-[33%] w-full">
        <SheetHeader>
          <SheetTitle className="">Shopping Bag</SheetTitle>
        </SheetHeader>
        <CartItem />

        <div className="flex flex-col gap-4 w-full justify-between">
          <div className="flex justify-between">
            <span className="text-lg font-medium text-gray-700">SubTotal</span>
            <span className="text-gray-900 font-semibold text-lg">$30.00</span>
          </div>

          <div className="py-8 flex justify-between border-t border-gray-300">
            <Button className="bg-transparent rounded border border-gray-200 px-[2.3125rem] py-[1.125rem] font-semibold text-gray-800 text-base">
              View Cart
            </Button>
            <Button className="border-none bg-brand-500 text-white hover:bg-brand-700 font-semibold px-[2.3125rem] py-[1.125rem]">
              Checkout
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingSheet;
