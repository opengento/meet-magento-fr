"use client";

import { BreaktimeProps } from "@/components/Program/BreaktimeProps";
import React from "react";
import Typography from "@/components/Typography/Typography";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

interface Breaktime {
  breaktime: BreaktimeProps;
}

const Breaktime = ({ breaktime }: Breaktime ) => {
  const { t } = useTranslation(["common"]);
  return (
    <div className={classNames(
      "program-tile bg-cover rounded-xl flex flex-col justify-between gap-6 p-4 md:p-6 h-full",
      {
        "bg-[url(/images/background/banner.svg)]": breaktime.background === "default",
        "bg-[url(/images/background/banner_event_1.svg)]": breaktime.background === "variant1",
        "bg-[url(/images/background/banner_event_2.svg)]": breaktime.background === "variant2",
        "bg-[url(/images/background/banner_event_3.svg)]": breaktime.background === "variant3",
      }
    )}>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="flex flex-col gap-2">
          <Typography color="light" variant="h4" weight="semibold">
            {breaktime.title}
          </Typography>
          <div className="flex items-center font-medium text-white gap-x-1">
            <span>{breaktime.start}</span>
            <span>&bull;</span>
            <span>{breaktime.end}</span>
          </div>
        </div>
        {breaktime.sponsor && (
          <div
            className="bg-white p-4 flex flex-row justify-center items-center gap-4 rounded-xl">
            <Typography color="dark" weight="semibold">
              {t("common:sponsoredBy")}
            </Typography>
            <Link
              href={breaktime.sponsor.url}
              title={breaktime.sponsor.name}
              target="_blank"
              className="flex"
            >
              <Image
                src={breaktime.sponsor.logoSrc}
                alt={breaktime.sponsor.name}
                width={125}
                height={30}
                className="max-h-8 max-w-32 grow object-contain"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Breaktime;
