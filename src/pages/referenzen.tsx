import { ReferenceCard } from "../components/reference-card";
import { Heading1 } from "../typography/heading1";

export default function Referenzen() {
  return (
    <>
      <Heading1>UNSERE REFERENZEN SIND GOLD WERT</Heading1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ReferenceCard
          imgSrc={"/images/centurion.jpg"}
          title={"Centurion Baustelle"}
          link="https://centurion-towerhotel.ch/"
        ></ReferenceCard>
        <ReferenceCard
          imgSrc={"/images/neuwiesen-center-winti.jpg"}
          title={"Neuwiesen Center Winterthur"}
          link="https://neuwiesen.ch/"
        />
        <ReferenceCard
          imgSrc={"/images/swiss-ice-hockey.jpg"}
          title={"Swiss Ice Hockey"}
          link="https://www.sihf.ch/de/"
        />
        <ReferenceCard
          imgSrc={"/images/fc-winterthur.png"}
          title={"FC Winterthur"}
          link="https://fcwinterthur.ch/"
          contain
        />
      </div>
    </>
  );
}
