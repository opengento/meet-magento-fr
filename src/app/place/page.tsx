'use client';

import Typography from "@/components/Typography/Typography";
import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Container from "@/layouts/Container";
import { useTranslation } from "react-i18next";
import Accommodation from "@/components/Place/Accommodation/Accommodation";
import useDataProvider from "@/hooks/useDataProvider";
import Access from "@/components/Place/Access/Access";
import Schedule from "@/components/Place/Schedule/Schedule";
import React from "react";
import PushWelcome from "@/layouts/Push/PushWelcome";

export default function Page() {
  const { t } = useTranslation(['place']);
  const dataProvider = useDataProvider();

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
          {t('place:title')}
        </Typography>
        <Typography
          color="dark"
          className="mb-8 whitespace-pre-wrap"
        >
          {t('place:description')}
        </Typography>
        <Schedule schedule={dataProvider.usePlaceSchedule()} />
      </ContentMedia>
      <ContentMedia
        imageUrl="/images/media/etoile_business_center.jpeg"
        imagePosition="right"
        imageWidth="50%"
      >
        <Access
          location={dataProvider.usePlace()}
          access={dataProvider.usePlaceAccess()}
        />
      </ContentMedia>
      <ContentMedia
        imageUrl="/images/media/accommodation.png"
        imagePosition="right"
        imageWidth="40%"
      >
        <Accommodation accomodation={dataProvider.useAccommodation()} />
      </ContentMedia>
      <PushWelcome />
    </Container>
  );
}
