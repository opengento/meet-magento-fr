'use client';

import Typography from "@/components/Typography/Typography";
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import CountdownTimer from "@/components/Countdown/Countdown"
import Container from "@/layouts/Container";
import MMFRFull from "/public/images/mmfr25-full.svg";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const Hero = () => {
  const {t} = useTranslation(['hero', 'common', 'place']);

  return (
    <div className="min-h-screen">
      <BackgroundImage className="h-screen w-full flex items-center justify-center"
                       imagePath="/images/bg-hero.jpg" priority>
        <Container size="default" className="pt-[104px]">
          <div className="flex py-16 gap-12 items-center">
            <div className="flex flex-col gap-2">
              <Typography
                variant="h1"
                color="light"
                weight="semibold"
              >
                {t('hero:title')}
              </Typography>
              <Typography
                variant="h2"
                color="light"
                weight="semibold"
                underlineColor="primary-100"
              >
                {t('hero:subtitle')}
              </Typography>
              <Typography color="light" className="mt-4 font-alt whitespace-pre-wrap">
                {t('hero:content')}
              </Typography>
              <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-7 text-white">
                <div className="flex h-10 gap-2 items-center rounded-full bg-white bg-opacity-20 py-2 px-6">
                  <CiCalendar size={22} />
                  <span className="font-medium">{t('hero:date')}</span>
                </div>
                <div className="flex gap-2 items-center rounded-full bg-white bg-opacity-20 py-2 px-6">
                  <FaLocationDot size={20} />
                  <Link href={t('place:data.url')} className="font-medium">{t('hero:place')}</Link>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-wrap justify-center gap-8">
              <MMFRFull/>
              <CountdownTimer targetDate={new Date("2025-03-25T08:00:00")}/>
              <ButtonLink
                variant="secondary"
                href={t('common:ticketingUrl')}
                target="_blank"
                iconPosition="right"
                icon={<IoIosArrowForward />}
              >
                {t("hero:ticket")}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </BackgroundImage>
    </div>
  );
}

export default Hero;
