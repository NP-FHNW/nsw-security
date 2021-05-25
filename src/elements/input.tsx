import React, { FC } from "react";
import { Label } from "./label";

type Props = {
  id: string;
  className?: string;
  placeholder?: string;
  label?: string;
};

export const Input: FC<Props> = ({
  id,
  className = "",
  placeholder = "",
  label = "",
}) => (
  <div className={`flex flex-col w-full ${className}`}>
    {label && <Label forInput={id}>{label}</Label>}
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="border p-3 rounded-md focus:border-gold outline-none"
    />
  </div>
);
