import React, { FC } from "react";

type Props = {
  imgSrc: string;
  imgDescription?: string;
};

export const ImageTeaser: FC<Props> = ({
  children,
  imgSrc,
  imgDescription = "",
}) => (
  <div className="grid grid-flow-row gap-4">
    <img src={imgSrc} alt={imgDescription} />
    <div>{children}</div>
  </div>
);
