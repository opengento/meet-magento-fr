'use client';

import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import Sponsor from "@/components/SponsorList/Sponsor/Sponsor";
import {
  SponsorProps,
  SponsorTypeProps,
} from "@/components/SponsorList/Sponsor/Sponsor.types";
import Container from "@/layouts/Container";
import TopBanner from "@/components/TopBanner/TopBanner";
import React from "react";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { useTranslation } from "react-i18next";

const SponsorList = ({ items }: { items: SponsorProps[] }) => {
  const { t } = useTranslation(['common', 'sponsors']);
  const actions = t('sponsors:actions', { returnObjects: true });

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

  return (
    <BackgroundImage imagePath="/images/background/sponsors.jpg" className="py-12">
      <Container size="large">
        <TopBanner
          title={t("sponsors:bannerTitle")}
          backgroundImage="/images/pattern_top-banner_sponsors.svg"
        >
          {'submitUrl' in actions && typeof actions.submitUrl === 'string' && !!actions.submitUrl && (
            <ButtonLink variant="secondary" href={actions.submitUrl}>
              {t("sponsors:submit")}
            </ButtonLink>
          )}
          {'seeAllUrl' in actions && typeof actions.seeAllUrl === 'string' && !!actions.seeAllUrl && (
            <>
              <div className="hidden md:block">
                <ButtonLink variant="soft-pink" href={actions.seeAllUrl}>
                  {t("sponsors:seeAll")}
                </ButtonLink>
              </div>
              <div className="md:hidden">
                <ButtonLink variant="soft-pink" href={actions.seeAllUrl}>
                  {t("common:seeAll")}
                </ButtonLink>
              </div>
            </>
          )}
        </TopBanner>
        <div className="flex flex-col gap-y-2 my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[8rem] md:auto-rows-[16rem] gap-2">
            {sponsorListByType.platinum.map((sponsor: SponsorProps, key: number) => (
              <Sponsor sponsor={sponsor} key={key}/>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[6rem] md:auto-rows-[12rem] gap-2">
            {sponsorListByType.gold.map((sponsor: SponsorProps, key: number) => (
              <Sponsor sponsor={sponsor} key={key}/>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[4rem] md:auto-rows-[8rem] gap-2">
            {sponsorListByType.silver.map((sponsor: SponsorProps, key: number) => (
              <Sponsor sponsor={sponsor} key={key}/>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 auto-rows-[3rem] md:auto-rows-[6rem] gap-2">
            {sponsorListByType.bronze.map((sponsor: SponsorProps, key: number) => (
              <Sponsor sponsor={sponsor} key={key}/>
            ))}
          </div>
        </div>
      </Container>
    </BackgroundImage>
  );
};

export default SponsorList;
