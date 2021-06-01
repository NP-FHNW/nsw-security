import Link from "next/link";
import React, { FC } from "react";

type Props = {
  href: string;
  active?: boolean;
  onClick?: () => void;
  small?: boolean;
};

export const Navlink: FC<Props> = ({
  href,
  active = false,
  small = false,
  onClick,
  children,
}) => (
  <Link passHref href={href}>
    <a
      onClick={onClick}
      className={`${
        small ? "text-lg" : "text-2xl lg:text-xl"
      } hover:text-gold transition-colors ${
        active ? "text-gold" : "text-white"
      }`}
    >
      {children}
    </a>
  </Link>
);
