"use client";
import PDFReader from "@/app/(reader)/book-reader/_components/pdf-viewer";
import BookReaderProvider from "@/providers/book-reader-provider";

import {
  ArrowLeftIcon,
  DotsHorizontalIcon,
  SizeIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import BookReader from "./_components/book-reader";

type Props = {};

const BookReaderPage = (props: Props) => {
  return (
    <BookReaderProvider>
      <BookReader />
    </BookReaderProvider>
  );
};

export default BookReaderPage;
