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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Cross2Icon, TrashIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ReportQuestionSchema } from "@/types";
import CustomCheckBox from "../globals/custom-checkbox";
import { CustomField } from "../globals/custom-field";
import { Textarea } from "../ui/textarea";
import UploadIcon from "@public/assets/svgs/upload-ribbon.svg";
import { reportCheckBoxes } from "@/constants";

type Props = {};

const ReportQuestionModal = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const form = useForm<z.infer<typeof ReportQuestionSchema>>({
    defaultValues: {
      // incorrectAnswer: false,
      // questionIssue: false,
      // imageIssue: false,
      // others: false,
      // spellingOrGrammar: false,
      checkboxes: [],
    },
  });
  const closeDialog = () => setIsOpen(false);
  const handleFileSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef?.current) {
      inputRef.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files);
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleDelete = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
      <DialogContent
        className="rounded-sm p-6 overflow-auto max-h-[90vh]"
        showClose={false}
      >
        <DialogClose
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={closeDialog}
        >
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="text-3xl text-gray-800 font-semibold">
            Make Report
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form>
            <div className="flex flex-col gap-y-10 w-full">
              <div className="flex flex-col gap-y-6 w-full">
                {/* checkbox heading &&& checkboxes */}
                <div className="flex flex-col gap-y-1">
                  {/* checkbox heading */}
                  <h2 className="text-base text-gray-700 font-medium">
                    Please let us know what went wrong.
                  </h2>
                  {/* checkboxes */}
                  <FormField
                    control={form.control}
                    name="checkboxes"
                    render={() => (
                      <FormItem>
                        {reportCheckBoxes.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="checkboxes"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <CustomCheckBox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked: any) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              item.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== item.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* Description */}
                <div>
                  <CustomField
                    className="flex-1"
                    control={form.control}
                    name="description"
                    formLabel="Describe your issue"
                    render={({ field }) => (
                      <Textarea
                        className="resize-none border-gray-200 placeholder:text-gray-400"
                        placeholder="Tell us more on what prompted your report..."
                        rows={5}
                        {...field}
                      />
                    )}
                    labelClass="capitalize"
                    schema={ReportQuestionSchema}
                  />
                  <span className="text-sm font-normal text-gray-500">
                    We may email you for more information or updates.
                  </span>
                </div>
                {/* upload */}
                <div className="flex flex-col gap-y-4">
                  <p className="text-gray-500 text-sm">
                    Could you share a screenshot? It&apos;ll help us understand
                    your report better. {`(optional)`}
                  </p>
                  {/* upload button */}
                  <div>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation(); // Stop event propagation
                        handleFileSelect(e);
                      }}
                      variant="transparent"
                      className="w-full bg-[#F4F4F6] gap-x-2 hover:bg-gray-200"
                    >
                      <UploadIcon />
                      <span className="text-gray-600 text-[0.875rem] font-medium">
                        Upload Screenshot
                      </span>
                    </Button>
                    <input
                      ref={inputRef}
                      type="file"
                      hidden
                      onChange={handleFileChange}
                    />
                  </div>
                  {/* upload preview */}
                  <div className="flex overflow-x-auto flex-nowrap">
                    {images.map((image, idx) => {
                      const previewUrl = URL.createObjectURL(image);
                      return (
                        <div className="relative" key={idx}>
                          <img
                            src={previewUrl}
                            alt={`preview-${idx}`}
                            className="object-cover rounded-md w-full h-full"
                          />
                          <div className="absolute top-0 bottom-0 right-0 left-0"></div>
                          <span
                            className="absolute right-3 top-3 cursor-pointer text-white"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDelete(idx);
                            }}
                          >
                            <TrashIcon
                              className="text-red-500 hover:text-red-500 z-30"
                              stroke="#ef4444"
                            />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
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

export default ReportQuestionModal;
