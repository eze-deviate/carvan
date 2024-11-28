import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import DescriptionTab from "./description-tab";
import ReviewsTab from "./reviews-tab";
import TabButton from "./tab-button";
import { dummyDescription } from "@/constants/dummy-data";
import { BookType } from "@/types";

type Props = {
  book: BookType;
};

const BookDetailsTab = (props: Props) => {
  const { book } = props;
  return (
    <Tabs defaultValue="description" className="w-full ">
      <TabsList className="bg-transparent border-b border-b-gray-200 w-full justify-start">
        <TabButton value="description" text="Description" />
        <TabButton value="review" text="Reviews" />
      </TabsList>
      <TabsContent value="description" className="mt-12">
        <DescriptionTab description={dummyDescription} />
      </TabsContent>
      <TabsContent value="review" className="mt-12">
        <ReviewsTab reviews={book.reviews} />
      </TabsContent>
    </Tabs>
  );
};

export default BookDetailsTab;
