import BackButton from "@/components/buttons/back-button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ui } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";
import CheckoutAdress from "./_components/checkout-address";
import CheckoutAddressForm from "../../../components/forms/checkout-address-form";
import Footer from "@/components/globals/footer";
import OrderItem from "./_components/order-item";
import { useRouter } from "next/navigation";
import OrderSection from "./_components/order-section";

type Props = {};

const CheckOutPage = (props: Props) => {
  const hasAddress = false;

  return (
    <div>
      <div className={cn("w-full", ui.layoutPadding)}>
        <BackButton text="continue book hunting" className="shadow-none w-52" />
      </div>
      <div className={cn("flex flex-col gap-12 w-full", ui.layoutPadding)}>
        <div className="flex gap-14 w-full">
          {/* delivery address */}
          <div className="flex flex-col gap-6 w-[55%]">
            {hasAddress ? <CheckoutAdress /> : <CheckoutAddressForm />}
          </div>
          <OrderSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOutPage;
