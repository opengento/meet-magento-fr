'use client';

import Typography from "@/components/Typography/Typography";
import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Container from "@/layouts/Container";
import {useTranslation} from "react-i18next";
import Image from "next/image";
import React from "react";

export default function Page() {
  const { t } = useTranslation(['staff']);

  const renderImages = () => {
    const images = t('staff:images', { returnObjects: true });
    if (Array.isArray(images)) {
      return (
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {images.map((src, index) => (
            <Image key={index}
                   src={src}
                   alt=""
                   height={438}
                   width={582}
                   className="rounded-xl object-cover max-h-[438px]"
            />
          ))}
        </div>
      );
    }
  }

  return (
    <Container size="large" className="flex flex-col gap-8 my-8">
      <ContentMedia>
        <Typography
          variant="h1"
          color="dark"
          weight="semibold"
          className="mb-2"
        >
          {t('staff:title')}
        </Typography>
        <Typography
          color="dark"
          className="mb-8"
        >
          {t('staff:subtitle')}
        </Typography>

        {renderImages()}

        <Typography color="dark" className="whitespace-pre-wrap">
          {t('staff:description')}
        </Typography>
      </ContentMedia>
    </Container>
  );
}
