import { TprofileMenuIcon } from "@/types";
import AccountContent from "./account/account-content";
import AddressBookContent from "./address-book-content";
import MyOrdersContent from "./order/my-orders-content";
import SecurityContent from "./security/security-content";
import WishList from "./wishlist";
import ProfileReviewContent from "./profile-review-content";

type Props = {
  active: TprofileMenuIcon;
};

const SelectedTabContent = ({ active }: Props) => {
  if (active == "account") return <AccountContent />;
  if (active == "address") return <AddressBookContent />;
  if (active == "orders") return <MyOrdersContent />;
  if (active == "reviews") return <ProfileReviewContent />;
  if (active == "wishlist") return <WishList />;
  if (active == "security") return <SecurityContent />;
};

export default SelectedTabContent;
