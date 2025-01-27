import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Place from "@/components/Place/Place";
import Faq from "@/components/Faq/Faq";
import { SponsorProps } from "@/components/SponsorList/Sponsor/Sponsor.types";
import SponsorList from "@/components/SponsorList/SponsorList";
import Container from "@/layouts/Container";
import Hero from "@/components/Hero/Hero";
import Speakers from "@/components/Speakers/Speakers";

export default function Home() {
  const sponsors: SponsorProps[] = [
    {
      type: "platinum",
      name: "Adobe",
      logoSrc: "adobe.svg",
    },
    {
      type: "gold",
      name: "Dn'D",
      logoSrc: "dnd.svg",
    },
    {
      type: "gold",
      name: "Hyvä",
      logoSrc: "hyva.svg",
    },
    {
      type: "gold",
      name: "Ati4 Group",
      logoSrc: "ati4group.svg",
    },
    {
      type: "gold",
      name: "Platform.sh",
      logoSrc: "platformsh.svg",
    },
    {
      type: "gold",
      name: "Blackbird",
      logoSrc: "blackbird.svg",
    },
    {
      type: "gold",
      name: "DATASOLUTION",
      logoSrc: "datasolution.svg",
    },
    {
      type: "silver",
      name: "PH2M",
      logoSrc: "ph2m.svg",
    },
    {
      type: "silver",
      name: "Sensefuel",
      logoSrc: "sensefuel.svg",
    },
    {
      type: "silver",
      name: "PayPlug",
      logoSrc: "payplug.svg",
    },
    {
      type: "silver",
      name: "Mollie",
      logoSrc: "mollie.svg",
    },
    {
      type: "silver",
      name: "Spiriit",
      logoSrc: "spiriit.svg",
    },
    {
      type: "silver",
      name: "Sutunam",
      logoSrc: "Sutunam.svg",
    },
    {
      type: "bronze",
      name: "Nosto",
      logoSrc: "nosto.svg",
    },
    {
      type: "bronze",
      name: "Socloz",
      logoSrc: "socloz.svg",
    },
    {
      type: "bronze",
      name: "Akeneo",
      logoSrc: "akeneo.svg",
    },
  ];

  return (
    <div className="">
      <Hero />
      <div id="speakers">
        <Speakers />
      </div>
      <div id="sponsors">
        <SponsorList items={sponsors} />
      </div>
      <Container size="large">
        <div className="content-media-sections flex flex-col gap-12 py-12">
          <div id="faq">
            <ContentMedia
              imageUrl="/images/faq.png"
              imagePosition="right"
              imageWidth="40%"
              title="Besoin d'aide ?"
              titleUnderlineColor="purple-100"
            >
              <Faq />
            </ContentMedia>
          </div>
          <div id="place">
            <ContentMedia
              imageUrl="/images/etoile_business_center.jpeg"
              imagePosition="left"
              imageWidth="40%"
            >
              <Place />
            </ContentMedia>
          </div>
        </div>
      </Container>
    </div>
  );
}
