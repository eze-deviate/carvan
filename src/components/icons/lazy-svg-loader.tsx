// components/LazySvgLoader.tsx
import React from 'react';

type LazySvgLoaderProps = {
  SvgComponent: React.LazyExoticComponent<React.FC<any>>; // Use LazyExoticComponent for lazy-loaded components
  width?: number;
  height?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
};

const LazySvgLoader: React.FC<LazySvgLoaderProps> = ({
  SvgComponent,
  width,
  height,
  onClick,
  style,
  className,
}) => {
  return (
    <SvgComponent
      width={width}
      height={height}
      onClick={onClick}
      style={style}
      className={className}
    />
  );
};

export default React.memo(LazySvgLoader);
