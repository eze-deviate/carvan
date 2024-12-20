import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className: string;
};

const TrashIcon = (props: Props) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      className={cn("", props.className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 4.30111H3.16667M3.16667 4.30111H16.5M3.16667 4.30111V15.9678C3.16667 16.4098 3.34226 16.8337 3.65482 17.1463C3.96738 17.4588 4.39131 17.6344 4.83333 17.6344H13.1667C13.6087 17.6344 14.0326 17.4588 14.3452 17.1463C14.6577 16.8337 14.8333 16.4098 14.8333 15.9678V4.30111H3.16667ZM5.66667 4.30111V2.63444C5.66667 2.19241 5.84226 1.76849 6.15482 1.45593C6.46738 1.14337 6.89131 0.967773 7.33333 0.967773H10.6667C11.1087 0.967773 11.5326 1.14337 11.8452 1.45593C12.1577 1.76849 12.3333 2.19241 12.3333 2.63444V4.30111M7.33333 8.46777V13.4678M10.6667 8.46777V13.4678"
        stroke="stroke-current"
        className="text-gray-500 hover:text-red-500"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TrashIcon;
