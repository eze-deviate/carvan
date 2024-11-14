import { profileMenu } from "@/constants";
import { cn } from "@/lib/utils";
import { TprofileMenuIcon, TProfileMenuItem } from "@/types";
import React from "react";
import ProfileMenuIcon from "./profile-menu-icons";

const MenuItem = ({
  menuItem,
  active,
  setActive,
}: {
  menuItem: TProfileMenuItem;
  active: TprofileMenuIcon;
  setActive: React.Dispatch<React.SetStateAction<TprofileMenuIcon>>;
}) => {
  const { icon, label } = menuItem;
  return (
    <div
      className={cn("p-2 flex gap-8 bg-transparent cursor-pointer ", {
        "bg-brand-50 rounded-sm": active == icon,
      })}
      onClick={() => setActive(icon)}
    >
      <ProfileMenuIcon icon={icon} />
      <label
        className={cn("capitalize text-gray-800 text-base cursor-pointer", {
          "text-error-600": icon == "logout",
        })}
      >
        {label}
      </label>
    </div>
  );
};
type Props = {
  active: TprofileMenuIcon;
  setActive: React.Dispatch<React.SetStateAction<TprofileMenuIcon>>;
};
const ProfileMenu = ({ active, setActive }: Props) => {
  return (
    <aside className="w-full h-screen sm:w-[22%] hidden  border-r border-gray-300 pr-4 sm:flex flex-col gap-y-6 pt-8">
      {profileMenu.map((menuItem) => (
        <MenuItem menuItem={menuItem} active={active} setActive={setActive} />
      ))}
    </aside>
  );
};

export default ProfileMenu;
