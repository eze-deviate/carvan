import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/providers/app-provider";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  item: any;
};

const AddToCartButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, item, ...otherProps }, ref) => {
    const { addToCart } = useAppContext();
    return (
      <Button
        ref={ref}
        variant="outline"
        className={cn("", className)}
        {...otherProps}
        onClick={() => {
          addToCart(item);
        }}
      >
        Add to cart
      </Button>
    );
  }
);

export default AddToCartButton;
