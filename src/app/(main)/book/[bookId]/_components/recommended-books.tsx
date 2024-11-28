import BookListingCard from "@/components/cards/book-listing-card";
import ResponsiveGrid from "@/components/layout/responsive-grid";
import { books } from "@/constants/dummy-data";
import React from "react";

type Props = {};

const RecommendedBook = (props: Props) => {
  return (
    <div>
      <ResponsiveGrid title="Recommended Books">
        {books.slice(0, 4).map((book, idx) => (
          <BookListingCard book={book} />
        ))}
      </ResponsiveGrid>
    </div>
  );
};

export default RecommendedBook;
