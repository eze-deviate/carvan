"use client";
import CustomBanner from "@/components/banner/custom-banner";
import BookListingCard from "@/components/cards/book-listing-card";
import QuizListingCard from "@/components/cards/quiz-listing-card";
import CustomCarousel from "@/components/carousel/custom-carousel";
import TestCarousel from "@/components/carousel/test-carousel";
import FilterModal from "@/components/filter/filter-modal";
import Categories from "@/components/globals/categories";
import FavoriteButton from "@/components/globals/favorite-button";
import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import RateItem from "@/components/molecules/rate-item";
import RangeSlider from "@/components/ui/range-slider";
import { books, quizzes } from "@/constants/dummy-data";
import React, { useState } from "react";
import BannerTop from "./_components/banner-top";
import BannerBottom from "./_components/banner-bottom";
import ResponsiveGrid from "@/components/layout/responsive-grid";
import { cn } from "@/lib/utils";
import { ui } from "@/constants";

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
  const [rating, setRating] = useState(0);
  return (
    <main className="w-full">
      {/* <CustomBanner title="Caravan Book Shop" className="h-[41.313rem] mb-16" /> */}
      <BannerTop className="mb-14" />
      <section className="flex flex-col gap-y-10">
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

      {/* <CustomBanner title="Caravan Quizzes" className="h-[26.25rem] mb-16" /> */}
      <BannerBottom className="my-20" />
      <section className="flex flex-col gap-y-10">
        <CustomCarousel className="max-w-full" title="Customers Favorite">
          {books.map((book, idx) => (
            <BookListingCard book={book} key={idx} />
          ))}
        </CustomCarousel>
        <CustomCarousel
          className="max-w-full"
          title="Great Grand Children's book"
        >
          {books.map((book, idx) => (
            <BookListingCard book={book} key={idx} />
          ))}
        </CustomCarousel>
      </section>
      <CustomBanner title="Caravan Quizzes" className="h-[26.25rem] my-20" />
      <section className="flex flex-col gap-y-10">
        <ResponsiveGrid
          className={cn("", ui.layoutPadding)}
          title="Best Selling"
        >
          {quizzes.slice(0, 8).map((quiz, idx) => (
            <QuizListingCard quiz={quiz} key={idx} />
          ))}
        </ResponsiveGrid>
      </section>
      {/* <RateItem rating={rating} setRating={setRating} /> */}

      <Footer />
    </main>
  );
};

export default HomePage;
