import React, { FC, ReactElement } from "react";
import { LinkButton } from "../elements/link-button";

type Props = {
  icon: ReactElement;
  text: string;
  link: string;
  linkLabel: string;
};

export const IconCardSmall: FC<Props> = ({ icon, text, link, linkLabel }) => (
  <div className="inline-grid rounded border-2 border-gray-500 p-4">
    <div className="flex flex-col items-center gap-4">
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
