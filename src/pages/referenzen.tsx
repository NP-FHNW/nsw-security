import { ReferenceCard } from "../components/reference-card";
import { Heading1 } from "../typography/heading1";

export default function Referenzen() {
  return (
    <>
      <Heading1>UNSERE REFERENZEN SIND GOLD WERT</Heading1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20">
        <ReferenceCard
          imgSrc={"/images/centurion.jpg"}
          title={"Centurion Baustelle"}
          link="https://centurion-towerhotel.ch/"
        />
        <ReferenceCard
          imgSrc={"/images/zsc-logo.png"}
          title={"ZSC Lions (seit 2001)"}
          link="https://www.zsclions.ch/"
          contain
        />
        <ReferenceCard
          imgSrc={"/images/gck-logo.png"}
          title={"GCK  Lions (seit 2001)"}
          link="https://gck.zsclions.ch/"
          contain
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
        <ReferenceCard
          imgSrc={"/images/handball-schweiz.png"}
          title={"Handball Schweiz"}
          link="https://www.handball.ch/de/"
          contain
        />
        <ReferenceCard
          imgSrc={"/images/neuwiesen-center-winti.jpg"}
          title={"Neuwiesen Center Winterthur"}
          link="https://neuwiesen.ch/"
        />
        <ReferenceCard
          imgSrc={"/images/bp-logo.gif"}
          title={"b+p baurealisation ag"}
          link="https://www.bp-baurealisation.ch/"
          contain
        />
        <ReferenceCard
          imgSrc={"/images/oa-frauenfeld.png"}
          title={"Openair Frauenfeld"}
          link="https://www.openair-frauenfeld.ch/"
          contain
        ></ReferenceCard>
      </div>
    </>
  );
}
