"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useState } from "react";
import ReviewRating from "./sub-components/review-rating";
import { Button } from "@/components/ui/button";
import ResourceType from "./sub-components/resource-type";
import CategoriesFilter from "./sub-components/categories-filter";
import PriceRangeFilter from "./sub-components/price-range-filter";
import FilterIcon from "@public/assets/svgs/filter.svg";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

type Props = {};

const FilterModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeDialog = () => setIsOpen(false);
  return (
    <div>
      <Button
        className="bg-transparent hover:bg-gray-50 border border-gray-300 py-3 px-[0.875rem] text-gray-800 gap-x-2"
        onClick={() => setIsOpen(true)}
      >
        <FilterIcon />
        Filters
      </Button>
      <Dialog open={isOpen}>
        <DialogContent className="max-w-screen-md" showClose={false}>
          {/* close icon */}
          <DialogClose
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            onClick={closeDialog}
          >
            <Cross2Icon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {/* content */}
          <div className="flex flex-col">
            <div className="w-full">
              <Accordion type="multiple" className="w-full flex flex-col">
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="text-gray-900 text-lg font-semibold">
                    Reviews Rating
                  </AccordionTrigger>
                  <AccordionContent>
                    <ReviewRating />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-none">
                  <AccordionTrigger className="text-gray-900 text-lg font-semibold">
                    Resource Type
                  </AccordionTrigger>
                  <AccordionContent>
                    <ResourceType />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-none">
                  <AccordionTrigger className="text-gray-900 text-lg font-semibold">
                    Categories
                  </AccordionTrigger>
                  <AccordionContent>
                    <CategoriesFilter />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="w-full">
              <PriceRangeFilter />
            </div>
            {/* buttons */}
            <div className="flex w-full justify-between">
              <Button className="text-base text-gray-800 bg-white py-[0.6875rem] px-[2.3125rem] border border-gray-200 hover:bg-brand-100">
                clear all filters
              </Button>
              <Button className="text-base text-white bg-brand-500">
                Show Results
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FilterModal;
