import React from "react";
import CloudArrowUp from "@public/assets/svgs/CloudArrowUp.svg";

type Props = {};

const UploadPaymentReceipt = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-base text-gray-800 font-medium">
        Ensure to upload your payment receipt
      </h2>

      <div className="flex gap-4 bg-gray-25 px-4 py-[1.1875rem] rounded-sm border border-gray-200 justify-center items-center">
        <CloudArrowUp />
        <label className="text-base font-medium text-gray-800">
          Upload Payment Receipt
        </label>
        <span className="text-sm text-gray-700 font-normal">(PDF, JPEG)</span>
      </div>
    </div>
  );
};

export default UploadPaymentReceipt;
