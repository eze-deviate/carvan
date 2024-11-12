import { cn } from "@/lib/utils";
import React, { cloneElement, isValidElement, ReactElement } from "react";

type Props = React.PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    containerClassName?: string;
    seeAll?: (param?: any) => void | undefined;
  };

const ResponsiveGrid = ({
  children,
  containerClassName,
  title,
  seeAll = undefined,
  ...props
}: Props) => {
  const { className, ...otherProps } = props;
  return (
    <div className={cn(``, className)} {...otherProps}>
      {title && (
        <div className="w-full flex justify-between items-center mb-6">
          <div className="text-2xl font-semibold text-gray-900">{title}</div>
          {seeAll && <p>See all</p>}
        </div>
      )}

      <div className="w-full flex flex-wrap">
        {React.Children.map(
          children,
          (child, index) =>
            isValidElement(child) && (
              <div
                className={cn(
                  "flex-shrink-0 w-full sm:w-1/3 lg:w-1/4  text-center border border-gray-200 ",
                  containerClassName
                )}
                key={index}
              >
                {cloneElement(child as ReactElement, {})}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ResponsiveGrid;
