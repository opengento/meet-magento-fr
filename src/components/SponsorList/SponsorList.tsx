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
  const { t } = useTranslation(['sponsors']);
  const actions = t('actions', { returnObjects: true });

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
  const sortedSponsors: SponsorProps[] = [
    ...sponsorListByType.platinum,
    ...sponsorListByType.gold,
    ...sponsorListByType.silver,
    ...sponsorListByType.bronze,
  ];

  return (
    <BackgroundImage imagePath="/images/background/sponsors.jpg" className="py-12">
      <Container size="large">
        <TopBanner
          title="Merci à nos sponsors"
          backgroundImage="/images/pattern_top-banner_sponsors.svg"
        >
          {'submitUrl' in actions && typeof actions.submitUrl === 'string' && !!actions.submitUrl && (
            <ButtonLink variant="secondary" href={actions.submitUrl}>
              Devenir sponsor
            </ButtonLink>
          )}
          {'seeAllUrl' in actions && typeof actions.seeAllUrl === 'string' && !!actions.seeAllUrl && (
            <>
              <div className="hidden md:block">
                <ButtonLink variant="soft-pink" href={actions.seeAllUrl}>
                  Voir tous les sponsors
                </ButtonLink>
              </div>
              <div className="md:hidden">
                <ButtonLink variant="soft-pink" href={actions.seeAllUrl}>
                  Voir tout
                </ButtonLink>
              </div>
            </>
          )}
        </TopBanner>
        <div className="grid grid-cols-12 auto-rows-[1rem] lg:grid-cols-10 md:auto-rows-[2rem] gap-2 mt-6">
          {sortedSponsors.map((sponsor: SponsorProps, key: number) => (
            <Sponsor
              type={sponsor.type}
              name={sponsor.name}
              logoSrc={sponsor.whiteLogoSrc}
              key={key}
            />
          ))}
        </div>
      </Container>
    </BackgroundImage>
  );
};

export default SponsorList;
