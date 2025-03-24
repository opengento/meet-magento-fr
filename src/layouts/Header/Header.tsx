'use client';

import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";
import Logo from "@/components/Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Container from "../Container";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { FaTicketAlt } from "react-icons/fa";
import React from "react";
import { useTranslation } from "react-i18next";
import TopBanner from "@/layouts/Header/TopBanner";

const Header = () => {
  const { t } = useTranslation(['common']);
  const showTicket = t("common:showTicket", { returnObjects: true });

  const HeaderContent = () => (
    <div className="w-full overflow-hidden rounded-b-xl lg:rounded-xl">
      <BackgroundImage imagePath="/images/bg-gradiant-blue.jpg" priority>
        <div className="flex justify-between items-center">
          <div className="flex w-full justify-between gap-6 lg:gap-8 items-center h-20 px-4 lg:px-14">
            <div className="order-1">
              <Logo />
            </div>
            <div className="order-3 lg:order-2">
              <Navigation />
            </div>
            <div className="order-2 lg:order-3">
              {showTicket && (
                <ButtonLink
                  variant="primary"
                  href={t("common:ticketingUrl")}
                  target="_blank"
                  rel="noopener"
                  iconPosition="left"
                  icon={<FaTicketAlt />}
                >
                  J’achète mon billet
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );

  return (
    <header className="sticky top-0 w-full z-50">
      <TopBanner />
      <div className="hidden lg:block lg:top-6 lg:mt-6 lg:mb-0">
        <Container size="large">
          <HeaderContent/>
        </Container>
      </div>
      <div className="lg:hidden mb-10">
        <HeaderContent/>
      </div>
    </header>
  );
};

export default Header;
