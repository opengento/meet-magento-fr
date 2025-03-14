"use client";

import Typography from "@/components/Typography/Typography";
import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Container from "@/layouts/Container";
import { useTranslation } from "react-i18next";
import React from "react";
import ProgramFilter from "@/components/Program/ProgramFilter";

export default function Page() {
  const { t } = useTranslation(["program"]);

  return (
    <Container size="large" className="flex flex-col gap-8 my-8">
      <ContentMedia>
        <Typography
          variant="h2"
          color="dark"
          weight="semibold"
          className="mb-2"
        >
          {t("program:title")}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {t("program:description")}
        </Typography>
      </ContentMedia>
      <ProgramFilter />
    </Container>
  );
}
