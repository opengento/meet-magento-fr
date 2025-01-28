'use client'
import Typography from "@/components/Typography/Typography";
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import CountdownTimer from "@/components/Countdown/Countdown"
import Container from "@/layouts/Container";
import MMFRFull from "/public/images/mmfr25-full.svg";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import React from "react";
import {IoIosArrowForward} from "react-icons/io";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <BackgroundImage className="h-screen w-full flex items-center justify-center"
                       imagePath="/images/bg-hero.jpg" priority>
        <Container size="small" className="pt-[104px]">
          <div className="flex py-16">
            <div>
              <Typography variant="h2" color="light">Save the date !</Typography>
              <Typography variant="h3" color="light">Meet Magento arrive en France</Typography>
              <Typography color="light">
                Rejoignez la communauté Magento et Adobe Commerce pour une journée d&apos;innovations, d&apos;échanges
                et d&apos;expertise, à ne pas manquer !
              </Typography>
            </div>
            <div className="hidden md:flex flex-wrap justify-center gap-8">
              <MMFRFull/>
              <CountdownTimer targetDate={new Date("2025-03-25T08:00:00")}/>
              <ButtonLink
                variant="secondary"
                href="https://www.eventbrite.fr/e/billets-meet-magento-2025-france-1124570503649"
                iconPosition="right"
                icon={<IoIosArrowForward />}
              >
                Je prend mon billet
              </ButtonLink>
            </div>
          </div>
        </Container>
      </BackgroundImage>
    </div>
  );
}

export default Hero;
