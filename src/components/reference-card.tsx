import React, { FC } from "react";
import { Image } from "../elements/image";
import { Title } from "../typography/title";

type Props = {
  imgSrc: string;
  title: string;
  link: string;
  className?: string;
  alt?: string;
};

export const ReferenceCard: FC<Props> = ({
  imgSrc,
  title,
  link,
  className = "",
  alt = "",
}) => (
  <div className={`max-w-full w-40 ${className}`}>
    <a
      href={link}
      className="flex flex-col text-center gap-4 opacity-100 hover:opacity-60 transition-opacity"
    >
      <Image src={imgSrc} alt={alt} />
      <Title>{title}</Title>
    </a>
  </div>
);
