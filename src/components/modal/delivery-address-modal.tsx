"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import PenIcon from "@public/assets/svgs/pen.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckoutAddressFormSchema } from "@/types";
import { Form } from "../ui/form";
import CheckoutAddressFields from "../forms/checkout-address-fields";
type Props = {};

const DeliveryAddressModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof CheckoutAddressFormSchema>>({
    resolver: zodResolver(CheckoutAddressFormSchema),
    defaultValues: {
      firstName: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setIsOpen(false); // Close the dialog after submit
  };
  return (
    <div>
      <PenIcon onClick={() => setIsOpen(true)} />
      <Dialog>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Edit Delivery Address</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form>
              <CheckoutAddressFields form={form} />
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeliveryAddressModal;
