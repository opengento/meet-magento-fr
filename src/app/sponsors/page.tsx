'use client';

import Typography from "@/components/Typography/Typography";
import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Container from "@/layouts/Container";
import { useTranslation } from "react-i18next";
import useDataProvider from "@/hooks/useDataProvider";
import Push from "@/layouts/Push/Push";
import SponsorListByType from "@/components/SponsorList/SponsorListByType";

export default function Page() {
  const { t } = useTranslation(['sponsors']);
  const dataProvider = useDataProvider();
  const sponsors = dataProvider.useSponsors()

  return (
    <Container className="flex flex-col gap-8 my-8">
      <ContentMedia>
        <Typography
          variant="h1"
          color="dark"
          weight="semibold"
          underlineColor="primary-100"
          className="mb-2"
        >
          {t('sponsors:title')}
        </Typography>
        <Typography
          color="dark"
          className="mb-8 whitespace-pre-wrap"
        >
          {t('sponsors:description')}
        </Typography>
      </ContentMedia>
      <SponsorListByType items={sponsors}/>
      <Push />
    </Container>
  );
}
