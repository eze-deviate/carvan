"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import PenIcon from "@public/assets/svgs/pen.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CheckoutAddressFormSchema,
  UpdatePersonalInfoFormSchema,
} from "@/types";
import { Form } from "../ui/form";
import CheckoutAddressFields from "../forms/checkout-address-fields";
import { Cross2Icon } from "@radix-ui/react-icons";
import UpdatePersonalInfoForm from "../forms/update-personal-info-form";
type Props = {};

const UpadatePersonalInfoModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof UpdatePersonalInfoFormSchema>>({
    resolver: zodResolver(UpdatePersonalInfoFormSchema),
    defaultValues: {
      firstName: "",
    },
  });
  const closeDialog = () => setIsOpen(false);
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          className="flex gap-2 bg-transparent items-center shadow-none text-gray-700 text-base font-medium hover:bg-brand-100"
          onClick={() => setIsOpen(true)}
        >
          <PenIcon />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="" showClose={false}>
        <DialogClose
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={closeDialog}
        >
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="text-2xl text-gray-800 font-semibold">
            Update Personal Info
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form>
            <UpdatePersonalInfoForm setIsOpen={setIsOpen} />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpadatePersonalInfoModal;
