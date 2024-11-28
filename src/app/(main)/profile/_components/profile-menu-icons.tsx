import React from "react";
import { TprofileMenuIcon } from "@/types";
import AccountIcon from "@public/assets/svgs/account.svg";
import SecurityIcon from "@public/assets/svgs/security.svg";
import OrdersIcon from "@public/assets/svgs/order.svg";
import AddressBookIcon from "@public/assets/svgs/address-book.svg";
import ReviewsMenuIcon from "@public/assets/svgs/reviews-menu-icon.svg";
import LogoutIcon from "@public/assets/svgs/logout.svg";
import WishListIcon from "@public/assets/svgs/heart.svg";

type Props = {
  icon: TprofileMenuIcon;
};

const ProfileMenuIcon = ({ icon }: Props) => {
  if (icon == "account") return <AccountIcon />;
  if (icon == "address") return <AddressBookIcon />;
  if (icon == "orders") return <OrdersIcon />;
  if (icon == "reviews") return <ReviewsMenuIcon />;
  if (icon == "security") return <SecurityIcon />;
  if (icon == "wishlist") return <WishListIcon />;
  if (icon == "logout") return <LogoutIcon />;
};

export default ProfileMenuIcon;
