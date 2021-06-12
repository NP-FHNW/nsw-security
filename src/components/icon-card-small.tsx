import React, { FC, ReactElement } from "react";
import { LinkButton } from "../elements/link-button";

type Props = {
  icon: ReactElement;
  text: string;
  link: string;
  linkLabel: string;
  className?: string;
};

export const IconCardSmall: FC<Props> = ({ icon, text, link, linkLabel , className}) => (
  <div className={`inline-grid rounded border-2 border-gray-300 p-6 ${className}`}>
    <div className="flex flex-col items-center gap-6  m-auto">
      <div className="flex-auto">{icon}</div>
      <div className="flex-auto">
        <h4>{text}</h4>
      </div>
      <div className="flex-auto">
        <LinkButton href={link}>{linkLabel}</LinkButton>
      </div>
    </div>
  </div>
);
