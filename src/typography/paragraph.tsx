import React, { FC } from "react";

type Props = {
  className?: string;
};

export const Paragraph: FC<Props> = ({ children, className }) => (
  <p className={`text-darkblue font-normal ${className}`}>{children}</p>
);
