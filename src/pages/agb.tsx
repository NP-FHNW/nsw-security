import { Image } from "../elements/image";
import { Heading1 } from "../typography/heading1";
import { Heading2 } from "../typography/heading2";
import { Paragraph } from "../typography/paragraph";

export default function AGB() {
  return (
    <div className="inline-grid">
      <div className="flex flex-col gap-10">
        <div>
          <Heading1>AGB</Heading1>
          <Paragraph>
            Der Auftraggeber / Veranstalter überträgt dem Beauftragten während
            der Dauer des Einsatzes das Hausrecht gemäss Art. 186 StGB. Der
            Beauftragte kann Personen jeglicher Art vom Areal verweisen ohne
            vorgängig den Auftraggeber / Veranstalter zu informieren. Der
            Beauftragte kann jederzeit ohne Einhaltung einer Kündigungsfrist den
            Auftrag kündigen, sollten sie zu gesetzwidrigen Aufgaben beauftragt
            werden. Der Beauftragte ist während der Veranstaltung
            bevollmächtigt, selbst über den Einsatz von Polizei und
            Rettungskräften zu entscheiden.
          </Paragraph>
        </div>
        <div>
          <Heading2>Zahlungskonditionen</Heading2>
          <Paragraph>
            Grundsätzlich gilt: Gegen Rechnung innert 20 Tagen. Wir behalten uns
            vor: Bei Partyveranstaltungen und einmaligen Aufträgen in Bar am
            Ende der Veranstaltung einzuziehen. Bei Grossaufträgen deren
            Auftragsumme pro Tag SFr. 8´000.00 übersteigt, einen Kostenvorschuss
            in Rechnung zu stellen. Es wird unabhängig der Offerte nur die
            effektive Einsatzzeit verrechnet, angefangene ¼ Stunden werden
            aufgerundet Der Auftraggeber / Veranstalter muss für die Verpflegung
            des Sicherheitspersonales aufkommen.
          </Paragraph>
        </div>
        <div>
          <Heading2>Sonstiges</Heading2>
          <Paragraph>
            Eingetragen im Handelsregister des Kantons Zürich Firmennummer CH
            -020.1.039.447-9 Mehrwertsteuernummer. 533 264 Arbeitsverträge nach
            Allgemeinverbindlicher GAV der privaten
            Sicherheitsdienstleistungsbranche Betriebshaftpflicht bei der
            Schweizerischen Mobiliar über 10 Mio. Sfr. UVG bei der
            Schweizerischen Mobiliar SVA Zürich
          </Paragraph>
        </div>
        <div>
          <Heading2>Zusätzliche Bewilligungen</Heading2>
          <Paragraph>
            Bewilligungspflichtigen Tätigkeit im Bereich der privaten
            Sicherheitsdienste im Kt. Aargau Ausübung von gewerbsmässigen
            Bewachungsaufträgen im Kt. Luzern Private Polizeiähnliche
            Tätigkeiten des Kt. Thurgau Die Ausübung von
            Sicherheitsdienstleistungen im Kt. St. Gallen
          </Paragraph>
        </div>
        <div>
          <Heading2>Mitgliedschaften</Heading2>
          <div className="flex flex-col md:flex-row lg:flex-row gap-12">
            <Image
              src={"/images/vosu.png"}
              height="md:h-32 lg:h-32"
              alt={"Verband Ostschweizerischer Sicherheitsunternehmen VOSU"}
            />
            <Image
              src={"/images/vssu.jpg"}
              height="md:h-32 lg:h-32"
              alt={
                "Verband Schweizerischer Sicherheitsdienstleistungs-​Unternehmen (VSSU)"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
