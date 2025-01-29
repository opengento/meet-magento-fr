"use client";

import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Place from "@/components/Place/Place";
import Faq from "@/components/Faq/Faq";
import SponsorList from "@/components/SponsorList/SponsorList";
import Container from "@/layouts/Container";
import Hero from "@/components/Hero/Hero";
import Speakers from "@/components/Speakers/Speakers";
import { SpeakersProps } from "@/components/Speakers/SpeakersProps";
import { SponsorProps } from "@/components/SponsorList/Sponsor/Sponsor.types";
import { PlaceDataProps } from "@/components/Place/PlaceProps";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation(['speakers', 'sponsors', 'place']);
  const speakers: SpeakersProps = t('speakers:data', { returnObjects: true });
  const sponsors: SponsorProps[] = t('sponsors:data', { returnObjects: true });
  const place: PlaceDataProps = t('place:data', { returnObjects: true });

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
