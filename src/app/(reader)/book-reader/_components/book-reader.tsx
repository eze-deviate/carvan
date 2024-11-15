import { useBookReaderStore } from "@/stores/book-reader";
import React from "react";
import PDFReaderDist from "./pdf-reader-dist";
import EpubReader from "./epub-reader";

type Props = {};

const BookReader = (props: Props) => {
  const { book } = useBookReaderStore();
  return (
    <div>{book.fileType == ".pdf" ? <PDFReaderDist /> : <EpubReader />}</div>
  );
};

export default BookReader;
