"use client";
import React, { useRef } from "react";
import UploadIcon from "@public/assets/svgs/upload.svg";
import { Input } from "@/components/ui/input";

type Props = {};

const PaymentReceipt = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const handleUploadContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!inputRef || !inputRef.current) return;
    console.log("i got here");
    inputRef.current.click();
  };
  return (
    <div className="flex flex-col gap-y-4">
      <label className="text-base font-medium text-gray-800">
        Ensure to upload your payment receipt
      </label>

      {/* upload container */}
      <div
        className="flex items-center justify-center border border-dashed bg-gray-25 gap-x-3 py-[1.1875rem] cursor-pointer"
        onClick={handleUploadContainerClick}
      >
        <UploadIcon />
        <p className="text-gray-900 text-base font-medium">
          Upload Payment Receipt
        </p>
        <p className="text-gray-700 font-normal text-sm ">{`(PDF., JPEG)`}</p>
      </div>
      <input ref={inputRef} type="file" hidden onChange={handleFileUpload} />

      <label className="text-base font-medium text-gray-800">
        Enter Transaction ID (TID)
      </label>
      <Input
        placeholder="Enter TID"
        className="placeholder:text-gray-400 placeholder:text-base border-gray-200 py-4"
      />
    </div>
  );
};

export default PaymentReceipt;
