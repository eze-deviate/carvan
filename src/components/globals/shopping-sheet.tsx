"use client";
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
import { useAppContext } from "@/providers/app-provider";
import Image from "next/image";

type Props = {};

const ShoppingSheet = (props: Props) => {
  const { cart } = useAppContext();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <ShoppingBag />
        </button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[33%] p-8 h-screen">
        <SheetHeader>
          <SheetTitle className="capitalize text-gray-900 text-3xl font-semibold mb-6">
            Shopping Bag
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full relative overflow-hidden">
          {cart?.length > 0 ? (
            <div className="flex flex-col gap-y-8 flex-1 overflow-y-auto scrollbar-hide pb-40">
              {cart.map((item, idx) => (
                <CartItem item={item} key={idx} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col w-full flex-1 items-center justify-center">
              <Image
                alt="Empty Cart"
                src="/assets/images/empty-cart.jpg"
                className=""
                width={100}
                height={100}
              />
              <h3 className="text-gray-900 ">Empty!!</h3>
            </div>
          )}

          {!!(cart.length > 0) && (
            <div className="flex flex-col gap-4 w-full justify-between absolute bottom-0 left-0 bg-white">
              <div className="flex justify-between">
                <span className="text-lg font-medium text-gray-700">
                  SubTotal
                </span>
                <span className="text-gray-900 font-semibold text-lg">
                  $30.00
                </span>
              </div>
              <div className="py-8 flex justify-between border-t border-gray-300">
                <Button
                  variant="outline"
                  className="px-[2.3125rem] py-[1.125rem] font-semibold text-gray-800 text-base"
                >
                  View Cart
                </Button>
                <Button className="border-none bg-brand-500 text-white hover:bg-brand-700 font-semibold px-[2.3125rem] py-[1.125rem]">
                  Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingSheet;
