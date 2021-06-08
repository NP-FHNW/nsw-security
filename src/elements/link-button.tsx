import Link from "next/link";
import React, { FC } from "react";

type Props = {
  href: string;
  className?: string;
};

export const LinkButton: FC<Props> = ({ href, className = "", children }) => (
  <Link passHref href={href}>
    <a
      className={`inline-block text-darkblue shadow-md rounded-md transform translate-y-0 focus:shadow-none focus:translate-y-1 py-2 px-4 
    bg-gold hover:bg-goldDark transition-colors ${className}`}
    >
      {children}
    </a>
  </Link>
);
