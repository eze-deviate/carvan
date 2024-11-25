"use client";
import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import FlagIcon from "@public/assets/svgs/flag.svg";
import { Form } from "../ui/form";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LeaveAReviewSchema, ReportQuestionSchema } from "@/types";
import { CustomField } from "../globals/custom-field";
import { Textarea } from "../ui/textarea";
import UploadIcon from "@public/assets/svgs/upload-ribbon.svg";
import RateItem from "../molecules/rate-item";

type Props = {};

const LeaveAReviewModal = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const form = useForm<z.infer<typeof LeaveAReviewSchema>>({
    defaultValues: {
      description: "",
    },
  });
  const closeDialog = () => setIsOpen(false);
  const handleFileSelect = () => {};
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => setIsOpen(true)}
        >
          <FlagIcon />
          Report
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-sm p-6" showClose={false}>
        <DialogClose
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={closeDialog}
        >
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="text-3xl text-gray-800 font-semibold">
            Leave Review
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form>
            <div className="flex flex-col gap-y-10 w-full">
              <div className="flex flex-col gap-y-6 w-full">
                {/* checkbox heading &&& checkboxes */}
                <div className="flex flex-col gap-y-3">
                  <h3>How would you rate the quiz</h3>
                  <RateItem rating={rating} setRating={setRating} />
                </div>
                {/* Description */}
                <CustomField
                  className="flex-1"
                  control={form.control}
                  name="description"
                  formLabel="Leave comment"
                  render={({ field }) => (
                    <Textarea
                      className="resize-none border-gray-200 placeholder:text-gray-400"
                      placeholder="Describe your experience"
                      rows={5}
                      {...field}
                    />
                  )}
                  labelClass="capitalize"
                  schema={LeaveAReviewSchema}
                />
              </div>
              <Button variant="primary" type="submit" className="w-full">
                Submit Report
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LeaveAReviewModal;
