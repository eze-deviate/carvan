import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

type Props = {};

const DeliveryAddressModal = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-brand-500 border-none hover:bg-brand-700 text-white text-base py-[11px] px-[37px]">
          Buy Now
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Edit Delivery Address</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryAddressModal;
