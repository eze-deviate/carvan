import { cn } from "@/lib/utils";
import React, { cloneElement, isValidElement, ReactElement } from "react";
import { useMediaQuery } from "react-responsive";
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
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return (
    <div className={cn(``, className)} {...otherProps}>
      {title && (
        <div className="w-full flex justify-between items-center mb-6">
          <div className="text-2xl font-semibold text-gray-900">{title}</div>
          {seeAll && <p>See all</p>}
        </div>
      )}

      <div className={cn("w-full flex flex-wrap gap-4", {})}>
        {React.Children.map(
          children,
          (child, index) =>
            isValidElement(child) && (
              <div
                className={cn(
                  "flex-shrink-0 w-full  text-center border border-gray-200 gap-3",
                  {
                    "lg-screen": isDesktop,
                    "tablet-screen": isTablet,
                  },
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
