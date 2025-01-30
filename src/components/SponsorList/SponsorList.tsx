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
import {useTranslation} from "react-i18next";

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
    <BackgroundImage imagePath="/images/background/sponsors.png">
      <Container size="large" className={"overflow-hidden"}>
        <div className="mt-12">
          <TopBanner
            title="Merci à nos sponsors"
            backgroundImage="/images/pattern_top-banner_sponsors.svg"
          >
            {'submitUrl' in actions && typeof actions.submitUrl === 'string' && (
              <ButtonLink variant="secondary" href={actions.submitUrl}>
                Devenir sponsor
              </ButtonLink>
            )}
            {'seeAllUrl' in actions && typeof actions.seeAllUrl === 'string' && (
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
        </div>
        <ul
          className={
            "clear-both overflow-hidden -mx-1 mt-6 mb-9 md:mb-10 md:max-w-[1350px]"
          }
        >
          {sortedSponsors.map((sponsor: SponsorProps, key: number) => (
            <Sponsor
              type={sponsor.type}
              name={sponsor.name}
              logoSrc={sponsor.logoSrc}
              key={key}
            />
          ))}
        </ul>
      </Container>
    </BackgroundImage>
  );
};

export default SponsorList;
