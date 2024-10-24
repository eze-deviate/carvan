import { cn } from "@/lib/utils";
import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  useState,
} from "react";
import LeftArrow from "@public/assets/svgs/left-arrow.svg";
import RightArrow from "@public/assets/svgs/right-arrow.svg";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { ui } from "@/constants";

const books = [
  {
    id: 1,
    title: "Bleeding Iris",
    author: "Steven Chisholm",
    price: "$1.25",
    oldPrice: "$5.00",
    rating: "4.8",
    reviews: "(125)",
    image: "https://path/to/bleeding-iris.jpg", // Replace with actual image path
  },
  {
    id: 2,
    title: "Dark Shadows",
    author: "Unknown",
    price: "$1.25",
    oldPrice: "$5.00",
    rating: "4.8",
    reviews: "(125)",
    image: "https://path/to/dark-shadows.jpg", // Replace with actual image path
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: "$1.25",
    oldPrice: "$5.00",
    rating: "4.8",
    reviews: "(125)",
    image: "https://path/to/project-hail-mary.jpg", // Replace with actual image path
  },
  {
    id: 4,
    title: "Walk Into The Shadow",
    author: "Unknown",
    price: "$1.25",
    oldPrice: "$5.00",
    rating: "4.8",
    reviews: "(125)",
    image: "https://path/to/walk-shadow.jpg", // Replace with actual image path
  },
  // Add more book objects if needed
];

type Props = React.PropsWithChildren & {
  title?: string;
  className?: string;
};

const CustomCarousel = ({ title, className, children }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4;

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < Children.count(children) - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isVisible = (index: number) =>
    index >= currentIndex && index < currentIndex + visibleItems;
  return (
    <div
      className={cn(
        `w-full flex flex-col items-stretch gap-y-5`,
        ui.layoutPadding,
        className
      )}
    >
      {title && (
        <div className="flex justify-between ">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-base text-brand-500 font-medium">See all</p>
        </div>
      )}

      <div className="flex relative">
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <CarouselArrow
            onClick={handlePrevClick}
            icon={<ArrowLeftIcon className="h-full w-full text-white" />}
            className="rounded-full -left-10"
          />
        )}
        <div className="w-full">
          <div className="overflow-hidden gap-x-8 flex w-full transition-transform duration-300">
            {Children.map(
              children,
              (child, index) =>
                isVisible(index) &&
                isValidElement(child) && (
                  <div
                    className={`flex-shrink-0 w-[${
                      100 / visibleItems
                    }%] text-center border border-gray-200 flex-1 rounded-lg`}
                    key={index}
                  >
                    {cloneElement(child as ReactElement, {})}
                  </div>
                )
            )}
          </div>
        </div>
        {/* Right Arrow */}
        {currentIndex < Children.count(children) - visibleItems && (
          <CarouselArrow
            onClick={handleNextClick}
            icon={<ArrowRightIcon className="h-full w-full text-white" />}
            className="rounded-full -right-10"
          />
        )}
      </div>
    </div>
  );
};

const CarouselArrow = ({
  icon,
  className,
  onClick,
}: {
  icon: any;
  className: string;
  onClick: () => void;
}) => {
  return (
    <span
      onClick={onClick}
      className={cn(
        " -translate-y-1/2 absolute top-1/2 p-2 bg-gray-500 h-9 w-9 flex items-center justify-center",
        className
      )}
    >
      {icon}
    </span>
  );
};
export default CustomCarousel;
