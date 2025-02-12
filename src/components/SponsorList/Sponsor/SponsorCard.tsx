'use client';

import { SponsorProps } from "@/components/SponsorList/Sponsor/Sponsor.types";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Typography from "@/components/Typography/Typography";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { IoIosArrowForward } from "react-icons/io";
import classNames from "classnames";
import Link from "next/link";

const SponsorCard = ({ sponsor }: { sponsor: SponsorProps }) => {
  const { t } = useTranslation(['sponsors']);

  if (sponsor.type === "bronze") {
    return (
      <Link
        href={sponsor.url}
        target="_blank"
        rel="noopener"
        className="bg-white rounded-md flex justify-center items-center px-14 py-16 transform transition duration-500 hover:scale-110"
      >
        <Image
          src={sponsor.logoSrc}
          alt={sponsor.name}
          width={150}
          height={30}
          className="object-contain h-full w-full"
        />
      </Link>
    );
  }

  return (
    <div
      className={classNames(
        "bg-white rounded-xl flex flex-col gap-8 p-6",
        {
          "md:grid md:grid-cols-5 md:items-center": sponsor.type === "platinum"
        }
      )}
    >
      <Image
        src={sponsor.bannerSrc ?? '/images/background.svg'}
        alt={sponsor.name}
        width={606}
        height={280}
        className="rounded-3xl object-contain md:col-span-2"
      />
      <div className="flex flex-col gap-6 md:col-span-3">
        <div className="h-8">
          <Image
            src={sponsor.logoSrc}
            alt={sponsor.name}
            width={150}
            height={30}
            className="object-contain h-full w-auto max-w-48"
          />
        </div>
        <Typography color="dark">
          {sponsor.description ? sponsor.description : sponsor.caption}
        </Typography>
        <ButtonLink
          variant="secondary-invert-w-border"
          href={sponsor.url}
          target="_blank"
          rel="noopener"
          iconPosition="right"
          icon={<IoIosArrowForward/>}
        >
          {t('sponsors:buttonCompany')}
        </ButtonLink>
      </div>
    </div>
  );
};

export default SponsorCard;
