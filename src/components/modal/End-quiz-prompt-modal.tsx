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
import ExclamationIcon from "@public/assets/svgs/exclamation.svg";
import RateItem from "../molecules/rate-item";

type Props = {};

const EndQuizPromptModal = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const form = useForm<z.infer<typeof ReportQuestionSchema>>({
    defaultValues: {
      incorrectAnswer: false,
      questionIssue: false,
      imageIssue: false,
      others: false,
      spellingOrGrammar: false,
    },
  });
  const closeDialog = () => setIsOpen(false);
  const handleFileSelect = () => {};
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          variant="primary"
          className="disabled:bg-gray-300"
          onClick={() => setIsOpen(true)}
        >
          Continue
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-sm p-7" showClose={false}>
        <DialogClose
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={closeDialog}
        >
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-center bg-warning-100 w-16 h-16 rounded-full self-center">
            <ExclamationIcon />
          </div>

          <div className="flex flex-col gap-y-6 items-center text-center">
            <h1 className="text-gray-800 text-3xl font-semibold">
              You want to end quiz session?
            </h1>
            <p className="text-base text-gray-600">
              {` You’re doing absolutely amazing. save progress or exit without
              saving.`}
            </p>
            <div className="flex gap-x-6 w-full">
              <Button variant="outline" className="flex-1">
                Exit without saving
              </Button>
              <Button
                variant="primary"
                className="flex-1"
              >{`Save progress & exit`}</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EndQuizPromptModal;
