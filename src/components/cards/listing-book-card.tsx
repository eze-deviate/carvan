import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  className: string;
  cover: string;
  title: string;
  author: string;
  price: number;
  rating: number;
  review: any;
};

const ListingBookCard = ({
  className,
  author,
  price,
  title,
  cover,
  rating,
  review,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className={cn("flex flex-col", className)}>
      <div>
        <Image width={100} height={100} src={cover} alt={title} />
      </div>
      <div className="flex flex-col">
        <p>{title}</p>
        <p>{`By ${author}`}</p>
        <div className="flex justify-between items-center">
          <span className="">{`$${price}`}</span>
          <span className="">{`$${rating}(${review})`}</span>
        </div>
        {hovered && <div></div>}
      </div>
    </div>
  );
};

export default ListingBookCard;
