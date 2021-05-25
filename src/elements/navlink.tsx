import Link from "next/link";
import React, { FC } from "react";

type Props = {
  href: string;
  active?: boolean;
};

export const Navlink: FC<Props> = ({ href, active, children }) => (
  <Link passHref href={href}>
    <a
      className={`text-lg lg:text-xl hover:text-gold transition-colors ${
        active ? "text-gold" : "text-white"
      }`}
    >
      {children}
    </a>
  </Link>
);
