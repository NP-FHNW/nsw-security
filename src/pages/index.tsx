import { ImageCard } from "../components/image-card";
import { Image } from "../elements/image";
import { LinkButton } from "../elements/link-button";
import { Heading1 } from "../typography/heading1";

export default function Home() {
  return (
    <div>
      <Heading1>Welcome to NSW - next try</Heading1>
      <p> text</p>
      <ImageCard imgSrc="/images/centurion.jpg" reverse={false}/>

    </div>
  );
}
