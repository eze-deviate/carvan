import { icons, navItems, ui } from "@/constants";
import SvgAtom from "../icons/svg-atom";
// import { BellIcon } from "@radix-ui/react-icons";
import SearchIcon from "@public/assets/svgs/search.svg";
import BellIcon from "@public/assets/svgs/bell.svg";
import Link from "next/link";
import { Input } from "../ui/input";

import UserAvatarDropDown from "../navigation/user-avatar-dropdown";
import { cn } from "@/lib/utils";

import ShoppingSheet from "./shopping-sheet";
const Header = () => {
  return (
    <header
      className={cn(
        `flex w-full py-[1.5rem] justify-between items-center bg-white shadow-md`,
        ui.layoutPadding
      )}
    >
      <div className="flex items-center gap-20">
        <div className="flex items-center">
          <img
            src="/assets/svgs/logo-with-text.svg"
            alt="Caravan logo"
            className="h-10 mr-2"
          />
          {/* <SvgAtom iconName={icons.iconWithText} /> */}
          {/* <span className="text-xl font-bold text-black">Caravan</span> */}
        </div>
        <nav className="flex gap-x-3 items-center">
          {navItems.map((item) => (
            <Link
              href={item.link}
              key={item.text}
              className="text-base font-normal text-gray-800 px-4"
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center">
        <div className="flex items-center pr-2 bg-gray-50  border-gray-200 rounded-lg">
          <SearchIcon className="h-[15] w-[15]" />
          <Input
            className="focus:outline-none border-none appearance-none focus:border-none bg-gray-50 placeholder:text-gray-500"
            type="text"
            placeholder="Search for books or quizzes"
          />
        </div>
        <div className="flex items-center space-x-6">
          <ShoppingSheet />

          <button>
            <BellIcon className="h-5 w-5" />
          </button>
          <UserAvatarDropDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
