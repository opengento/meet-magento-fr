"use client";

import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import Sponsor from "@/components/SponsorList/Sponsor/Sponsor";
import {SponsorProps, SponsorTypeProps} from "@/components/SponsorList/Sponsor/Sponsor.types";
import {SponsorListProps} from "@/components/SponsorList/SponsorListProps";
import Container from "@/layouts/Container";
import TopBanner from "@/components/TopBanner/TopBanner";
import React from "react";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink/ButtonLink";

const SponsorList = ({
                       items
                     }: SponsorListProps) => {

  const sponsorListByType: Record<SponsorTypeProps, SponsorProps[]> = items.reduce(
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
      bronze: []
    }
  );
  const sortedSponsors: SponsorProps[] = [
    ...sponsorListByType.platinum,
    ...sponsorListByType.gold,
    ...sponsorListByType.silver,
    ...sponsorListByType.bronze
  ];

  return (
    <BackgroundImage imagePath="/images/bg-gradiant-purple.jpg" className=''>
      <Container size="large" className={'overflow-hidden'}>
        <div className="mt-12">
          <TopBanner title="Merci à nos sponsors" backgroundImage="/images/pattern_top-banner_speakers.svg">
            <ButtonLink variant="secondary" href="#sponsors">Devenir sponsor</ButtonLink>
            <ButtonLink variant="soft-pink" href="#sponsors">Voir tous les sponsors</ButtonLink>
          </TopBanner>
        </div>
        <ul className={'clear-both overflow-hidden -mx-1 mt-6 mb-9 md:mb-10 md:max-w-[1350px]'}>
          {sortedSponsors.map((sponsor: SponsorProps, key: number) => (
            <Sponsor type={sponsor.type}
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
