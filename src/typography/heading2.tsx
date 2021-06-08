import React, { FC } from "react";

export const Heading2: FC = ({ children }) => (
  <h2 className="text-3xl lg:text-4xl text-darkblue font-bold mt-8 mb-6">
    {children}
  </h2>
);
