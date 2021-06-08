import { IconCardSmall } from "../components/icon-card-small";
import { ImageCard } from "../components/image-card";
import { StarIcon } from "../elements/icons/star-icon";
import { LinkButton } from "../elements/link-button";
import { Heading1 } from "../typography/heading1";

export default function Home() {
  return (
    <div>
      <Heading1>Welcome to NSW - next try</Heading1>

      <ImageCard
        imgSrc="/images/centurion.jpg"
        title="Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus enim, mollis ac dictum in, pellentesque a ex. Ut nibh urna, lacinia eget malesuada in, posuere ac odio. Curabitur lacus nulla, egestas non aliquam vitae, convallis id elit. Vivamus efficitur a mauris non bibendum. Donec auctor semper neque."
      >
        <LinkButton href="/angebote" className="mt-4">
          Zu den Angeboten
        </LinkButton>
      </ImageCard>
      <IconCardSmall
        icon={<StarIcon width={48} height={48} />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        link="/faq"
        linkLabel="FAQ"
      />
    </div>
  );
}
