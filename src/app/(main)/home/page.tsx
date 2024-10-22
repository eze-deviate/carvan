"use client";
import CustomBanner from "@/components/banner/custom-banner";
import BookListingCard from "@/components/cards/book-listing-card";
import CustomCarousel from "@/components/carousel/custom-carousel";
import TestCarousel from "@/components/carousel/test-carousel";
import FilterModal from "@/components/filter/filter-modal";
import Categories from "@/components/globals/categories";
import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import RangeSlider from "@/components/ui/range-slider";
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
  return (
    <main className="w-full">
      <CustomBanner title="Caravan Book Shop" className="h-[41.313rem] mb-16" />

      {/* <div className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/4 text-center border border-gray-200 bg-gray-900">
        <BookListingCard book={books[0]} />
      </div> */}

      <section>
        <CustomCarousel className="max-w-full" title="Recommended Books">
          {books.map((book, idx) => (
            <BookListingCard book={book} key={idx} />
          ))}
        </CustomCarousel>
        <CustomCarousel className="max-w-full" title="Best Selling">
          {books.map((book, idx) => (
            <BookListingCard book={book} key={idx} />
          ))}
        </CustomCarousel>
      </section>

      <CustomBanner title="Caravan Book Shop" className="h-[26.25rem] mb-16" />

      <section className="flex flex-col gap-y-10">
        <CustomCarousel className="max-w-full" title="Best Selling">
          {books.map((book, idx) => (
            <BookListingCard book={book} key={idx} />
          ))}
        </CustomCarousel>
        <CustomCarousel className="max-w-full" title="Customer Favorites">
          {books.map((book, idx) => (
            <BookListingCard book={book} key={idx} />
          ))}
        </CustomCarousel>
        <CustomCarousel className="max-w-full" title="Great Children Books">
          {books.map((book, idx) => (
            <BookListingCard book={book} key={idx} />
          ))}
        </CustomCarousel>
      </section>
      <div className="w-1/2 flex items-center justify-center">
        <FilterModal />
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
