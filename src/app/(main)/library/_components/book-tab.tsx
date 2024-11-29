import ResponsiveGrid from "@/components/layout/responsive-grid";
import React from "react";
import { useForm } from "react-hook-form";
import CurrentlyReadingCard from "./currently-reading-card";

type Props = {};

const BookTab = (props: Props) => {
  return (
    <div>
      <div>select</div>
      <div>
        <ResponsiveGrid>
          {Array(6)
            .fill(0)
            .map((item, idx) => (
              <CurrentlyReadingCard
                key={`book-tab-${idx}`}
                showProgress={Math.random() * (10 - 1) + 1 > 5}
              />
            ))}
        </ResponsiveGrid>
      </div>
    </div>
  );
};

export default BookTab;
