import React, { FC } from "react";

export const Heading1: FC = ({ children }) => (
  <h1 className="text-4xl lg:text-5xl text-darkblue font-bold mb-8">
    {children}
  </h1>
);
