import React, { FC } from "react";

export const Heading3: FC = ({ children }) => (
  <h3 className="text-xl lg:text-2xl text-darkblue font-bold mb-4">
    {children}
  </h3>
);
