import BookListingCard from "@/components/cards/book-listing-card";
import ResponsiveGrid from "@/components/layout/responsive-grid";
import { useAppContext } from "@/providers/app-provider";
import React from "react";

type Props = {};

const WishlistBooks = (props: Props) => {
  const { wishlist } = useAppContext();
  const wishlistBooks = wishlist.filter((item) => item.resourceType == "book");
  console.log("wishlist", wishlistBooks);
  return (
    <div>
      {wishlistBooks.length > 0 ? (
        <ResponsiveGrid>
          {wishlistBooks.map((book, idx) => (
            <BookListingCard book={book.resource} showFav key={idx} />
          ))}
        </ResponsiveGrid>
      ) : (
        <div>empty</div>
      )}
    </div>
  );
};

export default WishlistBooks;
