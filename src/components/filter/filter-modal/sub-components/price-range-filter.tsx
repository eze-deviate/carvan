import { Button } from "@/components/ui/button";
import RangeSlider from "@/components/ui/range-slider";
import React, { useState } from "react";

type Props = {};

const PriceRangeFilter = (props: Props) => {
  const [values, setValues] = useState([20, 89]);
  const handleChange = (newValues: any) => {
    setValues(newValues);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h3 className="font-semibold text-lg text-gray-800">
          Price<span className="font-medium text-sm">(PKT)</span>
        </h3>
        <Button className="bg-white shadow-none font-semibold text-lg text-gray-800 border-none outline-none hover:bg-transparent">
          Apply
        </Button>
      </div>
      <RangeSlider onValueChange={handleChange} value={values} />
      <div className="flex gap-3 items-center">
        <div className="border border-gray-300 rounded-lg text-left py-3 px-12 w-[15rem]">
          {values[0]}
        </div>
        <div className="border-2 rounded border-gray-400 w-4"></div>
        <div className="border border-gray-300 rounded-lg text-left py-3 px-12 w-[15rem]">
          {values[1]}
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
