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
import { CiCalendar, CiLinkedin, CiYoutube } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const Hero = () => {
  const { t } = useTranslation(['hero', 'common', 'place']);
  const showTicket = t("common:showTicket", { returnObjects: true });

  return (
    <div className="min-h-screen">
      <BackgroundImage
        className="h-screen w-full flex items-center justify-center"
        imagePath="/images/bg-hero.jpg"
        priority
      >
        <Container size="default" className="pt-[104px]">
          <div className="flex py-16 gap-12 items-center">
            <div className="flex flex-col gap-2">
              <h1 className="w-fit font-alt text-4xl md:text-5xl lg:text-5xl text-white font-semibold">
                {t('hero:title')}
              </h1>
              <div
                className="flex flex-wrap lg:flex-nowrap gap-4 mt-7 text-white">
                  <Link href={'/place'} className="flex gap-2 items-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 py-2 px-6 font-medium">
                    <CiLinkedin size={22}/>
                    {t('hero:linkedin-label')}
                  </Link>
                  <Link href={'/place'} className="flex gap-2 items-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 y-2 px-6 font-medium">
                    <CiYoutube size={20}/>
                    {t('hero:youtube-label')}
                  </Link>
              </div>
            </div>
            
          </div>
        </Container>
      </BackgroundImage>
    </div>
  );
}

export default Hero;
