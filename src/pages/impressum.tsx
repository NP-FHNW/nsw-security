import { Heading1 } from "../typography/heading1";
import { Heading3 } from "../typography/heading3";

export default function Impressum() {
  return (
    <div>
      <Heading1>Impressum</Heading1>
      <Heading3>NSW Security-Services</Heading3>
      <div className="flex flex-col">
        <span>NSW Security-Services</span>
        <span>Postfach 3214</span>
        <span>8404 Winterthur</span>
      </div>
      <div className="mt-8">
        <span className="font-bold">E-Mail </span>
        <a
          className="transition-colors hover:text-gold"
          href="mailto:kontakt@nsw.ch"
        >
          kontakt@nsw.ch
        </a>
      </div>
      <div className="grid grid-flow-row gap-2 mt-8">
        <div>
          <span className="font-bold">Telefon</span>
          <span> +41 52 242 46 59</span>
        </div>
        <div>
          <span className="font-bold">Mobile</span>
          <span> +41 79 443 10 05</span>
        </div>
        <div>
          <span className="font-bold">Fax</span>
          <span> +41 52 242 46 55</span>
        </div>
      </div>
    </div>
  );
}
