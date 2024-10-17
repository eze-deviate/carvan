import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  useState,
} from "react";

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
};
const TestCarousel = ({ title, children }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4;

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < books.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isVisible = (index: number) =>
    index >= currentIndex - 1 && index < currentIndex + visibleItems + 1;
  return (
    <div className={`relative w-full `}>
      {title && (
        <div className="flex justify-between ">
          <h2>{title}</h2>
          <p>See all</p>
        </div>
      )}

      <div className="flex items-center">
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrevClick}
            className="absolute left-0 p-2 bg-gray-500 text-white rounded-full z-10 hover:bg-gray-700"
          >
            &#9664;
          </button>
        )}
        <div className="flex overflow-hidden">
          <div
            className="flex transform transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {Children.map(children, (child, index) =>
              isVisible(index) && isValidElement(child) ? (
                <div
                  className={`flex-shrink-0 w-[${
                    1 / visibleItems
                  }%] text-center border border-gray-200 bg-gray-900`}
                  key={index}
                >
                  {cloneElement(child as ReactElement, {
                    className: "h-64 w-full object-cover mb-4", // Apply additional styles if necessary
                  })}
                </div>
              ) : (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/4 p-4"
                >
                  {/* Placeholder div to maintain structure */}
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Arrow */}
        {currentIndex < books.length - visibleItems && (
          <button
            onClick={handleNextClick}
            className="absolute right-0 p-2 bg-gray-500 text-white rounded-full z-10 hover:bg-gray-700"
          >
            &#9654;
          </button>
        )}
      </div>
    </div>
  );
};

export default TestCarousel;
