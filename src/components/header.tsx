import Hamburger from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { Navlink } from "../elements/navlink";
import {
  ANGEBOTE,
  KONTAKT,
  REFERENZEN,
  routeIsActive,
} from "../routing/routes";

type Props = {
  className: string;
  close?: () => void;
};
const NavBase: FC<Props> = ({ className, close }) => {
  const router = useRouter();

  return (
    <nav className={className}>
      <Navlink
        active={routeIsActive(router, ANGEBOTE)}
        href={ANGEBOTE}
        onClick={close}
      >
        Angebote
      </Navlink>
      <Navlink
        active={routeIsActive(router, REFERENZEN)}
        href={REFERENZEN}
        onClick={close}
      >
        Referenzen
      </Navlink>
      <Navlink
        active={routeIsActive(router, KONTAKT)}
        href={KONTAKT}
        onClick={close}
      >
        Kontakt
      </Navlink>
    </nav>
  );
};

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full bg-darkblue">
      <div className="flex justify-between max-w-5xl mx-auto p-6 lg:py-6 lg:px-8">
        <Link href="/">
          <a>
            <span className="text-5xl font-black text-gold transition-opacity hover:opacity-80">
              NSW
            </span>
          </a>
        </Link>
        <NavBase className="hidden lg:flex items-center gap-8" />
        <div
          className={`${
            isOpen ? "fixed top-6 right-6" : "block"
          } block lg:hidden z-20`}
        >
          <Hamburger
            toggled={isOpen}
            toggle={() => setOpen(!isOpen)}
            color="white"
            label="Open Menu"
            rounded
          />
        </div>
        <NavBase
          className={`flex lg:hidden flex-col transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform ease-in-out duration-500 fixed top-0 right-0 w-full md:w-1/2 h-screen items-center gap-8 pt-24 bg-darkblue z-10`}
          close={() => setOpen(false)}
        />
      </div>
    </div>
  );
};
