"use client";
import { getFileExtensionFromUrl } from "@/lib/actions/book-reader-actions";
import { getPDFDocument } from "@/lib/book-reader-helpers";
import { createContext, useContext, useEffect, useState } from "react";

interface BookReaderProviderProps {
  children: React.ReactNode;
}

export type BookReaderData = {};

type BookReaderContextType = {};

export const BookReaderContext = createContext<BookReaderContextType>({});

const BookReaderProvider: React.FC<BookReaderProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    const getDocument = async () => {
      const fileType = await getFileExtensionFromUrl(
        "/assets/pdf/python-basics-sample-chapters.pdf"
      );
      console.log("FILE EXTENSION", fileType);
      if (fileType == ".pdf") {
      }
      const pdfDocument = await getPDFDocument(
        "/assets/pdf/python-basics-sample-chapters.pdf"
      );
      console.log("THE DOCUMENT", pdfDocument);
    };
    getDocument();
  }, []);
  return (
    <BookReaderContext.Provider value={{}}>
      {children}
    </BookReaderContext.Provider>
  );
};

export const useBookReader = () => {
  const context = useContext(BookReaderContext);
  if (!context) {
    throw new Error(
      "useBookReader must be used within the bookreader provider"
    );
  }
  return context;
};

export default BookReaderProvider;
