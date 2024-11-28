import UpadatePersonalInfoModal from "@/components/modal/update-personal-info-modal";
import React from "react";
import PersonAttribute from "./person-attribute";
import { CalendarIcon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
// import TrashIcon from "@public/assets/svgs/trash.svg";

type Props = {};

const AccountContent = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-6 w-[80%] ">
      <h1 className="text-3xl font-semibold  text-gray-900">My Account</h1>
      <div className="flex flex-col gap-y-8">
        {/* heading */}
        <div className="justify-between flex items-center px-4 py-[0.875rem] bg-brand-50 border border-brand-100 rounded">
          <h4 className="text-[#2F313F] text-xl font-medium">
            Personal Information
          </h4>
          <UpadatePersonalInfoModal />
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
            <PersonAttribute
              label="Birth Date"
              value={
                <div className="flex gap-x-2">
                  <CalendarIcon />
                  <span>{111111111}</span>
                </div>
              }
              className="w-[50%] flex-grow-0"
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

export default AccountContent;
