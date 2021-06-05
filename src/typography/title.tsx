import React, { FC } from "react";

type Props = {
  className?: string;
};

export const Title: FC<Props> = ({ children, className }) => (
  <p className={`text-md lg:text-lg text-darkblue font-bold ${className}`}>
    {children}
  </p>
);
