import React, { FC, ReactElement } from "react";
import { LinkButton } from "../elements/link-button";

type Props = {
  icon: ReactElement;
  text: string;
  link: string;
  linkLabel: string;
  className?: string;
};

export const IconCardSmall: FC<Props> = ({
  icon,
  text,
  link,
  linkLabel,
  className,
}) => (
  <a href={link} className="inline-grid">
    <div
      className={`h-full rounded-md shadow-lg p-8 hover:bg-gray-100 transition-colors ${className}`}
    >
      <div className="flex flex-col items-center gap-6 m-auto text-center">
        <div>{icon}</div>
        <h4>{text}</h4>
        <LinkButton href={link}>{linkLabel}</LinkButton>
      </div>
    </div>
  </a>
);
