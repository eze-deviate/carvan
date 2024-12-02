import React from "react";
import { LibraryTabs } from "@/constants/enums";
import ActivityIcon from "@public/assets/svgs/trend-icon.svg";
import BookIcon from "@public/assets/svgs/book.svg";
import QuizzesIcon from "@public/assets/svgs/quiz-icon.svg";
import WishlistIcon from "@public/assets/svgs/heart.svg";
type Props = {
  name: LibraryTabs;
};

const LibraryTabsIcons = (props: Props) => {
  const { name } = props;
  if (name == LibraryTabs.activity) {
    return <ActivityIcon />;
  }
  if (name == LibraryTabs.books) {
    return <BookIcon />;
  }
  if (name == LibraryTabs.quizzes) {
    return <QuizzesIcon />;
  }
  if (name == LibraryTabs.wishlist) {
    return <WishlistIcon />;
  }
};

export default LibraryTabsIcons;
