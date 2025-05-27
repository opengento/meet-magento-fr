"use client";

import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Faq from "@/components/Faq/Faq";
import SponsorList from "@/components/SponsorList/SponsorList";
import Container from "@/layouts/Container";
import Speakers from "@/components/Speakers/Speakers";
import Program from "@/components/Program/Program";
import useDataProvider from "@/hooks/useDataProvider";
import Typography from "@/components/Typography/Typography";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Merchants from "@/components/Merchants/Merchants";
import HeroWaitingNext from "@/components/HeroWaitingNext/HeroWaitingNext";
import Hero from "@/components/Hero/Hero";
export default function Home() {
  const { t } = useTranslation(["common", "edition"]);
  const dataProvider = useDataProvider();

  return (
    <div className="relative -top-[104px] left-0">
      {t("edition:isWaitingNextEdition") ? (
        <HeroWaitingNext />
      ) : (
        <Hero />
      )}
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
        <Merchants />
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
        </div>
      </Container>
    </div>
  );
}
