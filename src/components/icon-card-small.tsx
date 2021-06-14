import React, { FC, ReactElement } from "react";
import { LinkButton } from "../elements/link-button";
import { Title } from "../typography/title";

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
  <div
    className={`h-full inline-grid rounded-md shadow-lg p-8 hover:bg-gray-100 transition-colors ${className}`}
  >
    <a href={link} className="">
      <div className="flex flex-col items-center gap-6 m-auto text-center">
        <div>{icon}</div>
        <Title>{text}</Title>
        <LinkButton href={link}>{linkLabel}</LinkButton>
      </div>
    </a>
  </div>
);
