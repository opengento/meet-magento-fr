import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Place from "@/components/Place/Place";
import Faq from "@/components/Faq/Faq";
import SponsorList from "@/components/SponsorList/SponsorList";
import Container from "@/layouts/Container";
import Hero from "@/components/Hero/Hero";
import Speakers from "@/components/Speakers/Speakers";
import { promises as fs } from 'fs';
import { SpeakersTypeProps } from "@/components/Speakers/SpeakersProps";
import { SponsorProps } from "@/components/SponsorList/Sponsor/Sponsor.types";
import { PlaceDataProps } from "@/components/Place/PlaceProps";

export default async function Home() {
  const speakers: SpeakersTypeProps = JSON.parse(await fs.readFile(process.cwd() + '/src/data/speakers.json', 'utf8'));
  const sponsors: SponsorProps[] = JSON.parse(await fs.readFile(process.cwd() + '/src/data/sponsors.json', 'utf8'));
  const place: PlaceDataProps = JSON.parse(await fs.readFile(process.cwd() + '/src/data/place.json', 'utf8'));

  return (
    <div className="relative -top-[104px] left-0">
      <Hero />
      <div id="speakers">
        <Speakers data={speakers} />
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
              <Place place={place} />
            </ContentMedia>
          </div>
        </div>
      </Container>
    </div>
  );
}
