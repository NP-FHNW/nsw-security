import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Navlink } from "../elements/navlink";
import {
  ANGEBOTE,
  FAQ,
  KONTAKT,
  REFERENZEN,
  routeIsActive,
} from "../routing/routes";

export const Header = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-darkblue">
      <div className="flex justify-between max-w-5xl mx-auto py-6 px-8">
        <Link href="/">
          <a>
            <span className="text-5xl font-black text-gold transition-opacity hover:opacity-80">
              NSW
            </span>
          </a>
        </Link>
        <nav className="flex items-center gap-8">
          <Navlink active={routeIsActive(router, ANGEBOTE)} href={ANGEBOTE}>
            Angebote
          </Navlink>
          <Navlink active={routeIsActive(router, REFERENZEN)} href={REFERENZEN}>
            Referenzen
          </Navlink>
          <Navlink active={routeIsActive(router, FAQ)} href={FAQ}>
            FAQ
          </Navlink>
          <Navlink active={routeIsActive(router, KONTAKT)} href={KONTAKT}>
            Kontakt
          </Navlink>
        </nav>
      </div>
    </div>
  );
};
