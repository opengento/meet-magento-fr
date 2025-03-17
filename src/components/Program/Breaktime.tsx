"use client";

import { BreaktimeProps } from "@/components/Program/BreaktimeProps";
import React from "react";
import Typography from "@/components/Typography/Typography";
import {useTranslation} from "react-i18next";
import Link from "next/link";
import Image from "next/image";

interface Breaktime {
  breaktime: BreaktimeProps;
}

const Breaktime = ({ breaktime }: Breaktime ) => {
  const { t } = useTranslation(["common"]);
  return (
    <div className="program-tile bg-[url(/images/background/banner.svg)] bg-cover rounded-xl flex flex-col justify-between gap-6 p-4 md:p-6 h-full">
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
                className="grow object-contain"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Breaktime;
