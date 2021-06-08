import React, { FC } from "react";
import { Image } from "../elements/image";
import { Heading3 } from "../typography/heading3";
import { Paragraph } from "../typography/paragraph";

type Props = {
  imgSrc: string;
  title: string;
  text: string;
  reverse?: boolean;
  imgDescription?: string;
};

function getClassNames(reverse) {
  if (reverse) {
    return "flex-row-reverse";
  }

  return "flex-row";
}

export const ImageCard: FC<Props> = ({
  imgSrc,
  title,
  text,
  children,
  reverse = false,
  imgDescription = "",
}) => (
  <div
    className={`flex items-center gap-8 flex-wrap md:flex-nowrap mx-auto lg:mx-0 ${getClassNames(
      reverse
    )}`}
  >
    <Image width="w-full md:w-1/2" src={imgSrc} alt={imgDescription} />
    <div className="flex flex-col items-start">
      <Heading3>{title}</Heading3>
      <Paragraph>{text}</Paragraph>
      {children}
    </div>
  </div>
);
