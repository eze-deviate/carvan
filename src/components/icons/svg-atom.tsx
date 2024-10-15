// components/SVGAtom.tsx
import { cn } from "@/lib/utils";
import React, { Suspense, lazy } from "react";

type Props = {
  iconName: string; // The name of the SVG file without the extension
  width?: number;
  height?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
};

// Create a function to dynamically import the SVG as a component
const importSvg = (iconName: string) => {
  // return lazy(() => import(`/assets/svgs/${iconName}.svg`));
  return lazy(() => import(`@public/assets/svgs/${iconName}.svg`));
};

const SVGAtom: React.FC<Props> = ({
  iconName,
  width,
  height,
  onClick,
  style,
  className,
}) => {
  const SvgIcon = importSvg(iconName); // Import the SVG component

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SvgIcon
        width={width}
        height={height}
        onClick={onClick}
        style={style}
        className={cn("h-8 w-15", className)}
      />
    </Suspense>
  );
};

export default React.memo(SVGAtom);
