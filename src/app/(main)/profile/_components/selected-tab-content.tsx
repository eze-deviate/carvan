import { TprofileMenuIcon } from "@/types";
import AccountContent from "./account/account-content";
import AddressBookContent from "./address-book-content";
import MyOrdersContent from "./my-orders-content";
import ReviewsContent from "./reviews-content";
import WishlistContent from "./wishlist-content";
import SecurityContent from "./security/security-content";

type Props = {
  active: TprofileMenuIcon;
};

const SelectedTabContent = ({ active }: Props) => {
  if (active == "account") return <AccountContent />;
  if (active == "address") return <AddressBookContent />;
  if (active == "orders") return <MyOrdersContent />;
  if (active == "reviews") return <ReviewsContent />;
  if (active == "wishlist") return <WishlistContent />;
  if (active == "security") return <SecurityContent />;
};
// const SelectedTabContent = (props: Props) => {
//   return (
//     <div className="pt-8">
//       <ItemToShow {...props} />
//     </div>
//   );
// };
export default SelectedTabContent;
