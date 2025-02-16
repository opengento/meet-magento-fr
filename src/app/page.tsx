"use client";

import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Place from "@/components/Place/Place";
import Faq from "@/components/Faq/Faq";
import SponsorList from "@/components/SponsorList/SponsorList";
import Container from "@/layouts/Container";
import Hero from "@/components/Hero/Hero";
import Speakers from "@/components/Speakers/Speakers";
import Program from "@/components/Program/Program";
import useDataProvider from "@/hooks/useDataProvider";
import Typography from "@/components/Typography/Typography";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation(["common"]);
  const dataProvider = useDataProvider();

  return (
    <div className="relative -top-[104px] left-0">
      <Hero />
      <div id="programs">
        <Program />
      </div>
      <div id="speakers">
        <Speakers data={dataProvider.useSpeakers()} />
      </div>
      <div id="sponsors">
        <SponsorList items={dataProvider.useSponsors()} />
      </div>
      <Container size="large">
        <div className="content-media-sections flex flex-col gap-12 py-12">
          <div id="faq">
            <ContentMedia
              imageUrl="/images/media/faq.jpg"
              imagePosition="right"
              imageWidth="40%"
              title="Besoin d'aide ?"
              titleUnderlineColor="purple-100"
            >
              <Faq display="list" limit={5} />
              <Typography
                variant="small"
                color="dark"
                weight="normal"
                className="mt-6"
              >
                Pour toute autre question, consultez notre{" "}
                <Link href={t("common:faqUrl")} className="underline">
                  {t("common:faqLabel")}
                </Link>{" "}
                ou écrivez-nous via le{" "}
                <Link href={t("common:contactUrl")} className="underline">
                  {t("common:contactLabel")}
                </Link>
                .
              </Typography>
            </ContentMedia>
          </div>
          <div id="place">
            <ContentMedia
              imageUrl="/images/media/etoile_business_center.jpeg"
              imagePosition="left"
              imageWidth="40%"
            >
              <Place place={dataProvider.usePlace()} />
            </ContentMedia>
          </div>
        </div>
      </Container>
    </div>
  );
}
