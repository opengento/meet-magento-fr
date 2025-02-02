'use client';

import { SponsorProps, SponsorTypeProps } from "@/components/SponsorList/Sponsor/Sponsor.types";
import { useTranslation } from "react-i18next";
import TopBanner from "@/components/TopBanner/TopBanner";
import Image from "next/image";
import Typography from "@/components/Typography/Typography";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { IoIosArrowForward } from "react-icons/io";
import classNames from "classnames";

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

  const displayByType = t('sponsors:display', { returnObjects: true });

  const renderSponsorSection = (
    sponsorType: SponsorTypeProps,
    sponsors: SponsorProps[],
    display: string
  ) => {
    const wrapperClass = display === 'list'
      ? 'flex flex-col'
      : 'grid grid-cols-1 md:grid-cols-2';
    const boxClass = display === 'list'
      ? 'flex flex-col md:flex-row md:items-center'
      : 'flex flex-col';

    return (
      <>
        <TopBanner
          title={
            <div className="flex flex-row justify-center gap-2">
              <Image
                src={`/images/badges/${sponsorType}.svg`}
                alt={sponsorType}
                width={35}
                height={40}
              />
              {t(`sponsors:types.${sponsorType}`)}
            </div>
          }
          backgroundImage="/images/bg-gradiant-purple.jpg"
        />
        <div className={classNames(
          wrapperClass,
          "gap-8 mb-10"
        )}>
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className={classNames(
                "bg-white rounded-3xl p-6 gap-8",
                boxClass
              )}
            >
              <Image
                src={sponsor.bannerSrc}
                alt={sponsor.name}
                width={606}
                height={280}
                className="rounded-3xl object-cover"
              />
              <div className="flex flex-col gap-4">
                <Image
                  src={sponsor.logoSrc}
                  alt={sponsor.name}
                  width={100}
                  height={30}
                />
                <Typography color="dark">
                  {sponsor.description}
                </Typography>
                <ButtonLink
                  variant="secondary-invert"
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener"
                  iconPosition="right"
                  icon={<IoIosArrowForward />}
                >
                  {t('sponsors:buttonCompany')}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      {Object.keys(sponsorListByType).map((sponsorType) => (
        <>
          {renderSponsorSection(
            sponsorType,
            sponsorListByType[sponsorType],
            displayByType[sponsorType]
          )}
        </>
      ))}
    </>
  );
};

export default SponsorListByType;
