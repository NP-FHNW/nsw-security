import React, { FC } from "react";
import { Heading3 } from "../typography/heading3";

type Props = {
  imgSrc: string;
  title: string;
  link: string;
  className?: string;
  contain?: boolean;
};

export const ReferenceCard: FC<Props> = ({
  imgSrc,
  title,
  link,
  className = "",
  contain = false,
}) => (
  <div className={`max-w-full ${className}`}>
    <a
      href={link}
      className="flex flex-col gap-4 opacity-100 hover:opacity-60 transition-opacity"
    >
      <div
        className={`h-52 sm:h-80 md:h-64 bg-center rounded-md ${
          contain ? "bg-contain bg-no-repeat" : "bg-cover "
        } `}
        style={{ backgroundImage: "url(" + imgSrc + ")" }}
      ></div>
      <Heading3>{title}</Heading3>
    </a>
  </div>
);
