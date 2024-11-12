import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CopyIcon } from "@radix-ui/react-icons";
import React from "react";
import PaymentReceipt from "./payment-receipt";

type Props = {
  accountNumber: string;
  bankName: string;
  accountName: string;
  icon: React.ReactNode;
};

const AccountDetails = (props: Props) => {
  const { accountName, accountNumber, bankName, icon } = props;
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="text-gray-800 text-base font-medium">
        Transfer to the following Account
      </h3>
      {/* bank details */}
      <div className="flex flex-col gap-5 w-full">
        {/* bank name  and logo*/}
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-600 font-normal">Bank Name</span>
          <span className="flex gap-2">
            {icon} {bankName}
          </span>
        </div>
        {/* account number */}
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm font-normal">Account Number</h4>
          <div className="flex justify-between">
            <p className="text-gray-900 font-semibold text-sm">
              {accountNumber}
            </p>
            <Button className="bg-transparent hover:bg-transparent text-gray-700 text-sm font-medium gap-2">
              <CopyIcon /> copy
            </Button>
          </div>
        </div>
        {/* account name */}
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm font-normal">
            Beneficiary Name
          </h4>
          <div className="flex justify-between">
            <p className="text-gray-900 font-semibold text-sm">{accountName}</p>
          </div>
        </div>
      </div>

      {/* seprator */}
      <div className="w-full border-b-2 border-dashed border-gray-300"></div>

      <div className="w-full gap-4 flex flex-col">
        <h3 className="text-gray-800 font-medium text-base">
          Transfer exact amount to avoid failure
        </h3>
        <div className="w-full flex flex-col gap-2">
          <h4 className="text-gray-600 text-sm font-normal">Amount to Pay</h4>
          <div className="flex justify-between">
            <p className="text-gray-900 font-semibold text-sm">PKT 2038</p>
            <Button className="bg-transparent hover:bg-transparent text-gray-700 text-sm font-medium gap-2">
              <CopyIcon /> copy
            </Button>
          </div>
        </div>
      </div>
      {/* separator */}
      <div className="border-b-2 border-dashed border-gray-300"></div>
      <PaymentReceipt />
      <Button className="bg-brand-500 hover:bg-brand-700 text-white hover:text-white py-4">
        Confirm Payment
      </Button>
    </div>
  );
};

export default AccountDetails;
