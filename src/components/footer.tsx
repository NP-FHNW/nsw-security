import { useRouter } from "next/router";
import React from "react";
import { Navlink } from "../elements/navlink";
import { AGB, IMPRESSUM, routeIsActive } from "../routing/routes";

export const Footer = () => {
  const router = useRouter();

  return (
    <footer className="w-full bg-darkblue text-white font-light">
      <div className="max-w-5xl flex flex-row flex-wrap gap-6 lg:gap-0 justify-between items-start md:items-center mx-auto p-8">
        <div className="w-full sm:w-auto">
          <p>NSW Security Services</p>
          <p>Postfach 3214</p>
          <p>8404 Winterthur</p>
        </div>
        <div className="w-full sm:w-auto">
          <p>Tel: +41 52 242 46 59</p>
          <p>Fax: +41 52 242 46 55</p>
          <a
            className="transition-colors hover:text-gold"
            href="mailto:kontakt@nsw.ch"
          >
            kontakt@nsw.ch
          </a>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-auto md:text-right">
          <Navlink
            href={IMPRESSUM}
            active={routeIsActive(router, IMPRESSUM)}
            small
          >
            Impressum
          </Navlink>
          <Navlink href={AGB} active={routeIsActive(router, AGB)} small>
            AGB
          </Navlink>
        </div>
      </div>
    </footer>
  );
};
