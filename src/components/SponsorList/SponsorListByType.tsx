'use client';

import { SponsorProps, SponsorTypeProps } from "@/components/SponsorList/Sponsor/Sponsor.types";
import { useTranslation } from "react-i18next";
import TopBanner from "@/components/TopBanner/TopBanner";
import Image from "next/image";
import classNames from "classnames";
import SponsorCard from "@/components/SponsorList/Sponsor/SponsorCard";

const SponsorListByType = ({ items }: { items: SponsorProps[] }) => {
  const { t } = useTranslation(['sponsors']);

  const sponsorListByType: Record<SponsorTypeProps, SponsorProps[]> =
    items.reduce(
      (
        acc: Record<SponsorTypeProps, SponsorProps[]>,
        sponsor: SponsorProps
      ) => {
        acc[sponsor.type].push(sponsor);

        return acc;
      },
      {
        platinum: [],
        gold: [],
        silver: [],
        bronze: [],
      }
    );

  const sponsorTypes: SponsorTypeProps[] = ['platinum', 'gold', 'silver', 'bronze'];

  return (
    <div className="my-10">
      {sponsorTypes.map((sponsorType, index) => (
          <div
            key={index}
            id={sponsorType}
            className={sponsorListByType[sponsorType].length > 0 ? '' : 'hidden'}
          >
            <TopBanner
              title={
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src={`/images/badges/${sponsorType}.svg`}
                    alt={sponsorType}
                    width={35}
                    height={40}
                  />
                  <span>{t(`sponsors:types.${sponsorType}`)}</span>
                </div>
              }
              backgroundImage="/images/bg-gradiant-purple.jpg"
            />
            <div className={classNames(
              {
                "flex flex-col": sponsorType === "platinum",
                "grid grid-cols-1 md:grid-cols-2": sponsorType === "gold",
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3": sponsorType === "silver",
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4": sponsorType === "bronze",
              },
              "gap-8 mt-8 mb-16"
            )}>
              {sponsorListByType[sponsorType].map((sponsor, index) => (
                <SponsorCard sponsor={sponsor} key={index} />
              ))}
            </div>
          </div>
      ))}
    </div>
  );
};

export default SponsorListByType;
