import { Heading1 } from "../typography/heading1";
import {Heading2} from "../typography/heading2";
import {IconCardBig} from "../components/icon-card-big";
import { HiStar, HiUsers, HiOutlineCube } from "react-icons/hi";
import {LinkButton} from "../elements/link-button";
import {Heading3} from "../typography/heading3";


export default function Angebote() {
  return (
    <div className="grid gap-10">
      <Heading2>Lassen Sie sich von unseren Angeboten überzeugen</Heading2>
        <div className="grid gap-16">
            <IconCardBig
                icon={<HiStar className="w-20 sm:w-30 md:w-40 lg:w-50 h-full bg-gray-200 rounded-full p-2"/>}
                button={<LinkButton href={"/kontakt"}>Offerte anfragen</LinkButton>}>
                <Heading3>Grossanlässe</Heading3>
                <p>
                    Die NSW spezialisierte sich in den letzten Jahren vor allem auf Grossanlässe. Als Sicherheitsverantwortliche der ZSC - Lions verfügen wir in diesem Bereich über grosse Erfahrung. Immer wieder geraten Grossveranstaltungen aufgrund von Ausschreitungen oder sonstigen negativen Ereignissen in die Schlagzeilen. Um dies zu vermeiden, braucht es ein umfangreiches Sicherheitskonzept welches wir mit unseren Kunden gemeinsam ausarbeiten, damit ihre Veranstaltung ein voller Erfolg wird.
                </p>
            </IconCardBig>
            <IconCardBig
                icon={<HiUsers className="w-20 sm:w-30 md:w-40 lg:w-50 h-full bg-gray-200 rounded-full p-2"/>}
                button={<LinkButton href={"/kontakt"}>Offerte anfragen</LinkButton>}>
                <Heading3>Kleinanlässe</Heading3>
                <p>
                    Kleinanlässe sind für uns Veranstaltungen mit einer Besucherzahl von bis zu 2000 Personen. Es ist nicht notwendig, ein gleich grosses Sicherheitsmanagement zu erstellen wie für Grossanlässe. In einem persönlichen Gespräch klären wir mit ihnen das Notwendige, damit Sie auch mit kleinem Budget eine maximale Sicherheitsleistung im Namen ihrer Veranstaltung bieten können. An Klein- und Grossanlässen umfasst das Einsatzgebiet der NSW Security - Services folgende Gebiete:
                    - Zutritts- und Eingangskontrollen - VIP- und Backstagesicherheit
                    - Personenschutz
                    - Innendienst
                    - Bühnengraben
                    - Objektschutz                </p>
            </IconCardBig>
            <IconCardBig
                icon={<HiOutlineCube className="w-20 sm:w-30 md:w-40 lg:w-50 h-full bg-gray-200 rounded-full p-2"/>}
                button={<LinkButton href={"/kontakt"}>Offerte anfragen</LinkButton>}>
                <Heading3>Baustellenservice</Heading3>
                <p>
                    Die NSW spezialisierte sich in den letzten Jahren vor allem auf Grossanlässe. Als Sicherheitsverantwortliche der ZSC - Lions verfügen wir in diesem Bereich über grosse Erfahrung. Immer wieder geraten Grossveranstaltungen aufgrund von Ausschreitungen oder sonstigen negativen Ereignissen in die Schlagzeilen. Um dies zu vermeiden, braucht es ein umfangreiches Sicherheitskonzept welches wir mit unseren Kunden gemeinsam ausarbeiten, damit ihre Veranstaltung ein voller Erfolg wird.                </p>
            </IconCardBig>
        </div>
    </div>
  );
}
