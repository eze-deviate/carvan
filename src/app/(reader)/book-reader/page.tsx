import PdfReader from "@/components/reader/pdf-reader";
import React from "react";

type Props = {};

const BookReaderPage = (props: Props) => {
  return (
    <div>
      <PdfReader fileUrl="/assets/pdf/python-basics-sample-chapters.pdf" />
    </div>
  );
};

export default BookReaderPage;
