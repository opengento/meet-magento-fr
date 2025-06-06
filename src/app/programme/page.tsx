"use client";

import Typography from "@/components/Typography/Typography";
import ContentMedia from "@/components/ContentMedia/ContentMedia";
import Container from "@/layouts/Container";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Timeline from "@/components/Program/Timeline";
import ProgramFilter from "@/components/Program/ProgramFilter";

export default function Page() {
  const { t } = useTranslation(["program", "edition"]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  return (
    <Container size="large" className="flex flex-col gap-8 my-8">
      <ContentMedia>
        <Typography
          variant="h2"
          color="dark"
          weight="semibold"
          className="mb-2"
        >
          {t("edition:isWaitingNextEdition") ? t("program:waiting-title", { year: t("edition:nextEditionYear") }) : t("program:title")}
        </Typography>
        <Typography color="dark" className="whitespace-pre-wrap">
          {t("program:description")}
        </Typography>
      </ContentMedia>
      <ProgramFilter
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <Timeline activeFilters={activeFilters} />
    </Container>
  );
}
