"use client";
import BackButton from "@/components/buttons/back-button";
import { ui } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";
import CartPageItem from "./_components/cart-page-item";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/providers/app-provider";
import ResponsiveGrid from "@/components/layout/responsive-grid";
import { books } from "@/constants/dummy-data";
import BookListingCard from "@/components/cards/book-listing-card";
import { useRouter } from "next/navigation";
import Footer from "@/components/globals/footer";

const CartPage = () => {
  const { cart } = useAppContext();
  const router = useRouter();
  return (
    <div className={cn("flex flex-col gap-12", ui.layoutPadding)}>
      <BackButton text="continue book hunting" className="shadow-none w-52" />
      <div className="flex flex-col gap-16">
        {/* cart */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-gray-900">My Cart</h1>

          <div className="flex gap-16">
            {/* cart items */}
            <div className="flex flex-col gap-6 w-[51%]">
              {cart.map((cartItem, idx) => (
                <CartPageItem key={`cartitem-${idx}`} cartItem={cartItem} />
              ))}
            </div>
            {/* order summary */}
            <div className="flex flex-col w-[44%] bg-gray-50 border border-gray-300 p-4 gap-6">
              <h3 className="text-gray-900 text-xl font-semibold">
                Order Summary
              </h3>
              <Separator className="border-gray-300" />
              {/* subtotal and total */}
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <span className="text-sm font-normal text-gray-700">
                    Subtotal
                  </span>
                  <span className="text-base font-medium text-gray-900">
                    $30.00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-normal text-gray-700">
                    Estimated total
                  </span>
                  <span className="text-xl font-semibold text-gray-900">
                    $30.00
                  </span>
                </div>
              </div>

              {/* checkout button */}
              <Button
                className="bg-brand-500 text-white border-none hover:bg-brand-700 hover:text-white hover:outline-none hover:border-none"
                onClick={() => {
                  router.push("/checkout");
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
        {/* you may also like */}
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            You may also like
          </h1>

          <ResponsiveGrid>
            {books.slice(0, 4).map((book) => (
              <BookListingCard book={book} />
            ))}
          </ResponsiveGrid>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
