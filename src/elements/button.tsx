import React, { FC } from "react";

type Props = {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export const Button: FC<Props> = ({
  onClick,
  children,
  type = "button",
  className = "",
}) => (
  <button
    onClick={onClick}
    type={type}
    className={`text-darkblue shadow-md rounded-md py-2 px-4
    transform translate-y-0 focus:shadow-none focus:translate-y-1
    bg-gold hover:bg-goldDark transition-colors ${className}`}
  >
    {children}
  </button>
);
