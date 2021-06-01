import React, { FC } from "react";

type Props = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  className?: string;
};

export const Image: FC<Props> = ({
  src,
  alt = "",
  width = "",
  height = "",
  className = "",
}) => (
  <img
    src={src}
    alt={alt}
    className={`${width ? width : "max-w-full"} ${
      height ? height : "h-auto"
    } ${className}`}
  />
);
