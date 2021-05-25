import React, { FC } from "react";

export const Heading3: FC = ({ children }) => (
  <h3 className="text-2xl lg:text-3xl text-darkblue font-bold mb-4">
    {children}
  </h3>
);
