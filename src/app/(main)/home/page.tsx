"use client";
import CustomBanner from "@/components/banner/custom-banner";
import BookListingCard from "@/components/cards/book-listing-card";
import CustomCarousel from "@/components/carousel/custom-carousel";
import TestCarousel from "@/components/carousel/test-carousel";
import Categories from "@/components/globals/categories";
import Header from "@/components/globals/header";
import { books } from "@/constants/dummy-data";
import React from "react";

type Props = {};

const newArr = Array(11).fill(0);

const TestChild = ({ index }: { index: number }) => {
  return (
    <div className="flex h-72 text-white items-center justify-center text-xl">
      {index}
    </div>
  );
};
const HomePage = (props: Props) => {
  console.log(books, "BOOKS");
  return (
    <main className="w-full">
      <Header />
      <CustomBanner title="Caravan Book Shop" className="h-[41.313rem] mb-16" />

      {/* <div className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/4 text-center border border-gray-200 bg-gray-900">
        <BookListingCard book={books[0]} />
      </div> */}

      <section>
        <CustomCarousel className="max-w-full  px-10" title="Recommended Books">
          {books.map((book, idx) => (
            <BookListingCard book={book} />
          ))}
        </CustomCarousel>
        <CustomCarousel className="max-w-full  px-10" title="Best Selling">
          {books.map((book, idx) => (
            <BookListingCard book={book} />
          ))}
        </CustomCarousel>
      </section>

      <CustomBanner title="Caravan Book Shop" className="h-[26.25rem] mb-16" />

      <section className="flex flex-col gap-y-10">
        <CustomCarousel className="max-w-full  px-10" title="Best Selling">
          {books.map((book, idx) => (
            <BookListingCard book={book} />
          ))}
        </CustomCarousel>
        <CustomCarousel
          className="max-w-full  px-10"
          title="Customer Favorites"
        >
          {books.map((book, idx) => (
            <BookListingCard book={book} />
          ))}
        </CustomCarousel>
        <CustomCarousel
          className="max-w-full  px-10"
          title="Great Children Books"
        >
          {books.map((book, idx) => (
            <BookListingCard book={book} />
          ))}
        </CustomCarousel>
      </section>
    </main>
  );
};

export default HomePage;
