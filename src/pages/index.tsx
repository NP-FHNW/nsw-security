import { Image } from "../elements/image";
import { LinkButton } from "../elements/link-button";
import { Heading1 } from "../typography/heading1";

export default function Home() {
  return (
    <div>
      <Heading1>Welcome to NSW</Heading1>
      <Image
        src="images/centurion.jpg"
        alt="Centurion"
        height="h-72"
        className="my-8"
      />
      <LinkButton href="/angebote">Button</LinkButton>
    </div>
  );
}
