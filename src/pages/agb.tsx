import {Heading1} from "../typography/heading1";
import {Image} from "../elements/image";
import {Heading2} from "../typography/heading2";

export default function AGB() {
    return (
        <div className="inline-grid">
            <div className="flex flex-col gap-10 items-center">
                <Heading2>AGB</Heading2>
                <p>
                    Allgemeine Geschäftbedingungen
                    Der Auftraggeber / Veranstalter überträgt dem Beauftragten während der Dauer des Einsatzes das Hausrecht
                    gemäss Art. 186 StGB.
                    Der Beauftragte kann Personen jeglicher Art vom Areal verweisen ohne vorgängig den Auftraggeber /
                    Veranstalter zu informieren.
                    Der Beauftragte kann jederzeit ohne Einhaltung einer Kündigungsfrist den Auftrag kündigen, sollten sie
                    zu gesetzwidrigen Aufgaben beauftragt werden.
                    Der Beauftragte ist während der Veranstaltung bevollmächtigt, selbst über den Einsatz von Polizei und
                    Rettungskräften zu entscheiden.
                </p>
                <Heading2>Zahlungskonditionen</Heading2>
                <p>
                    Grundsätzlich gilt: Gegen Rechnung innert 20 Tagen.
                    Wir behalten uns vor:
                    Bei Partyveranstaltungen und einmaligen Aufträgen in Bar am Ende der Veranstaltung einzuziehen.
                    Bei Grossaufträgen deren Auftragsumme pro Tag SFr. 8´000.00 übersteigt, einen Kostenvorschuss in Rechnung zu stellen.
                    Es wird unabhängig der Offerte nur die effektive Einsatzzeit verrechnet, angefangene ¼ Stunden werden aufgerundet
                    Der Auftraggeber / Veranstalter muss für die Verpflegung des Sicherheitspersonales aufkommen.
                </p>
                <Heading2>Sonstiges</Heading2>
                <p>
                    Eingetragen im Handelsregister des Kantons Zürich
                    Firmennummer CH -020.1.039.447-9
                    Mehrwertsteuernummer. 533 264
                    Arbeitsverträge nach Allgemeinverbindlicher GAV der privaten Sicherheitsdienstleistungsbranche
                    Betriebshaftpflicht bei der Schweizerischen Mobiliar über 10 Mio. Sfr.
                    UVG bei der Schweizerischen Mobiliar
                    SVA Zürich
                </p>
                <Heading2>Wir verfügen zusätzlich über eine Bewilligung für :</Heading2>
                <p>
                    Bewilligungspflichtigen Tätigkeit im Bereich der privaten Sicherheitsdienste im Kt. Aargau
                    Ausübung von gewerbsmässigen Bewachungsaufträgen im Kt. Luzern
                    Private Polizeiähnliche Tätigkeiten des Kt. Thurgau
                    Die Ausübung von Sicherheitsdienstleistungen im Kt. St. Gallen
                </p>
                <Heading2>Wir sind Mitglied bei :</Heading2>
                <div className="grid grid-cols-2 gap-8">
                    <Image src={"https://www.nsw.ch/wp-content/uploads/2018/06/vosu-150x145.png"} alt={"Verband Ostschweizerischer Sicherheitsunternehmen VOSU"}/>
                    <Image src={"https://www.nsw.ch/wp-content/uploads/2018/06/VSSU_icon-300x150.png"} alt={"Verband Schweizerischer Sicherheitsdienstleistungs-​Unternehmen (VSSU)"}/>
                </div>
            </div>
        </div>
    );
}
