import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/use-debounce";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Cross1Icon,
  Crosshair2Icon,
} from "@radix-ui/react-icons";
import React, { useEffect } from "react";

type Props = {
  handleInputChange: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setShowSearchInput: React.Dispatch<React.SetStateAction<boolean>>;
};

const PDFSearchInput = ({
  searchTerm,
  setSearchTerm,
  handleInputChange,
  setShowSearchInput,
}: Props) => {
  const debouncedQuery = useDebounce(searchTerm, 500);
  useEffect(() => {
    if (debouncedQuery) {
      handleInputChange();
    }
  }, [debouncedQuery]);
  return (
    <div className="absolute transition-all duration-75 top-10 right-3 flex items-center gap-2 bg-gray-300 rounded p-2">
      <Input onChange={(e) => setSearchTerm(e.target.value)} />
      <ChevronUpIcon className="cursor-pointer h-5 w-5" />
      <ChevronDownIcon className="cursor-pointer h-5 w-5" />
      <Cross1Icon
        className="cursor-pointer h-5 w-5"
        onClick={() => setShowSearchInput(false)}
      />
    </div>
  );
};

export default PDFSearchInput;
