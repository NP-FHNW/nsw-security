import { IconCardSmall } from "../components/icon-card-small";
import { ImageCard } from "../components/image-card";
import { ImageTeaser } from "../components/image-teaser";
import { StarIcon } from "../elements/icons/star-icon";
import { LinkButton } from "../elements/link-button";
import { Heading1 } from "../typography/heading1";
import { Heading2 } from "../typography/heading2";
import { Heading3 } from "../typography/heading3";
import { Paragraph } from "../typography/paragraph";

export default function Home() {
  return (
    <div>
      <Heading1>Welcome to NSW</Heading1>

      <Heading2>IMAGE CARD</Heading2>
      <ImageCard
        imgSrc="/images/centurion.jpg"
        title="Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus enim, mollis ac dictum in, pellentesque a ex. Ut nibh urna, lacinia eget malesuada in, posuere ac odio. Curabitur lacus nulla, egestas non aliquam vitae, convallis id elit. Vivamus efficitur a mauris non bibendum. Donec auctor semper neque."
      >
        <LinkButton href="/angebote" className="mt-4">
          Zu den Angeboten
        </LinkButton>
      </ImageCard>

      <Heading2>ICON CARD</Heading2>
      <IconCardSmall
        icon={<StarIcon width={48} height={48} />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        link="/faq"
        linkLabel="FAQ"
      />

      <Heading2>IMAGE TEASER</Heading2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ImageTeaser imgSrc="/images/centurion.jpg">
          <Heading3>Teaser1</Heading3>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus
            enim, mollis ac dictum in
          </Paragraph>
        </ImageTeaser>
        <ImageTeaser imgSrc="/images/centurion.jpg">
          <Heading3>Teaser2</Heading3>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus
            enim, mollis ac dictum in
          </Paragraph>
        </ImageTeaser>
        <ImageTeaser imgSrc="/images/centurion.jpg">
          <Heading3>Teaser3</Heading3>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus
            enim, mollis ac dictum in
          </Paragraph>
        </ImageTeaser>
        <ImageTeaser imgSrc="/images/centurion.jpg">
          <Heading3>Teaser4</Heading3>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus
            enim, mollis ac dictum in
          </Paragraph>
        </ImageTeaser>
      </div>
    </div>
  );
}
