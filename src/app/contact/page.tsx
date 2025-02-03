'use client';

import Typography from "@/components/Typography/Typography";
import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Container from "@/layouts/Container";
import { useTranslation } from "react-i18next";
import Push from "@/layouts/Push/Push";
import Faq from "@/components/Faq/Faq";

export default function Page() {
  const { t } = useTranslation(['faq']);

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
          {t('faq:title')}
        </Typography>
        <Typography
          color="dark"
          className="mb-8"
        >
          {t('faq:description')}
        </Typography>
      </ContentMedia>
      <div className="bg-white rounded-xl p-4 md:p-8">
        <Typography
          variant="h2"
          color="dark"
          weight="semibold"
          underlineColor="primary-100"
          className="mb-6"
        >
          {t('faq:faq')}
        </Typography>
        <Faq display="grid" />
      </div>
      <Push />
    </Container>
  );
}
