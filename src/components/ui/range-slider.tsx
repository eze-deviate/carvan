"use client";
import { cn } from "@/lib/utils";
import * as SliderPrimitive from "@radix-ui/react-slider";
import React from "react";

const RangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <SliderPrimitive.Root
      min={0}
      max={100}
      step={1}
      className={cn("relative flex items-center w-full h-6", className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative w-full h-1 bg-gray-200">
        <SliderPrimitive.Range className="absolute h-full bg-brand-400" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border bg-brand-400 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-brand-500" />
      <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border bg-brand-400 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-brand-500" />
    </SliderPrimitive.Root>
  );
});

export default RangeSlider;
