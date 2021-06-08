import { ImageCard } from "../components/image-card";
import { LinkButton } from "../elements/link-button";
import { Heading1 } from "../typography/heading1";
import { HiStar, HiUsers, HiOutlineCube } from "react-icons/hi";
import {IconCardSmall} from "../components/icon-card-small";

export default function Home() {
  return (
    <div className="grid grid-rows gap-10 items-center">
        <Heading1>IHRE SICHERHEIT INTERESSIERT UNS MIT SICHERHEIT WIR MACHEN UNS STARK FÜR SIE</Heading1>
        <div className="grid grid-rows gap-12">
            <ImageCard
                imgSrc={"https://www.nsw.ch/wp-content/uploads/2018/06/n-medium2x-16x9-300x179.jpg"}
                title={"Centurion Baustelle in Windisch."}
                text={"Während des Neubau des Centurion Tower in Windisch haben wir für Sicherheit gesorgt."}
                imgDescription={"Centurion Baustelle Windisch"}>
                <LinkButton href={"/Angebote"}>Angebote</LinkButton>
            </ImageCard>
            <ImageCard
                imgSrc={"https://www.nsw.ch/wp-content/uploads/2018/07/IMG_0005a-300x225.jpg"}
                title={"Neuwiesen Center Winterthur."}
                text={"Mit diesen Angeboten machen wir uns für Sie stark."}
                imgDescription={"Neuwiesen Center Winterthur"}
                reverse={true}>
                <LinkButton href={"/Angebote"}>Angebote</LinkButton>
            </ImageCard>
        </div>
        <div className="grid grid-cols-3 gap-8 items-center">
            <IconCardSmall
                icon={<HiStar size={180} className="bg-gray-300 rounded-full p-2"/>}
                text={"Gross- und Kleinanlässe"}
                link={"/Angebote"}
                linkLabel={"Details"}/>
            <IconCardSmall
                icon={<HiUsers size={180} className="bg-gray-300 rounded-full p-2"/>}
                text={"Begleit- und Personenschutz"}
                link={"/Angebote"}
                linkLabel={"Details"}/>
            <IconCardSmall
                icon={<HiOutlineCube size={180} className="bg-gray-300 rounded-full p-2"/>}
                text={"Baustellenservice"}
                link={"/Angebote"}
                linkLabel={"Details"}/>
        </div>
        <div className="inline-grid">
            <div className="flex flex-col items-center gap-4">
                <h2 className="font-bold">Fragen?</h2>
                <p>Gerne beantworten wir alle Ihre Fragen:</p>
                <div className="grid grid-cols-2 gap-8">
                    <LinkButton href={"/faq"}>FAQ</LinkButton>
                    <LinkButton href={"/kontakt"}>Kontakt</LinkButton>
                </div>
            </div>
        </div>
    </div>
  );
}
