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

  const renderSponsorSection = (
    sponsorType: SponsorTypeProps,
    sponsors: SponsorProps[],
    display: string
  ) => {
    const wrapperClass = display === 'list'
      ? 'flex flex-col'
      : 'grid grid-cols-1 md:grid-cols-2';
    const boxClass = display === 'list'
      ? 'flex flex-col md:grid md:grid-cols-5 md:items-center'
      : 'flex flex-col';

    return (
      <>
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
          wrapperClass,
          "gap-8 mt-8 mb-16"
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
                src={sponsor.bannerSrc ?? '/images/background.svg'}
                alt={sponsor.name}
                width={606}
                height={280}
                className="rounded-3xl object-fit md:col-span-2"
              />
              <div className="flex flex-col gap-6 md:col-span-3">
                <div className="h-8">
                  <Image
                    src={sponsor.logoSrc}
                    alt={sponsor.name}
                    width={150}
                    height={30}
                    className="object-fit h-full w-auto"
                  />
                </div>
                <Typography color="dark">
                  {sponsor.description ? sponsor.description : sponsor.caption}
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

  const displayByType = t('sponsors:display', { returnObjects: true });
  const isDisplayByType = (content: object): content is Record<SponsorTypeProps, string> => {
    return content !== null && typeof content === 'object';
  }
  const sponsorTypes: SponsorTypeProps[] = ['platinum', 'gold', 'silver', 'bronze'];

  return (
    <div className="my-10">
      {sponsorTypes.map((sponsorType, index) => (
          <div
            key={index}
            id={sponsorType}
            className={sponsorListByType[sponsorType].length > 0 ? '' : 'hidden'}
          >
            {renderSponsorSection(
              sponsorType,
              sponsorListByType[sponsorType],
              isDisplayByType(displayByType) ? displayByType[sponsorType] : 'grid'
            )}
          </div>
      ))}
    </div>
  );
};

export default SponsorListByType;
