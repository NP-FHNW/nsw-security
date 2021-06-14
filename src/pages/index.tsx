import { HiOutlineCube, HiStar, HiUsers } from "react-icons/hi";
import { IconCardSmall } from "../components/icon-card-small";
import { ImageCard } from "../components/image-card";
import { LinkButton } from "../elements/link-button";
import { Heading1 } from "../typography/heading1";
import { Heading2 } from "../typography/heading2";
import { Paragraph } from "../typography/paragraph";

export default function Home() {
  return (
    <>
      <Heading1>IHRE SICHERHEIT INTERESSIERT UNS MIT SICHERHEIT</Heading1>
      <div className="grid grid-rows gap-8 md:gap-16 lg:gap-20 items-center">
        <div className="grid grid-rows gap-8 md:gap-16 lg:gap-20">
          <ImageCard
            imgSrc={"/images/centurion.jpg"}
            title={"Centurion Baustelle Windisch"}
            text={
              "Während des Neubau des Centurion Tower in Windisch haben wir für Sicherheit gesorgt."
            }
            imgDescription={"Centurion Baustelle Windisch"}
          >
            <LinkButton className="my-4" href={"/Angebote"}>
              Angebote
            </LinkButton>
          </ImageCard>
          <ImageCard
            imgSrc={"/images/neuwiesen-center-winti.jpg"}
            title={"Neuwiesen Center Winterthur"}
            text={"Mit diesen Angeboten machen wir uns für Sie stark."}
            imgDescription={"Neuwiesen Center Winterthur"}
            reverse={true}
          >
            <LinkButton className="my-4" href={"/Angebote"}>
              Angebote
            </LinkButton>
          </ImageCard>
        </div>

        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 gap-8 md:gap-12 lg:gap-16 items-center">
          <IconCardSmall
            className="h-full"
            icon={
              <HiStar className="w-20 sm:w-30 md:w-35 lg:w-40 h-full bg-gray-200 rounded-full p-2" />
            }
            text={"Gross- und Kleinanlässe"}
            link={"/Angebote"}
            linkLabel={"Details"}
          />
          <IconCardSmall
            className="h-full"
            icon={
              <HiUsers className="w-20 sm:w-30 md:w-35 lg:w-40 h-full bg-gray-200 rounded-full p-2" />
            }
            text={"Begleit- und Personenschutz"}
            link={"/Angebote"}
            linkLabel={"Details"}
          />
          <IconCardSmall
            className="h-full"
            icon={
              <HiOutlineCube className="w-20 sm:w-30 md:w-35 lg:w-40 h-full bg-gray-200 rounded-full p-2" />
            }
            text={"Baustellenservice"}
            link={"/Angebote"}
            linkLabel={"Details"}
          />
        </div>
        <div className="inline-grid">
          <div className="flex flex-col items-center gap-4">
            <Heading2>Fragen?</Heading2>
            <Paragraph>Zögern Sie nicht uns zu kontaktieren</Paragraph>
            <LinkButton className="text-center" href={"/kontakt"}>
              Kontakt
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
}
