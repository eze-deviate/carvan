import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DoubleArrowDownIcon, DoubleArrowUpIcon } from "@radix-ui/react-icons";

type Props = {
  description: string;
};

const BookDescription = (props: Props) => {
  const { description } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleExpansion = () => {
    if (typeof window !== undefined && containerRef?.current) {
      if (isExpanded)
        containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="relative transition-height duration-500 ease-in-out"
      ref={containerRef}
    >
      <h3 className="text-lg font-semibold text-gray-900 ">Description</h3>
      <p className={cn("text-justify ", { "line-clamp-4": !isExpanded })}>
        {description}
      </p>

      <div
        className={cn(
          "absolute -bottom-7 left-0 right-0 h-24  flex justify-start items-end",
          {
            "bg-gradient-to-t from-white to-transparent bottom-0": !isExpanded,
          }
        )}
      >
        <Button
          className="shadow-none bg-transparent text-gray-800 gap-2 hover:bg-gray-25 hover:opacity-75 p-1"
          onClick={toggleExpansion}
        >
          {isExpanded ? <DoubleArrowUpIcon /> : <DoubleArrowDownIcon />}
          {isExpanded ? "Collapse" : "show more"}
        </Button>
      </div>
    </div>
  );
};

export default BookDescription;
