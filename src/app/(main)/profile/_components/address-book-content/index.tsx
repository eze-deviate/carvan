import React from "react";

import { CalendarIcon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import PersonAttribute from "@/components/molecules/person-attribute";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UpdateDeliveryAddressModal from "@/components/modal/update-delivery-address-modal";
// import TrashIcon from "@public/assets/svgs/trash.svg";

type Props = {};

const AddressBookContent = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-6 w-[80%] ">
      <h1 className="text-3xl font-semibold  text-gray-900">Address Book</h1>
      <div className="flex flex-col gap-y-8">
        {/* heading */}
        <div className="justify-between flex items-center px-4 py-[0.875rem] bg-brand-50 border border-brand-100 rounded">
          <h4 className="text-[#2F313F] text-xl font-medium">
            Delivery Address
          </h4>
          <UpdateDeliveryAddressModal />
        </div>
        {/* attributes */}
        <div className="w-full flex flex-col gap-y-5">
          <div className="flex w-full gap-x-6">
            <PersonAttribute label="First Name" value="Grey" />
            <PersonAttribute label="Last Name" value="Dolph" />
          </div>
          <div className="flex w-full gap-x-6">
            <PersonAttribute label="Email" value="Dolph@gmail.com" disabled />
            <PersonAttribute label="Phone Number" value="913-4784-8585" />
          </div>
          <div className="flex w-full gap-x-6">
            <PersonAttribute label="Province/State" value="Alaska" />
          </div>
          <div className="flex w-full gap-x-6">
            <PersonAttribute label="District" value="Alaska" />
            <PersonAttribute label="City/Town" value="Alaska" />
          </div>
          <div className="flex w-full gap-x-6">
            <PersonAttribute label="Delivery Address" value="Alaska" />
          </div>
          <div className="flex w-full gap-x-6">
            <PersonAttribute
              label="Additional Information Address"
              value="Alaska"
            />
          </div>
        </div>

        {/* delete account */}

        <Button className="self-start bg-transparent border-none shadow-none text-error-600 hover:bg-transparent hover:text-error-600 gap-x-2">
          {/* <TrashIcon stroke="#d92d20" /> */}
          <TrashIcon />
          Delete Account
        </Button>
      </div>
    </div>
  );
};

export default AddressBookContent;
